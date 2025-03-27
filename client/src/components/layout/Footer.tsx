import { Link } from "wouter";
import { Container } from "@/components/ui/container";
import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import mehtaLogo from "../../assets/mehta-logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <img 
                src={mehtaLogo} 
                alt="Mehta Polychem LLP - Dealers & Importer of Polymers" 
                className="h-12 bg-white rounded p-1"
              />
            </div>
            <p className="text-neutral-400 mb-6">
              Your trusted partner in polymer distribution for over 30 years,
              delivering quality and reliability across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    Home
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    Products
                  </a>
                </Link>
              </li>

              <li>
                <Link href="/contact">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products#commodity">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    Commodity Polymers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products#engineering">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    Engineering Polymers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products#recycled">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    Recycled Polymers
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products#gpps">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    GPPS & HIPS
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/products#custom">
                  <a className="text-neutral-400 hover:text-primary transition-all">
                    Custom Solutions
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary h-5 w-5 mr-3 mt-1" />
                <span className="text-neutral-400">
                  307 Gemstar Commercial Complex, Ramchandra Lane, Malad West, Mumbai 400064
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary h-5 w-5 mr-3" />
                <span className="text-neutral-400">+91 022 4064 7171</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary h-5 w-5 mr-3" />
                <span className="text-neutral-400">info@mehtapolychem.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-neutral-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Mehta Polychem. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-neutral-500 hover:text-primary text-sm transition-all"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-primary text-sm transition-all"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-primary text-sm transition-all"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
