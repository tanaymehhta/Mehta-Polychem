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
        
        {/* Partnerships content goes here */}
        
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
