import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import { stockpoints } from "@/lib/data";

const LocationsSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Stockpoints</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Strategically located warehouses ensuring efficient distribution across India.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {stockpoints.map((location) => (
            <Card key={location.id} className="overflow-hidden shadow-md">
              <div className="h-56 overflow-hidden">
                <img 
                  src={location.image} 
                  alt={`${location.name} facility`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{location.name}</h3>
                <div className="flex items-start mb-4">
                  <MapPin className="text-primary h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">{location.address}</p>
                </div>
                <div className="flex items-center mb-4">
                  <Phone className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{location.phone}</p>
                </div>
                <div className="flex items-center">
                  <Mail className="text-primary h-5 w-5 mr-2 flex-shrink-0" />
                  <p className="text-muted-foreground">{location.email}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default LocationsSection;
