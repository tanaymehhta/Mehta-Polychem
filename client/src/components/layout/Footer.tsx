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
    <footer className="bg-neutral-900 text-white py-8 sm:py-12">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-4 sm:mb-6">
              <img 
                src={mehtaLogo} 
                alt="Mehta Polychem LLP - Dealers & Importer of Polymers" 
                className="h-10 sm:h-12 bg-white rounded p-1"
              />
            </div>
            <p className="text-neutral-400 text-sm sm:text-base mb-4 sm:mb-6">
              Your trusted partner in polymer distribution for over 30 years,
              delivering quality and reliability across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
                aria-label="Twitter"
              >
                <Twitter className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-primary transition-all"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>
          </div>

          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-6">Quick Links</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-6">Products</h3>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <Link href="/products#commodity" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  Commodity Polymers
                </Link>
              </li>
              <li>
                <Link href="/products#engineering" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  Engineering Polymers
                </Link>
              </li>
              <li>
                <Link href="/products#recycled" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  Recycled Polymers
                </Link>
              </li>
              <li>
                <Link href="/products#gpps" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  GPPS & HIPS
                </Link>
              </li>
              <li>
                <Link href="/products#custom" className="text-neutral-400 hover:text-primary transition-all text-sm sm:text-base">
                  Custom Solutions
                </Link>
              </li>
            </ul>
          </div>

          <div className="mt-2 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-6">
              Contact Information
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-primary h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3 mt-1" />
                <span className="text-neutral-400 text-sm sm:text-base">
                  307 Gemstar Commercial Complex, Ramchandra Lane, Malad West, Mumbai 400064
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="text-primary h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                <span className="text-neutral-400 text-sm sm:text-base">+91 022 4064 7171</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-primary h-4 w-4 sm:h-5 sm:w-5 mr-2 sm:mr-3" />
                <span className="text-neutral-400 text-sm sm:text-base">info@mehtapolychem.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-800 mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-neutral-500 text-xs sm:text-sm mb-4 sm:mb-0">
              © {new Date().getFullYear()} Mehta Polychem. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a
                href="#"
                className="text-neutral-500 hover:text-primary text-xs sm:text-sm transition-all"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-primary text-xs sm:text-sm transition-all"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-neutral-500 hover:text-primary text-xs sm:text-sm transition-all"
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
