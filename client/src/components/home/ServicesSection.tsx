import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Award, TrendingUp, Users } from "lucide-react";

const ServicesSection = () => {
  // Key strengths from the About section as requested
  const strengths = [
    {
      id: 1,
      title: "Authorized Distributor",
      description: "Official distributors of Supreme Petrochemicals for GPPS and HIPS products",
      icon: Award
    },
    {
      id: 2,
      title: "Comprehensive Inventory",
      description: "Wide range of commodity polymers including PP, PVC, and HDPE",
      icon: TrendingUp
    },
    {
      id: 3,
      title: "Engineering Expertise",
      description: "Specialized engineering polymers including Nylon, ABS, and SAN",
      icon: Users
    }
  ];

  return (
    <section className="py-16 bg-muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Key Strengths</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering reliable polymer solutions to various industries with our extensive distribution network and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((strength) => {
            const IconComponent = strength.icon;
            return (
              <Card key={strength.id} className="hover:shadow-lg transition-all border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                      <IconComponent className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-semibold">{strength.title}</h3>
                  </div>
                  <p className="text-muted-foreground">{strength.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesSection;
