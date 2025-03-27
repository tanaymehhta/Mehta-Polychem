import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const HeroSection = () => {
  return (
    <section className="relative" itemScope itemType="https://schema.org/Organization">
      <meta itemProp="name" content="Mehta Polychem" />
      <meta itemProp="description" content="Leading Petrochemical Trading & Distribution company in India providing polymers, plastics, and industrial chemicals with efficient supply chain solutions for over 30 years" />
      <meta itemProp="keywords" content="Petrochemical trading, Polymer distribution, Plastics supply, Import export, Chemical industry in India, Supply chain, Logistics services" />
      <meta itemProp="url" content="https://mehtapolychem.com" />
      <meta itemProp="foundingDate" content="1993" />
      <meta itemProp="foundingLocation" content="Mumbai, India" />
      <div className="h-[80vh] bg-neutral-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1" 
          alt="Industrial petrochemical manufacturing facility in India" 
          className="absolute inset-0 w-full h-full object-cover"
          itemProp="image"
        />
        <div className="container mx-auto px-4 h-full flex items-center relative z-20">
          <div className="max-w-xl text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight" itemProp="slogan">
              Leading Petrochemical Trading & Distribution in India
            </h1>
            <p className="text-lg md:text-xl mb-6 text-neutral-100">
              Providing premium polymers, plastics, and base oils with comprehensive supply chain solutions for 30 years
            </p>
            <p className="text-base md:text-lg mb-8 text-neutral-100">
              Experts in import, export, and distribution of industrial chemicals with efficient logistics services across India
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
                <Link href="/products">Explore Our Products</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="bg-white text-primary hover:bg-neutral-100">
                <Link href="/contact">Supply Chain Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
