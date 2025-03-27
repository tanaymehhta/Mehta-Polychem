import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Ship, Recycle } from "lucide-react";
import { services } from "@/lib/data";

const ServicesSection = () => {
  // Map of icon names to components
  const iconMap = {
    ShoppingCart,
    Ship,
    Recycle
  };

  return (
    <section className="py-16 bg-muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Polymer Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Delivering reliable polymer solutions to various industries with our extensive distribution network and technical expertise.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <Card key={service.id} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="text-primary text-4xl mb-4">
                    <IconComponent className="h-10 w-10" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
