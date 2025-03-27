import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";

const PartnershipsSection = () => {
  return (
    <section className="py-16 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Our Partnerships</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are proud to be official distributors of renowned manufacturers in the polymer industry.
          </p>
        </div>
        
        <div className="bg-muted p-8 rounded-lg mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="md:w-1/3">
              {/* Placeholder for Supreme Petrochemicals logo */}
              <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center h-32">
                <h3 className="text-xl font-bold text-neutral-800">Supreme Petrochemicals</h3>
              </div>
            </div>
            <div className="md:w-2/3">
              <h3 className="text-xl font-semibold mb-3">Official Distributors of Supreme Petrochemicals</h3>
              <p className="text-muted-foreground mb-4">
                As authorized distributors for Supreme Petrochemicals, we provide high-quality GPPS and HIPS products to various industries across India. This strategic partnership ensures our customers receive premium polymers with reliable supply chains.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">GPPS</Badge>
                <Badge variant="secondary">HIPS</Badge>
                <Badge variant="secondary">High Performance</Badge>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <p className="mb-6 text-muted-foreground">Interested in becoming a partner or distributor?</p>
          <Button asChild variant="outline">
            <Link href="/contact">Discuss Partnership Opportunities</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default PartnershipsSection;
