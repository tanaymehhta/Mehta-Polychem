import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, TrendingUp, Users, Recycle, MapPin
} from "lucide-react";
import { Helmet } from 'react-helmet-async';

const About = () => {
  const strengths = [
    {
      title: "Authorized Distributor",
      description: "Official distributors of Supreme Petrochemicals for GPPS and HIPS products",
      icon: Award,
    },
    {
      title: "Nationwide Reach",
      description: "Strategically located stockpoints in Bhiwandi and Daman ensuring timely deliveries",
      icon: MapPin,
    },
    {
      title: "Comprehensive Inventory",
      description: "Wide range of commodity and engineering polymers for diverse industry needs",
      icon: TrendingUp,
    },
  ];

  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>About Mehta Polychem - Leading Petrochemical Trading Company</title>
        <meta name="description" content="Over 30 years of excellence in petrochemical trading, import, export, and distribution of polymers and industrial chemicals in India" />
        <meta name="keywords" content="Petrochemical trading history, Polymer distribution company, Import export business, Chemical industry in India, Premium polymer suppliers, 30 years experience, Bhiwandi stockpoint, Daman stockpoint" />
        <link rel="canonical" href="https://www.mehtapolychem.com/about" />
        <meta property="og:title" content="About Mehta Polychem - Leading Petrochemical Trading Company" />
        <meta property="og:description" content="Founded in 1993, Mehta Polychem has grown into a premier petrochemical trading company with nationwide presence. Official distributors of Supreme Petrochemicals." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mehtapolychem.com/about" />
      </Helmet>
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12" itemScope itemType="https://schema.org/Organization">
          <h1 className="text-4xl font-bold mb-4" itemProp="name">About Mehta Polychem - Leading Petrochemical Trading Company</h1>
          <p className="text-lg text-muted-foreground" itemProp="description">
            Over <strong>30 years</strong> of excellence in petrochemical trading, import, export, and distribution of polymers and industrial chemicals in India
          </p>
          <meta itemProp="keywords" content="Petrochemical trading, Polymer distribution, Import export, Chemical industry in India, Premium quality polymers, Supreme Petrochemicals distributor, 30 years experience petrochemicals" />
          <meta itemProp="foundingDate" content="1993" />
          <meta itemProp="industry" content="Petrochemical Trading and Distribution" />
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Mehta Polychem was founded in <strong>1993</strong> with a vision to become a
              <strong> leading distributor</strong> of polymers in India. What started as a small
              trading business has now grown into a <strong>prominent name</strong> in the
              polymer industry with a nationwide presence.
            </p>
            <p className="mb-4">
              With <strong>three decades of experience</strong>, we have established strong
              relationships with manufacturers, suppliers, and customers across
              the country. Our <strong>commitment to quality</strong>, reliability, and customer
              satisfaction has been the cornerstone of our success.
            </p>
            <p>
              Today, we take pride in being the <strong>official distributors</strong> of
              Supreme Petrochemicals for GPPS and HIPS products and continue to
              expand our product portfolio to meet the evolving needs of our
              clients.
            </p>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1620115245028-87a2eef651bf"
                alt="Colorful polymer granules"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Our Key Strengths Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Key Strengths</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((strength, index) => {
              const IconComponent = strength.icon;
              return (
                <Card key={index} className="border-l-4 border-l-primary hover:shadow-md transition-all">
                  <CardContent className="p-5">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <h4 className="font-bold text-lg mb-2">{strength.title}</h4>
                      <p className="text-muted-foreground">{strength.description}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Product Range Section */}
        <div className="mb-16" itemScope itemType="https://schema.org/ItemList">
          <h2 className="text-3xl font-bold mb-6 text-center" itemProp="name">Our Petrochemical Product Range</h2>
          <meta itemProp="description" content="Comprehensive range of polymer products including commodity polymers, engineering polymers, masterbatches, and recycled polymers for diverse industrial applications." />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-md" itemScope itemType="https://schema.org/Product" itemProp="itemListElement">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold" itemProp="name">Commodity Polymers</h3>
                </div>
                <p className="text-sm text-muted-foreground" itemProp="description">GPPS, HIPS, PP, PVC, HDPE, LDPE, LLDPE for everyday applications and consumer products</p>
                <meta itemProp="category" content="Petrochemicals, Polymers" />
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md" itemScope itemType="https://schema.org/Product" itemProp="itemListElement">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold" itemProp="name">Engineering Polymers</h3>
                </div>
                <p className="text-sm text-muted-foreground" itemProp="description">Nylon, ABS, SAN, EVA for specialized high-performance applications and industrial engineering components</p>
                <meta itemProp="category" content="Petrochemicals, Engineering Polymers" />
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md" itemScope itemType="https://schema.org/Product" itemProp="itemListElement">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold" itemProp="name">Masterbatches</h3>
                </div>
                <p className="text-sm text-muted-foreground" itemProp="description">White, Black, Colored, and Filler masterbatches for manufacturing and processing applications</p>
                <meta itemProp="category" content="Petrochemicals, Additives" />
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md" itemScope itemType="https://schema.org/Product" itemProp="itemListElement">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Recycle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold" itemProp="name">Recycled Polymers</h3>
                </div>
                <p className="text-sm text-muted-foreground" itemProp="description">Sustainable recycled PE, PP, and PET for eco-conscious applications and environmentally-friendly manufacturing</p>
                <meta itemProp="category" content="Petrochemicals, Recycled Materials" />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact our team today to discuss your polymer requirements and how we can support your business.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">View Our Products</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default About;
