import { Container } from "@/components/ui/container";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const About = () => {
  return (
    <div className="pt-24 pb-16">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About Mehta Polychem</h1>
          <p className="text-lg text-muted-foreground">
            Over 30 years of excellence in polymer trading and distribution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <p className="mb-4">
              Mehta Polychem was founded in 1993 with a vision to become a
              leading distributor of polymers in India. What started as a small
              trading business has now grown into a prominent name in the
              polymer industry with a nationwide presence.
            </p>
            <p className="mb-4">
              With three decades of experience, we have established strong
              relationships with manufacturers, suppliers, and customers across
              the country. Our commitment to quality, reliability, and customer
              satisfaction has been the cornerstone of our success.
            </p>
            <p>
              Today, we take pride in being the official distributors of
              Supreme Petrochemicals for GPPS and HIPS products and continue to
              expand our product portfolio to meet the evolving needs of our
              clients.
            </p>
          </div>
          <div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122"
                alt="Professional business team at Mehta Polychem"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
              <p className="text-muted-foreground">
                We prioritize our customers' needs and strive to exceed their
                expectations with exceptional service and quality products.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M20.91 8.84 8.56 2.23a1.93 1.93 0 0 0-1.81 0L3.1 4.13a2.12 2.12 0 0 0-.05 3.69l12.22 6.93a2 2 0 0 0 1.94 0L21 12.51a2.12 2.12 0 0 0-.09-3.67Z" />
                  <path d="m3.09 8.84 12.35-6.61a1.93 1.93 0 0 1 1.81 0l3.65 1.9a2.12 2.12 0 0 1 .1 3.69L8.73 14.75a2 2 0 0 1-1.94 0L3 12.51a2.12 2.12 0 0 1 .09-3.67Z" />
                  <line x1="12" y1="22" x2="12" y2="13" />
                  <path d="M20 13.5v3.37a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13.5" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">
                We are committed to providing the highest quality polymers that
                meet international standards and specifications.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-full mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="m5 3 4 4L5 11" />
                  <path d="M18 6H9" />
                  <path d="m19 13-4 4 4 4" />
                  <path d="M6 18h9" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Innovation</h3>
              <p className="text-muted-foreground">
                We continuously explore new opportunities, products, and
                sustainable solutions to stay ahead in the evolving market.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <div className="bg-muted p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Our Strengths</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <CheckCircle className="text-primary h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Strategic Partnership
                  </h3>
                  <p className="text-muted-foreground">
                    Official distributors of Supreme Petrochemicals for GPPS and HIPS products
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Nationwide Reach
                  </h3>
                  <p className="text-muted-foreground">
                    Strategically located stockpoints in Bhiwandi and Daman ensuring timely deliveries
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Comprehensive Inventory
                  </h3>
                  <p className="text-muted-foreground">
                    Wide range of commodity and engineering polymers to meet diverse industry needs
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="text-primary h-6 w-6 mr-3 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Technical Expertise
                  </h3>
                  <p className="text-muted-foreground">
                    Knowledgeable team providing technical support and custom solutions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

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
