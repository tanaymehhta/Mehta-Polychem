import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";

const contactFormSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  message: z.string().min(10),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = contactFormSchema.parse(req.body);
      
      // Store the submission in memory
      const submission = await storage.createContactSubmission(validatedData);
      
      res.status(200).json({ 
        success: true, 
        message: "Contact form submission received successfully",
        submission
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      
      res.status(500).json({ 
        success: false, 
        message: "Server error processing your request" 
      });
    }
  });

  // Newsletter subscription endpoint
  app.post("/api/subscribe", async (req, res) => {
    try {
      const { email } = req.body;
      
      if (!email || typeof email !== "string") {
        return res.status(400).json({
          success: false,
          message: "Email is required"
        });
      }
      
      // Validate email format
      const emailSchema = z.string().email();
      emailSchema.parse(email);
      
      // In a real application, you would save this to a database
      // or add to a newsletter service
      
      res.status(200).json({
        success: true,
        message: "Subscription successful"
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({
          success: false,
          message: "Invalid email format"
        });
      }
      
      res.status(500).json({
        success: false,
        message: "Server error processing your request"
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
