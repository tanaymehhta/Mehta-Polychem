import { 
  type ContactSubmission, 
  type InsertContactSubmission,
  type Subscriber,
  type InsertSubscriber,
  type BlogPost,
  type InsertBlogPost
} from "@shared/schema";

// modify the interface with any CRUD methods
// you might need

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
    const blogPost: BlogPost = {
      ...post,
      id,
      createdAt,
      updatedAt
    };
    this.blogPosts.set(id, blogPost);
    return blogPost;
  }
}

export const storage = new MemStorage();
