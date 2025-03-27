import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const AboutSection = () => {
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
