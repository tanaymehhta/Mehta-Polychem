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
import { MapPin, Phone, Mail, Linkedin, Twitter, Facebook, Instagram } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Helmet } from 'react-helmet-async';

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
      <Helmet>
        <title>Contact Mehta Polychem - Petrochemical Supply Chain Solutions</title>
        <meta name="description" content="Connect with one of India's leading petrochemical trading companies for custom polymer requirements, logistics services, and comprehensive supply chain solutions." />
        <meta name="keywords" content="Contact Mehta Polychem, Petrochemical suppliers Mumbai, Polymer distribution India, GPPS HIPS suppliers, Chemical industry suppliers, Bhiwandi stockpoint, Daman stockpoint, Supreme Petrochemicals distributor" />
        <link rel="canonical" href="https://www.mehtapolychem.com/contact" />
        <meta property="og:title" content="Contact Mehta Polychem - Petrochemical Supply Chain Solutions" />
        <meta property="og:description" content="Reach out to Mehta Polychem for all your petrochemical and polymer needs. Corporate office in Mumbai with nationwide service through strategic stockpoints." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mehtapolychem.com/contact" />
      </Helmet>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12" itemScope itemType="https://schema.org/Organization">
          <h1 className="text-4xl font-bold mb-4" itemProp="name">Contact Mehta Polychem - Petrochemical Supply Chain Solutions</h1>
          <p className="text-lg text-muted-foreground" itemProp="description">
            Connect with one of India's leading petrochemical trading companies for custom polymer requirements, logistics services, and comprehensive supply chain solutions
          </p>
          <meta itemProp="keywords" content="Petrochemical trading, Import, Export, Distribution, Chemical industry, Supply chain solutions, Logistics services, Polymer distribution in India" />
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
            <div itemScope itemType="https://schema.org/Organization">
              <h2 className="text-2xl font-bold mb-6">Corporate Office</h2>
              <div className="space-y-4">
                <div className="flex items-start" itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <MapPin className="h-5 w-5 text-primary mt-1 mr-3" />
                  <p className="text-muted-foreground">
                    <span itemProp="streetAddress">307 Gemstar Commercial Complex, Ramchandra Lane</span>, 
                    <span itemProp="addressLocality">Malad West</span>, 
                    <span itemProp="addressRegion">Mumbai</span> 
                    <span itemProp="postalCode">400064</span>
                    <meta itemProp="addressCountry" content="India" />
                  </p>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <p className="text-muted-foreground">
                    <a href="tel:+91-022-4064-7171" itemProp="telephone">+91 022 4064 7171</a>
                  </p>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <p className="text-muted-foreground">
                    <a href="mailto:info@mehtapolychem.com" itemProp="email">info@mehtapolychem.com</a>
                  </p>
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
      </Container>
    </div>
  );
};

export default Contact;
