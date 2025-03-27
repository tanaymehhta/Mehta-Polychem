import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { polymerProducts } from "@/data/products";
import { Container } from "@/components/ui/container";
import { Helmet } from 'react-helmet-async';

const CategoryCard = ({ title, count, description, onClick }: { 
  title: string;
  count: number;
  description: string;
  onClick: () => void;
}) => (
  <Card className="cursor-pointer hover:shadow-lg transition-all" onClick={onClick}>
    <CardContent className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <Badge variant="secondary">{count} Products</Badge>
        <ArrowRight className="h-5 w-5 text-primary" />
      </div>
    </CardContent>
  </Card>
);

const Products = () => {
  const [category, setCategory] = useState("all");

  const commodityCount = polymerProducts.filter(p => p.category === 'commodity').length;
  const engineeringCount = polymerProducts.filter(p => p.category === 'engineering').length;
  const masterbatchCount = polymerProducts.filter(p => p.category === 'masterbatch').length;
  const recycledCount = polymerProducts.filter(p => p.category === 'recycled').length;

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Petrochemical & Polymer Products - Mehta Polychem</title>
        <meta name="description" content="Comprehensive range of commodity polymers, engineering polymers, masterbatches, and recycled plastics for industrial applications. Official distributors of Supreme Petrochemicals." />
        <meta name="keywords" content="Petrochemicals, Polymers, Commodity polymers, Engineering polymers, Masterbatches, Recycled plastics, GPPS, HIPS, PP, PVC, HDPE, LDPE, Nylon, ABS, SAN" />
        <link rel="canonical" href="https://www.mehtapolychem.com/products" />
        <meta property="og:title" content="Petrochemical & Polymer Products - Mehta Polychem" />
        <meta property="og:description" content="Comprehensive range of high-quality polymers for diverse industrial applications including automotive, packaging, consumer goods, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mehtapolychem.com/products" />
      </Helmet>
      <Container className="py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Petrochemical & Polymer Products Portfolio</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our comprehensive range of polymers, plastics, base oils, and industrial chemicals 
            with efficient logistics services and supply chain solutions for diverse industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <CategoryCard 
            title="Commodity Polymers"
            count={commodityCount}
            description="Standard polymers for everyday applications"
            onClick={() => setCategory('commodity')}
          />
          <CategoryCard 
            title="Engineering Polymers"
            count={engineeringCount}
            description="High-performance resins for demanding uses"
            onClick={() => setCategory('engineering')}
          />
          <CategoryCard 
            title="Masterbatches & Fillers"
            count={masterbatchCount}
            description="Color and additive concentrates"
            onClick={() => setCategory('masterbatch')}
          />
          <CategoryCard 
            title="Recycled Polymers"
            count={recycledCount}
            description="Sustainable alternatives for eco-conscious applications"
            onClick={() => setCategory('recycled')}
          />
        </div>

        <div className="mt-12 text-center">
          <Button asChild>
            <Link href="/contact">
              <span>Contact Us for Product Details</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Products;