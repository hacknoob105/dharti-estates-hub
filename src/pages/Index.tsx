import HeroSection from "@/components/HeroSection";
import PropertySearch from "@/components/PropertySearch";
import PropertyListings from "@/components/PropertyListings";
import TestimonialsSection from "@/components/TestimonialsSection";
import InquiryForm from "@/components/InquiryForm";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <PropertySearch />
      <PropertyListings />
      <TestimonialsSection />
      <InquiryForm />
      <ContactSection />
    </div>
  );
};

export default Index;
