import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Users, Recycle } from "lucide-react";

const AboutSection = () => {
  const strengths = [
    {
      title: "Authorized Distributor",
      description: "Official distributors of Supreme Petrochemicals for GPPS and HIPS products",
      icon: Award,
    },
    {
      title: "Comprehensive Inventory",
      description: "Wide range of commodity polymers including PP, PVC, and HDPE",
      icon: TrendingUp,
    },
    {
      title: "Engineering Expertise",
      description: "Specialized engineering polymers including Nylon, ABS, and SAN",
      icon: Users,
    },
    {
      title: "Sustainable Solutions",
      description: "Eco-friendly recycled polymer options for environmentally conscious applications",
      icon: Recycle,
    },
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1620115245028-87a2eef651bf" 
              alt="Colorful polymer granules" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Mehta Polychem</h2>
            <p className="text-muted-foreground mb-4">
              Founded <strong>30 years ago</strong>, Mehta Polychem has established itself as a <strong>reliable partner</strong> in the polymer industry. With our <strong>extensive experience</strong> and <strong>commitment to quality</strong>, we have built strong relationships with manufacturers and customers alike.
            </p>
            <p className="text-muted-foreground mb-6">
              Our company engages in <strong>trading, distribution, and imports</strong> of a wide range of polymers throughout India. With strategically located stockpoints in <strong>Bhiwandi and Daman</strong>, we ensure <strong>timely delivery</strong> and excellent service to our customers.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Our Key Strengths</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {strengths.map((strength, index) => {
                  const IconComponent = strength.icon;
                  return (
                    <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-all">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <div className="mr-3 text-primary">
                            <IconComponent className="h-5 w-5" />
                          </div>
                          <div>
                            <h4 className="font-medium text-sm">{strength.title}</h4>
                            <p className="text-sm text-muted-foreground">{strength.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
            
            <Button asChild>
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
