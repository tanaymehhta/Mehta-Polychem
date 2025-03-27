import { 
  type ContactSubmission, 
  type InsertContactSubmission,
  type Subscriber,
  type InsertSubscriber,
  type BlogPost,
  type InsertBlogPost,
  contactSubmissions,
  subscribers,
  blogPosts
} from "@shared/schema";
import { drizzle } from "drizzle-orm/postgres-js";
import { eq } from "drizzle-orm";
import postgres from "postgres";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";

// Modify the interface with any CRUD methods you might need
export interface IStorage {
  // Contact submissions
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Subscribers
  getSubscriber(id: number): Promise<Subscriber | undefined>;
  getSubscriberByEmail(email: string): Promise<Subscriber | undefined>;
  createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber>;
  
  // Blog posts
  getBlogPost(id: number): Promise<BlogPost | undefined>;
  getBlogPostBySlug(slug: string): Promise<BlogPost | undefined>;
  getAllBlogPosts(): Promise<BlogPost[]>;
  createBlogPost(post: InsertBlogPost): Promise<BlogPost>;
}

// Service for Google Sheets integration
export class GoogleSheetsService {
  private doc!: GoogleSpreadsheet;
  private isInitialized: boolean = false;
  
  constructor() {
    try {
      const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
      const privateKey = process.env.GOOGLE_PRIVATE_KEY;
      const spreadsheetId = process.env.GOOGLE_SHEET_ID;
      
      if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
        console.error("Google Sheets credentials missing. Contact form data will not be saved to Google Sheets.");
        return;
      }
      
      // Clean and format the private key properly
      let formattedKey = privateKey;
      // If the key doesn't contain newlines, add them
      if (!formattedKey.includes("-----BEGIN PRIVATE KEY-----\n")) {
        formattedKey = formattedKey
          .replace("-----BEGIN PRIVATE KEY-----", "-----BEGIN PRIVATE KEY-----\n")
          .replace("-----END PRIVATE KEY-----", "\n-----END PRIVATE KEY-----");
      }
      
      // Replace any encoded newlines
      formattedKey = formattedKey.replace(/\\n/g, '\n');
      
      const jwt = new JWT({
        email: serviceAccountEmail,
        key: formattedKey,
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive.file',
        ],
      });
      
      this.doc = new GoogleSpreadsheet(spreadsheetId, jwt);
      console.log("Google Sheets service initialized");
    } catch (error) {
      console.error("Error initializing Google Sheets service:", error);
    }
  }
  
  async init() {
    if (this.isInitialized) return;
    
    try {
      await this.doc.loadInfo();
      
      // Get the first sheet or create one if it doesn't exist
      let sheet = this.doc.sheetsByIndex[0];
      if (!sheet) {
        sheet = await this.doc.addSheet({ 
          title: 'Contact Form Submissions',
          headerValues: ['Timestamp', 'Name', 'Email', 'Phone', 'Message']
        });
      } else {
        // Make sure the sheet has the correct headers
        const headers = await sheet.headerValues;
        if (!headers || headers.length !== 5 || 
            headers[0] !== 'Timestamp' || 
            headers[1] !== 'Name' || 
            headers[2] !== 'Email' || 
            headers[3] !== 'Phone' || 
            headers[4] !== 'Message') {
          
          // Set the headers if they don't match
          await sheet.setHeaderRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
        }
      }
      
      this.isInitialized = true;
      console.log("Google Sheets service initialized successfully");
    } catch (error) {
      console.error("Error initializing Google Sheets:", error);
    }
  }
  
  async addContactSubmission(submission: InsertContactSubmission) {
    if (!this.isInitialized) {
      await this.init();
    }
    
    try {
      const sheet = this.doc.sheetsByIndex[0];
      if (!sheet) {
        console.error("Sheet not found");
        return;
      }
      
      await sheet.addRow({
        Timestamp: new Date().toISOString(),
        Name: submission.name,
        Email: submission.email,
        Phone: submission.phone,
        Message: submission.message
      });
      
      console.log("Contact submission added to Google Sheets");
    } catch (error) {
      console.error("Error adding contact submission to Google Sheets:", error);
    }
  }
}

// In-memory storage implementation
export class MemStorage implements IStorage {
  private contactSubmissions: Map<number, ContactSubmission>;
  private subscribers: Map<number, Subscriber>;
  private blogPosts: Map<number, BlogPost>;
  
  private contactSubmissionId: number;
  private subscriberId: number;
  private blogPostId: number;

  constructor() {
    this.contactSubmissions = new Map();
    this.subscribers = new Map();
    this.blogPosts = new Map();
    
    this.contactSubmissionId = 1;
    this.subscriberId = 1;
    this.blogPostId = 1;
  }

  // Contact submission methods
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }

  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionId++;
    const createdAt = new Date();
    const contactSubmission: ContactSubmission = { 
      ...submission, 
      id,
      createdAt 
    };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  // Subscriber methods
  async getSubscriber(id: number): Promise<Subscriber | undefined> {
    return this.subscribers.get(id);
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    return Array.from(this.subscribers.values()).find(
      (subscriber) => subscriber.email === email
    );
  }
  
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const id = this.subscriberId++;
    const createdAt = new Date();
    const newSubscriber: Subscriber = {
      ...subscriber,
      id,
      active: true,
      createdAt
    };
    this.subscribers.set(id, newSubscriber);
    return newSubscriber;
  }
  
  // Blog post methods
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    return this.blogPosts.get(id);
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    return Array.from(this.blogPosts.values()).find(
      (post) => post.slug === slug
    );
  }
  
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return Array.from(this.blogPosts.values());
  }
  
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const id = this.blogPostId++;
    const createdAt = new Date();
    const updatedAt = new Date();
    
    // Create a complete blog post with all required fields, ensuring the featuredImage is never undefined
    const blogPost: BlogPost = {
      id,
      title: post.title,
      slug: post.slug,
      excerpt: post.excerpt,
      content: post.content,
      category: post.category,
      publishedAt: post.publishedAt,
      createdAt,
      updatedAt,
      featuredImage: post.featuredImage || null
    };
    
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
}

// PostgreSQL storage implementation
export class DbStorage implements IStorage {
  private db: ReturnType<typeof drizzle>;
  private googleSheets: GoogleSheetsService;
  
  constructor() {
    // Initialize database connection
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL environment variable is not set");
    }
    
    const connectionString = process.env.DATABASE_URL;
    const client = postgres(connectionString);
    this.db = drizzle(client);
    
    // Initialize Google Sheets service
    this.googleSheets = new GoogleSheetsService();
    this.googleSheets.init().catch(console.error);
  }
  
  // Contact submission methods
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    const results = await this.db.select().from(contactSubmissions).where(eq(contactSubmissions.id, id));
    return results[0];
  }
  
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    // Store in PostgreSQL
    const [result] = await this.db.insert(contactSubmissions).values(submission).returning();
    
    // Also store in Google Sheets
    try {
      await this.googleSheets.addContactSubmission(submission);
    } catch (error) {
      console.error("Failed to save to Google Sheets:", error);
      // Continue with the function even if Google Sheets save fails
    }
    
    return result;
  }
  
  // Subscriber methods
  async getSubscriber(id: number): Promise<Subscriber | undefined> {
    const results = await this.db.select().from(subscribers).where(eq(subscribers.id, id));
    return results[0];
  }
  
  async getSubscriberByEmail(email: string): Promise<Subscriber | undefined> {
    const results = await this.db.select().from(subscribers).where(eq(subscribers.email, email));
    return results[0];
  }
  
  async createSubscriber(subscriber: InsertSubscriber): Promise<Subscriber> {
    const [result] = await this.db.insert(subscribers).values(subscriber).returning();
    return result;
  }
  
  // Blog post methods
  async getBlogPost(id: number): Promise<BlogPost | undefined> {
    const results = await this.db.select().from(blogPosts).where(eq(blogPosts.id, id));
    return results[0];
  }
  
  async getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    const results = await this.db.select().from(blogPosts).where(eq(blogPosts.slug, slug));
    return results[0];
  }
  
  async getAllBlogPosts(): Promise<BlogPost[]> {
    return await this.db.select().from(blogPosts);
  }
  
  async createBlogPost(post: InsertBlogPost): Promise<BlogPost> {
    const [result] = await this.db.insert(blogPosts).values(post).returning();
    return result;
  }
}

// Use the DATABASE_URL environment variable to determine which storage to use
export const storage = process.env.DATABASE_URL ? new DbStorage() : new MemStorage();
