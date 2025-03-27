import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { polymerProducts } from "@/lib/data";

const Products = () => {
  const [category, setCategory] = useState("all");

  const filteredProducts = category === "all" 
    ? polymerProducts 
    : polymerProducts.filter(product => product.category === category);

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Product Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of polymers catering to diverse industrial applications
          </p>
        </div>

        <Tabs defaultValue="all" className="mb-12" onValueChange={setCategory}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-1">
              <TabsTrigger value="all">All Products</TabsTrigger>
              <TabsTrigger value="commodity">Commodity Polymers</TabsTrigger>
              <TabsTrigger value="engineering">Engineering Polymers</TabsTrigger>
              <TabsTrigger value="recycled">Recycled Polymers</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="commodity" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="engineering" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="recycled" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="bg-muted p-8 rounded-lg mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Supreme Petrochemicals Partnership</h2>
              <p className="mb-4">
                As authorized distributors for Supreme Petrochemicals, we provide high-quality
                GPPS and HIPS products to various industries across India. Our partnership
                ensures reliable supply and premium quality products.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="secondary">GPPS</Badge>
                <Badge variant="secondary">HIPS</Badge>
                <Badge variant="secondary">High Performance</Badge>
                <Badge variant="secondary">Premium Grade</Badge>
              </div>
              <Button asChild variant="outline" className="mt-2">
                <Link href="/contact">
                  <span>Contact for Availability</span>
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm flex items-center justify-center">
              <h3 className="text-xl font-bold text-primary">Supreme Petrochemicals</h3>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Looking for a specific polymer?</h2>
          <p className="mb-6 text-muted-foreground">
            Contact us for custom requirements or to discuss your specific polymer needs.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Contact Us for Custom Requirements</Link>
          </Button>
        </div>
      </Container>
    </div>
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
    <Card className="overflow-hidden transition-all hover:shadow-lg">
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
        <div className="flex flex-wrap gap-2 mb-4">
          {product.applications.map((app, index) => (
            <Badge key={index} variant="outline">{app}</Badge>
          ))}
        </div>
        <Button asChild variant="link" className="p-0">
          <Link href="/contact">
            <span>Inquire Now</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Products;
