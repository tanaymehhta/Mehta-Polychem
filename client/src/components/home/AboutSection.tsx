import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Check } from "lucide-react";

const AboutSection = () => {
  const strengths = [
    "Official distributors of Supreme Petrochemicals for GPPS and HIPS products",
    "Comprehensive inventory of commodity polymers (PP, PVC, HD)",
    "Specialized engineering polymers (Nylon, ABS, SAN)",
    "Sustainable recycled polymer solutions",
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <Container>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122" 
              alt="Professional business team at Mehta Polychem" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">About Mehta Polychem</h2>
            <p className="text-muted-foreground mb-4">
              Founded 30 years ago, Mehta Polychem has established itself as a reliable partner in the polymer industry. With our extensive experience and commitment to quality, we have built strong relationships with manufacturers and customers alike.
            </p>
            <p className="text-muted-foreground mb-6">
              Our company engages in trading, distribution, and imports of a wide range of polymers throughout India. With strategically located stockpoints in Bhiwandi and Daman, we ensure timely delivery and excellent service to our customers.
            </p>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3">Key Strengths:</h3>
              <ul className="space-y-2">
                {strengths.map((strength, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="text-primary h-5 w-5 mr-2 mt-1 flex-shrink-0" />
                    <span>{strength}</span>
                  </li>
                ))}
              </ul>
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
