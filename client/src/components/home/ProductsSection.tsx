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
    <section id="products" className="py-10 sm:py-16 bg-muted">
      <Container>
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-3 sm:mb-4">Product Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto px-4">
            Explore our comprehensive range of polymers catering to diverse industrial applications.
          </p>
        </div>
        
        {/* Product Categories Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
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
        <div className="mb-8 sm:mb-10 px-2 sm:px-0">
          <div className="flex flex-wrap justify-center mb-6 sm:mb-8 gap-2 sm:gap-3">
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
              className={`py-2 px-3 sm:px-5 text-sm sm:text-base rounded-full transition-all ${
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-0">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        {/* View All CTA */}
        <div className="text-center mt-8 sm:mt-12 px-4">
          <Button asChild className="mb-6 sm:mb-8 w-full sm:w-auto">
            <Link href="/products">
              <span>View All {polymerProducts.length} Products</span>
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <p className="text-muted-foreground mb-3 sm:mb-4">Looking for a specific polymer not listed here?</p>
          <Button asChild variant="outline" className="w-full sm:w-auto">
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
      className="bg-white p-4 sm:p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex flex-col h-full">
        <div>
          <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{title}</h3>
          <Badge variant="secondary" className="mb-2 sm:mb-3 text-xs sm:text-sm">{count} Products</Badge>
        </div>
        <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{description}</p>
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
      className={`py-1.5 sm:py-2 px-3 sm:px-5 text-sm sm:text-base rounded-full transition-all ${
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
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-all h-full">
      <div className="h-36 sm:h-48 overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-4 sm:p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-semibold">{product.name}</h3>
          <Badge className="capitalize text-xs sm:text-sm">{product.category}</Badge>
        </div>
        <p className="text-sm text-muted-foreground mb-3 sm:mb-4 line-clamp-3">{product.description}</p>
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center gap-2">
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {product.applications.slice(0, 2).map((app, index) => (
              <Badge key={index} variant="outline" className="text-xs">{app}</Badge>
            ))}
            {product.applications.length > 2 && (
              <Badge variant="outline" className="text-xs">+{product.applications.length - 2}</Badge>
            )}
          </div>
          <Button asChild variant="link" className="p-0 ml-auto">
            <LinkComponent>
              <span className="text-sm sm:text-base">{isMasterbatch ? "Buy Now" : "Details"}</span>
              <ArrowRight className="ml-1 h-3 w-3 sm:h-4 sm:w-4" />
            </LinkComponent>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductsSection;
