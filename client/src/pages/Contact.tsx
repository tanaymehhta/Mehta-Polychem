import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { MapPin, Phone, Mail, Clock, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
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

const Contact = () => {
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      form.reset();
    },
    onError: () => {
      toast({
        title: "Something went wrong.",
        description: "Your message could not be sent. Please try again later.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    contactMutation.mutate(data);
  }

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions or need a quote? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your email" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your phone number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your requirements" 
                            rows={4} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <Button 
                    type="submit" 
                    className="w-full"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-6">Corporate Office</h2>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <p className="text-muted-foreground">
                    123 Corporate Tower, Business District, Mumbai - 400001, Maharashtra, India
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <p className="text-muted-foreground">+91 22 1234 5678</p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <p className="text-muted-foreground">info@mehtapolychem.com</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Business Hours</h2>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3" />
                    <span>Monday - Friday</span>
                  </div>
                  <span className="text-muted-foreground">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3 opacity-0" />
                    <span>Saturday</span>
                  </div>
                  <span className="text-muted-foreground">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-primary mr-3 opacity-0" />
                    <span>Sunday</span>
                  </div>
                  <span className="text-muted-foreground">Closed</span>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="#" 
                  className="bg-muted hover:bg-primary hover:text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-6 text-center">Our Stockpoints</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1586528116493-a029325540f5" 
                alt="Bhiwandi warehouse facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Bhiwandi Stockpoint</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                <p className="text-muted-foreground">
                  Plot No. 123, MIDC Industrial Area, Bhiwandi, Maharashtra - 421302, India
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <p className="text-muted-foreground">+91 98765 43210</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <p className="text-muted-foreground">bhiwandi@mehtapolychem.com</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="overflow-hidden">
            <div className="h-56 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1484712401471-05c7215830eb" 
                alt="Daman warehouse facility" 
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-2">Daman Stockpoint</h3>
              <div className="flex items-start mb-4">
                <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                <p className="text-muted-foreground">
                  Survey No. 456, Industrial Estate, Daman - 396210, Union Territory of Daman & Diu, India
                </p>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="h-5 w-5 text-primary mr-3" />
                <p className="text-muted-foreground">+91 98765 12345</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-primary mr-3" />
                <p className="text-muted-foreground">daman@mehtapolychem.com</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
