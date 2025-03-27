import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormValues>({
    name: "",
    email: "",
    phone: "",
    message: ""
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormValues, string>>>({});

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    },
    onError: () => {
      toast({
        title: "Something went wrong.",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    },
  });

  const validateForm = (): boolean => {
    try {
      contactFormSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Partial<Record<keyof ContactFormValues, string>> = {};
        error.errors.forEach((err) => {
          if (err.path) {
            newErrors[err.path[0] as keyof ContactFormValues] = err.message;
          }
        });
        setErrors(newErrors);
      }
      return false;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      contactMutation.mutate(formData);
    }
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900">Contact Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have questions or need a quote? Our team is ready to assist you.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2 bg-primary/5 p-6 rounded-lg border border-primary/20">
            <h3 className="text-xl font-semibold mb-6 text-neutral-900">Get in Touch</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <Label htmlFor="name" className="text-neutral-700">Your Name</Label>
                <Input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="bg-white border-neutral-300"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <Label htmlFor="email" className="text-neutral-700">Email Address</Label>
                <Input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="bg-white border-neutral-300"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <Label htmlFor="phone" className="text-neutral-700">Phone Number</Label>
                <Input 
                  type="tel" 
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="bg-white border-neutral-300"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div>
                <Label htmlFor="message" className="text-neutral-700">Message</Label>
                <Textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Tell us about your requirements"
                  className="bg-white border-neutral-300"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={contactMutation.isPending}
              >
                {contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
          
          <div className="md:w-1/2">
            <h3 className="text-xl font-semibold mb-6 text-neutral-900">Corporate Office</h3>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mr-3 mt-1" />
                <p className="text-neutral-700">
                  307 Gemstar Commercial Complex, Ramchandra Lane, Malad West, Mumbai 400064
                </p>
              </div>
              
              <div className="flex items-center">
                <Phone className="text-primary h-5 w-5 mr-3" />
                <p className="text-neutral-700">+91 022 4064 7171</p>
              </div>
              
              <div className="flex items-center">
                <Mail className="text-primary h-5 w-5 mr-3" />
                <p className="text-neutral-700">info@mehtapolychem.com</p>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-6 text-neutral-900">Connect With Us</h3>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-all">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
