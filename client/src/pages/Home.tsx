import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import AboutSection from "@/components/home/AboutSection";
import ProductsSection from "@/components/home/ProductsSection";
import PartnershipsSection from "@/components/home/PartnershipsSection";
import LocationsSection from "@/components/home/LocationsSection";
import ContactSection from "@/components/home/ContactSection";

const Home = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ProductsSection />
      <PartnershipsSection />
      <LocationsSection />
      <ContactSection />
    </div>
  );
};

export default Home;
