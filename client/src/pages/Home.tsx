import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import PartnershipsSection from "@/components/home/PartnershipsSection";
import LocationsSection from "@/components/home/LocationsSection";
import ContactSection from "@/components/home/ContactSection";
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <div className="pt-16">
      <Helmet>
        <title>Mehta Polychem - Leading Petrochemical Trading & Distribution in India</title>
        <meta name="description" content="Premium polymers, plastics, and base oils with comprehensive supply chain solutions. 30 years of expertise in the petrochemical industry across India." />
        <meta name="keywords" content="Petrochemicals, Polymers, Plastics, Base oils, Trading, Import, Export, Distribution, Chemical industry, Supply chain solutions, Logistics services" />
        <link rel="canonical" href="https://www.mehtapolychem.com/" />
        <meta property="og:title" content="Mehta Polychem - Leading Petrochemical Trading & Distribution" />
        <meta property="og:description" content="Premium polymers, plastics, and base oils with comprehensive supply chain solutions for diverse industries. 30 years of expertise." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.mehtapolychem.com/" />
        <meta property="og:image" content="https://www.mehtapolychem.com/og-image.jpg" />
      </Helmet>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <PartnershipsSection />
      <LocationsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
