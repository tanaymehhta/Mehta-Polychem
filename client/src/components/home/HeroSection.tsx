import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="relative">
      <div className="h-[80vh] bg-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" 
          alt="Industrial polymer manufacturing facility" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
              Transforming Polymer Distribution for 30 Years
            </h1>
            <p className="text-lg md:text-xl mb-8 text-neutral-100">
              Your trusted partner in polymer distribution, trading, and imports across India
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/products">Our Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-neutral-100">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
