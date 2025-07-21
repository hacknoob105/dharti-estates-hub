import HeroSection from "@/components/HeroSection";
import PropertySearch from "@/components/PropertySearch";
import PropertyListings from "@/components/PropertyListings";
import InquiryForm from "@/components/InquiryForm";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PropertySearch />
      <PropertyListings />
      <InquiryForm />
      <ContactSection />
    </div>
  );
};

export default Index;
