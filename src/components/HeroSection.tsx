import { Button } from "@/components/ui/button";
import heroSkyline from "@/assets/hero-skyline.jpg";
import dhartiLogo from "@/assets/dharti-logo.png";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroSkyline} 
          alt="City Skyline" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Company Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src={dhartiLogo} 
            alt="Dharti Real Estate" 
            className="h-20 md:h-24 mx-auto mb-4"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up">
          <span className="text-foreground">Invest in the</span>
          <br />
          <span className="text-dharti-green">Future</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-premium-gray mb-8 animate-fade-in-up">
          Own Your Space Today
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Button 
            size="lg" 
            className="bg-gradient-green text-foreground font-semibold px-8 py-6 text-lg hover:shadow-green-glow transition-all duration-300 hover:scale-105"
          >
            🟩 Explore Projects
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-dharti-green text-dharti-green hover:bg-dharti-green hover:text-foreground px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
          >
            📞 Schedule a Call
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-dharti-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-dharti-green rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;