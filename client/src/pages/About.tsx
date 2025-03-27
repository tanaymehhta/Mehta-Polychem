import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Award, TrendingUp, Users, Recycle, MapPin
} from "lucide-react";

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
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Mehta Polychem</h1>
          <p className="text-lg text-muted-foreground">
            Over <strong>30 years</strong> of excellence in polymer trading and distribution
          </p>
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
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Our Product Range</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Commodity Polymers</h3>
                </div>
                <p className="text-sm text-muted-foreground">GPPS, HIPS, PP, PVC, HDPE, LDPE, LLDPE for everyday applications</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Engineering Polymers</h3>
                </div>
                <p className="text-sm text-muted-foreground">Nylon, ABS, SAN, EVA for specialized high-performance applications</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Award className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Masterbatches</h3>
                </div>
                <p className="text-sm text-muted-foreground">White, Black, Colored, and Filler masterbatches for various applications</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-md">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3">
                    <Recycle className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-semibold">Recycled Polymers</h3>
                </div>
                <p className="text-sm text-muted-foreground">Sustainable recycled PE, PP, and PET for eco-conscious applications</p>
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
