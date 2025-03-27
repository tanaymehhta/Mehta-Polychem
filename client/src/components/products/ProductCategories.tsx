import { Container } from "@/components/ui/container";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { polymerProducts } from "@/lib/data";

const ProductCategories = () => {
  // Get products by category
  const commodityPolymers = polymerProducts.filter(p => p.category === 'commodity');
  const engineeringPolymers = polymerProducts.filter(p => p.category === 'engineering');
  const masterbatches = polymerProducts.filter(p => p.category === 'masterbatch');
  const recycledPolymers = polymerProducts.filter(p => p.category === 'recycled');

  return (
    <section className="py-16">
      <Container>
        <div className="mb-12">

          {/* Commodity Polymers */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">Commodity Polymers</h3>
                <p className="text-muted-foreground">Standard polymers for everyday applications</p>
              </div>
              <Badge variant="outline" className="text-base font-normal">
                {commodityPolymers.length} Products
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {commodityPolymers.map((product) => (
                <ProductCategoryCard 
                  key={product.id}
                  name={product.name}
                  applications={product.applications}
                />
              ))}
            </div>
          </div>

          {/* Engineering Polymers */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">Engineering Polymers</h3>
                <p className="text-muted-foreground">High-performance polymers for specialized applications</p>
              </div>
              <Badge variant="outline" className="text-base font-normal">
                {engineeringPolymers.length} Products
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {engineeringPolymers.map((product) => (
                <ProductCategoryCard 
                  key={product.id}
                  name={product.name}
                  applications={product.applications}
                />
              ))}
            </div>
          </div>

          {/* Masterbatches and Fillers */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">Masterbatches & Fillers</h3>
                <p className="text-muted-foreground">Color and additive concentrates for polymer processing</p>
              </div>
              <Badge variant="outline" className="text-base font-normal">
                {masterbatches.length} Products
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {masterbatches.map((product) => (
                <ProductCategoryCard 
                  key={product.id}
                  name={product.name}
                  applications={product.applications}
                />
              ))}
            </div>
          </div>

          {/* Recycled Polymers */}
          <div className="mb-16">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">Recycled Polymers</h3>
                <p className="text-muted-foreground">Sustainable polymer solutions for eco-conscious applications</p>
              </div>
              <Badge variant="outline" className="text-base font-normal">
                {recycledPolymers.length} Products
              </Badge>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recycledPolymers.map((product) => (
                <ProductCategoryCard 
                  key={product.id}
                  name={product.name}
                  applications={product.applications}
                />
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-muted p-8 rounded-lg text-center">
            <h3 className="text-xl font-bold mb-4">Need Help Selecting the Right Polymer?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Our technical team can help you identify the perfect polymer solution for your specific application needs.
              Contact us for personalized assistance and expert recommendations.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get Expert Recommendation</Link>
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

interface ProductCategoryCardProps {
  name: string;
  applications: string[];
}

const ProductCategoryCard = ({ name, applications }: ProductCategoryCardProps) => {
  // For masterbatches, direct to Keesha website
  const isMasterbatch = name.toLowerCase().includes('masterbatch') || name.toLowerCase().includes('filler');
  const linkDestination = isMasterbatch 
    ? "https://www.keesha.co.in/white-masterbatches-9291378.html" 
    : "/contact";
  
  // For external links, use 'a' tag instead of Link
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
    <Card className="hover:shadow-md transition-all">
      <CardContent className="p-6">
        <h4 className="font-semibold mb-3">{name}</h4>
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {applications.slice(0, 2).map((app, index) => (
              <Badge key={index} variant="secondary" className="text-xs">{app}</Badge>
            ))}
            {applications.length > 2 && (
              <Badge variant="secondary" className="text-xs">+{applications.length - 2}</Badge>
            )}
          </div>
        </div>
        <Button asChild variant="link" className="p-0 h-auto text-sm" size="sm">
          <LinkComponent>
            <span>{isMasterbatch ? "View Product" : "Inquire"}</span>
            <ChevronRight className="ml-1 h-3 w-3" />
          </LinkComponent>
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCategories;