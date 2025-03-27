import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { polymerProducts } from "@/lib/data";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProducts = activeCategory === "all" 
    ? polymerProducts.slice(0, 6)
    : polymerProducts.filter(product => product.category === activeCategory).slice(0, 6);

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
  };

  return (
    <section id="products" className="py-16 bg-muted">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-neutral-900 mb-4">Product Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of polymers catering to diverse industrial applications.
          </p>
        </div>
        
        <div className="mb-10">
          <div className="flex flex-wrap justify-center mb-8 gap-3">
            <FilterButton 
              active={activeCategory === "all"} 
              onClick={() => handleCategoryChange("all")}
            >
              All Products
            </FilterButton>
            <FilterButton 
              active={activeCategory === "commodity"} 
              onClick={() => handleCategoryChange("commodity")}
            >
              Commodity Polymers
            </FilterButton>
            <FilterButton 
              active={activeCategory === "engineering"} 
              onClick={() => handleCategoryChange("engineering")}
            >
              Engineering Polymers
            </FilterButton>
            <FilterButton 
              active={activeCategory === "recycled"} 
              onClick={() => handleCategoryChange("recycled")}
            >
              Recycled Polymers
            </FilterButton>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="mb-6 text-muted-foreground">Looking for a specific polymer not listed here?</p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us for Custom Requirements</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

interface FilterButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

const FilterButton = ({ active, onClick, children }: FilterButtonProps) => {
  return (
    <button
      className={`py-2 px-5 rounded-full transition-all ${
        active 
          ? "bg-primary text-white" 
          : "bg-white text-neutral-800 hover:bg-neutral-200"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    description: string;
    image: string;
    category: string;
    applications: string[];
  };
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <Link href="/contact">
          <a className="text-primary font-medium hover:text-primary/80 transition-all inline-flex items-center">
            Inquire Now
            <ArrowRight className="ml-1 h-4 w-4" />
          </a>
        </Link>
      </CardContent>
    </Card>
  );
};

export default ProductsSection;
