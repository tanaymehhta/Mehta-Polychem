import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Filter } from "lucide-react";
import { Link } from "wouter";
import { polymerProducts } from "@/lib/data";
import ProductCategories from "@/components/products/ProductCategories";

const Products = () => {
  const [viewMode, setViewMode] = useState<"grid" | "categories">("grid");
  const [category, setCategory] = useState("all");
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [compareMode, setCompareMode] = useState(false);

  const filteredProducts = category === "all" 
    ? polymerProducts 
    : polymerProducts.filter(product => product.category === category);

  const toggleProductSelection = (id: number) => {
    if (selectedProducts.includes(id)) {
      setSelectedProducts(selectedProducts.filter(pid => pid !== id));
    } else {
      if (selectedProducts.length < 3) {
        setSelectedProducts([...selectedProducts, id]);
      }
    }
  };

  const resetSelection = () => {
    setSelectedProducts([]);
    setCompareMode(false);
  };

  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Product Portfolio</h1>
          <p className="text-lg text-muted-foreground">
            Explore our comprehensive range of polymers catering to diverse industrial applications
          </p>
        </div>

        {/* View Mode Toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <Button
              variant={viewMode === "grid" ? "default" : "outline"}
              onClick={() => setViewMode("grid")}
              className="rounded-r-none"
            >
              Product Grid
            </Button>
            <Button
              variant={viewMode === "categories" ? "default" : "outline"}
              onClick={() => setViewMode("categories")}
              className="rounded-l-none"
            >
              By Category
            </Button>
          </div>
        </div>

        {/* Categories View */}
        {viewMode === "categories" && (
          <ProductCategories />
        )}

        {/* Grid View with Product Cards */}
        {viewMode === "grid" && (
          <>
            {/* Product Category Grid - Visual Overview */}
            <div className="mb-12 bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-center">Our Polymer Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <CategoryCard 
                  title="Commodity Polymers" 
                  count={polymerProducts.filter(p => p.category === 'commodity').length}
                  description="Standard polymers for everyday applications"
                  onClick={() => setCategory('commodity')}
                />
                <CategoryCard 
                  title="Engineering Polymers" 
                  count={polymerProducts.filter(p => p.category === 'engineering').length}
                  description="High-performance resins for demanding uses"
                  onClick={() => setCategory('engineering')}
                />
                <CategoryCard 
                  title="Masterbatches & Fillers" 
                  count={polymerProducts.filter(p => p.category === 'masterbatch').length}
                  description="Color and additive concentrates"
                  onClick={() => setCategory('masterbatch')}
                />
                <CategoryCard 
                  title="Recycled Polymers" 
                  count={polymerProducts.filter(p => p.category === 'recycled').length}
                  description="Sustainable alternatives for eco-conscious applications"
                  onClick={() => setCategory('recycled')}
                />
              </div>
            </div>

            {/* Product Comparison Bar (shown when products are selected) */}
            {selectedProducts.length > 0 && (
              <div className="sticky top-20 z-40 bg-primary text-white p-4 mb-8 rounded-lg shadow-lg">
                <div className="flex justify-between items-center">
                  <div className="flex items-center">
                    <span className="font-bold mr-2">
                      {selectedProducts.length} {selectedProducts.length === 1 ? 'product' : 'products'} selected
                    </span>
                    <div className="flex gap-2">
                      {selectedProducts.map(id => {
                        const product = polymerProducts.find(p => p.id === id);
                        return product ? (
                          <Badge key={id} variant="outline" className="bg-white/20 border-white/30 text-white">
                            {product.name.length > 20 ? product.name.substring(0, 20) + '...' : product.name}
                          </Badge>
                        ) : null;
                      })}
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-white border-white/50 hover:bg-white/20"
                      onClick={() => setCompareMode(!compareMode)}
                    >
                      {compareMode ? "Hide Comparison" : "Compare Products"}
                    </Button>
                    <Button 
                      size="sm" 
                      variant="outline"
                      className="text-white border-white/50 hover:bg-white/20"
                      onClick={resetSelection}
                    >
                      Clear Selection
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {/* Product Comparison View */}
            {compareMode && selectedProducts.length > 0 && (
              <div className="mb-12 bg-white p-6 rounded-lg shadow-md overflow-x-auto">
                <h2 className="text-xl font-bold mb-4">Product Comparison</h2>
                <table className="w-full min-w-[800px]">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-4 px-3">Properties</th>
                      {selectedProducts.map(id => {
                        const product = polymerProducts.find(p => p.id === id);
                        return product ? (
                          <th key={id} className="text-left p-3">{product.name}</th>
                        ) : null;
                      })}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Category</td>
                      {selectedProducts.map(id => {
                        const product = polymerProducts.find(p => p.id === id);
                        return product ? (
                          <td key={id} className="p-3 capitalize">
                            {product.category}
                          </td>
                        ) : null;
                      })}
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-3 font-medium">Applications</td>
                      {selectedProducts.map(id => {
                        const product = polymerProducts.find(p => p.id === id);
                        return product ? (
                          <td key={id} className="p-3">
                            <div className="flex flex-wrap gap-1">
                              {product.applications.map((app, i) => (
                                <Badge key={i} variant="secondary" className="text-xs">{app}</Badge>
                              ))}
                            </div>
                          </td>
                        ) : null;
                      })}
                    </tr>
                    <tr>
                      <td className="py-3 px-3 font-medium">Description</td>
                      {selectedProducts.map(id => {
                        const product = polymerProducts.find(p => p.id === id);
                        return product ? (
                          <td key={id} className="p-3">
                            {product.description}
                          </td>
                        ) : null;
                      })}
                    </tr>
                  </tbody>
                </table>
                <div className="mt-4 text-center">
                  <Button asChild>
                    <Link href="/contact">
                      <span>Request Quotation for Selected Products</span>
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )}

            {/* Product Tabs */}
            <Tabs defaultValue="all" className="mb-12" onValueChange={setCategory}>
              <div className="flex justify-center mb-8">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-1">
                  <TabsTrigger value="all">All Products</TabsTrigger>
                  <TabsTrigger value="commodity">Commodity</TabsTrigger>
                  <TabsTrigger value="engineering">Engineering</TabsTrigger>
                  <TabsTrigger value="masterbatch">Masterbatches</TabsTrigger>
                  <TabsTrigger value="recycled">Recycled</TabsTrigger>
                </TabsList>
              </div>

              {['all', 'commodity', 'engineering', 'masterbatch', 'recycled'].map((cat) => (
                <TabsContent key={cat} value={cat} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProducts.map((product) => (
                      <ProductCard 
                        key={product.id} 
                        product={product} 
                        isSelected={selectedProducts.includes(product.id)}
                        onToggleSelect={() => toggleProductSelection(product.id)}
                      />
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>

            {/* Supreme Partnership Section */}
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

            {/* Call to Action */}
            <div className="text-center">
              <h2 className="text-2xl font-bold mb-4">Looking for a specific polymer?</h2>
              <p className="mb-6 text-muted-foreground">
                Contact us for custom requirements or to discuss your specific polymer needs.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">Contact Us for Custom Requirements</Link>
              </Button>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

interface CategoryCardProps {
  title: string;
  count: number;
  description: string;
  onClick: () => void;
}

const CategoryCard = ({ title, count, description, onClick }: CategoryCardProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <Badge variant="secondary" className="mb-3">{count} Products</Badge>
      <p className="text-sm text-muted-foreground">{description}</p>
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
  isSelected: boolean;
  onToggleSelect: () => void;
}

const ProductCard = ({ product, isSelected, onToggleSelect }: ProductCardProps) => {
  return (
    <Card className={`overflow-hidden transition-all hover:shadow-lg ${isSelected ? 'ring-2 ring-primary' : ''}`}>
      <div className="h-48 overflow-hidden relative">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div 
          className={`absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center cursor-pointer
            ${isSelected ? 'bg-primary text-white' : 'bg-white border border-gray-200'}`}
          onClick={(e) => {
            e.stopPropagation();
            onToggleSelect();
          }}
        >
          {isSelected && <Filter className="h-3 w-3" />}
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold">{product.name}</h3>
          <Badge className="capitalize">{product.category}</Badge>
        </div>
        <p className="text-muted-foreground mb-4">{product.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.applications.map((app, index) => (
            <Badge key={index} variant="outline">{app}</Badge>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <Button variant="outline" size="sm" onClick={onToggleSelect}>
            {isSelected ? "Deselect" : "Compare"}
          </Button>
          <Button asChild variant="link" className="p-0">
            <Link href="/contact">
              <span>Inquire Now</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Products;
