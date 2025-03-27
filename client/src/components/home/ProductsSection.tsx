import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { polymerProducts } from "@/lib/data";

const ProductsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Get counts for each category to display
  const commodityCount = polymerProducts.filter(p => p.category === 'commodity').length;
  const engineeringCount = polymerProducts.filter(p => p.category === 'engineering').length;
  const masterbatchCount = polymerProducts.filter(p => p.category === 'masterbatch').length;
  const recycledCount = polymerProducts.filter(p => p.category === 'recycled').length;

  const filteredProducts = activeCategory === "all" 
    ? polymerProducts.slice(0, 3)
    : polymerProducts.filter(product => product.category === activeCategory).slice(0, 3);

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
        
        {/* Product Categories Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <CategorySummaryCard 
            title="Commodity Polymers"
            count={commodityCount}
            description="Standard polymers for everyday applications"
            onClick={() => handleCategoryChange("commodity")}
          />
          <CategorySummaryCard 
            title="Engineering Polymers"
            count={engineeringCount}
            description="High-performance resins for demanding uses"
            onClick={() => handleCategoryChange("engineering")}
          />
          <CategorySummaryCard 
            title="Masterbatches & Fillers"
            count={masterbatchCount}
            description="Color and additive concentrates"
            onClick={() => handleCategoryChange("masterbatch")}
          />
          <CategorySummaryCard 
            title="Recycled Polymers"
            count={recycledCount}
            description="Sustainable alternatives for eco-conscious applications"
            onClick={() => handleCategoryChange("recycled")}
          />
        </div>
        
        {/* Product Filters */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center mb-8 gap-3">
            <FilterButton 
              active={activeCategory === "all"} 
              onClick={() => handleCategoryChange("all")}
            >
              Featured Products
            </FilterButton>
            <FilterButton 
              active={activeCategory === "commodity"} 
              onClick={() => handleCategoryChange("commodity")}
            >
              Commodity
            </FilterButton>
            <FilterButton 
              active={activeCategory === "engineering"} 
              onClick={() => handleCategoryChange("engineering")}
            >
              Engineering
            </FilterButton>
            {/* Use a regular button for the masterbatches filter since we're redirecting */}
            <button
              className={`py-2 px-5 rounded-full transition-all ${
                activeCategory === "masterbatch" 
                  ? "bg-primary text-white" 
                  : "bg-white text-neutral-800 hover:bg-neutral-200"
              }`}
              onClick={() => {
                window.open("https://www.keesha.co.in/white-masterbatches-9291378.html", "_blank", "noopener,noreferrer");
              }}
            >
              Masterbatches
            </button>
            <FilterButton 
              active={activeCategory === "recycled"} 
              onClick={() => handleCategoryChange("recycled")}
            >
              Recycled
            </FilterButton>
          </div>
        </div>
        
        {/* Product Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-12">
          <Button asChild className="mb-8">
            <Link href="/products">
              <span>View All {polymerProducts.length} Products</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-muted-foreground mb-4">Looking for a specific polymer not listed here?</p>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Us for Custom Requirements</Link>
          </Button>
        </div>
      </Container>
    </section>
  );
};

interface CategorySummaryCardProps {
  title: string;
  count: number;
  description: string;
  onClick: () => void;
}

const CategorySummaryCard = ({ title, count, description, onClick }: CategorySummaryCardProps) => {
  // Check if this is the masterbatches category
  const isMasterbatch = title.toLowerCase().includes('masterbatch');
  
  // Handle card click based on category
  const handleClick = (e: React.MouseEvent) => {
    if (isMasterbatch) {
      // For masterbatches, open the external URL
      window.open("https://www.keesha.co.in/white-masterbatches-9291378.html", "_blank", "noopener,noreferrer");
    } else {
      // For other categories, use the provided onClick handler
      onClick();
    }
  };
  
  // For masterbatches, link directly to external site
  const ActionButton = () => {
    if (isMasterbatch) {
      return (
        <Button 
          variant="link" 
          className="p-0 h-auto text-sm flex items-center"
          onClick={(e: React.MouseEvent) => {
            e.stopPropagation();
            window.open("https://www.keesha.co.in/white-masterbatches-9291378.html", "_blank", "noopener,noreferrer");
          }}
        >
          <span>View on Keesha</span>
          <ChevronRight className="ml-1 h-3 w-3" />
        </Button>
      );
    }
    
    return (
      <Button 
        variant="link" 
        className="p-0 h-auto text-sm flex items-center"
        onClick={(e: React.MouseEvent) => {
          e.stopPropagation();
          onClick();
        }}
      >
        <span>View Products</span>
        <ChevronRight className="ml-1 h-3 w-3" />
      </Button>
    );
  };
  
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <Badge variant="secondary" className="mb-3">{count} Products</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="mt-auto">
          <ActionButton />
        </div>
      </div>
    </div>
  );
};

interface FilterButtonProps {
  active: boolean;
  onClick: (e?: React.MouseEvent) => void;
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
  // Check if this is a masterbatch product
  const isMasterbatch = product.category === 'masterbatch';
  
  // Determine link destination
  const linkDestination = isMasterbatch 
    ? "https://www.keesha.co.in/white-masterbatches-9291378.html" 
    : "/products";
  
  // Use regular Link for internal links, or <a> for external
  const LinkComponent = isMasterbatch 
    ? ({ children }: { children: React.ReactNode }) => (
        <a href={linkDestination} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-primary hover:text-primary/80">
          {children}
        </a>
      )
    : ({ children }: { children: React.ReactNode }) => (
        <Link href={linkDestination}>
          {children}
        </Link>
      );
      
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
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <Badge className="capitalize">{product.category}</Badge>
        </div>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {product.applications.slice(0, 2).map((app, index) => (
              <Badge key={index} variant="outline">{app}</Badge>
            ))}
            {product.applications.length > 2 && (
              <Badge variant="outline">+{product.applications.length - 2}</Badge>
            )}
          </div>
          <Button asChild variant="link" className="p-0">
            <LinkComponent>
              <span>{isMasterbatch ? "Buy Now" : "Details"}</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </LinkComponent>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductsSection;
