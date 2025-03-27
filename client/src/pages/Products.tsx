import { Container } from "@/components/ui/container";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import ProductCategories from "@/components/products/ProductCategories";
import { Helmet } from 'react-helmet-async';

const Products = () => {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Petrochemical & Polymer Products - Mehta Polychem</title>
        <meta name="description" content="Comprehensive range of commodity polymers, engineering polymers, masterbatches, and recycled plastics for industrial applications." />
        <meta name="keywords" content="Petrochemicals, Polymers, Commodity polymers, Engineering polymers, Masterbatches, Recycled plastics, GPPS, HIPS, PP, PVC, HDPE, LDPE, Nylon, ABS, SAN" />
        <link rel="canonical" href="https://www.mehtapolychem.com/products" />
        <meta property="og:title" content="Petrochemical & Polymer Products - Mehta Polychem" />
        <meta property="og:description" content="Comprehensive range of high-quality polymers for diverse industrial applications including automotive, packaging, consumer goods, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mehtapolychem.com/products" />
      </Helmet>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12" itemScope itemType="https://schema.org/ProductCollection">
          <h1 className="text-4xl font-bold mb-4" itemProp="name">Petrochemical & Polymer Products Portfolio</h1>
          <p className="text-lg text-muted-foreground" itemProp="description">
            Explore our comprehensive range of polymers, plastics, base oils, and industrial chemicals with efficient logistics services and supply chain solutions for diverse industries
          </p>
          <meta itemProp="keywords" content="Petrochemicals, Polymers, Plastics, Base oils, Trading, Import, Export, Distribution, Chemical industry, Supply chain solutions, Logistics services" />
        </div>

        {/* Categories View */}
        <ProductCategories />

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
      </Container>
    </div>
  );
};

export default Products;