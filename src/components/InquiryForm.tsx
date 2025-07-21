import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Building2, Phone, Mail, MapPin, DollarSign, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    budget: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the data to your backend
    console.log("Form submitted:", formData);
    
    toast({
      title: "Inquiry Submitted!",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      location: "",
      budget: "",
      message: ""
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="py-20 px-4 bg-section-bg">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Commercial Property <span className="text-dharti-green">Inquiry</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to invest? Get personalized property recommendations from our experts.
          </p>
        </div>

        <div className="bg-gradient-green rounded-3xl p-8 md:p-12 shadow-premium">
          <div className="bg-card/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Building2 size={16} />
                    Full Name *
                  </label>
                  <Input
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    placeholder="Enter your full name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                    required
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Mail size={16} />
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    placeholder="your.email@example.com"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                    required
                  />
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Phone size={16} />
                    Mobile Number *
                  </label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    placeholder="+91 98765 43210"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                    required
                  />
                </div>

                {/* Property Type Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <Building2 size={16} />
                    Property Type
                  </label>
                  <Select value={formData.propertyType} onValueChange={(value) => handleInputChange("propertyType", value)}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Select property type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="office">Office Space</SelectItem>
                      <SelectItem value="retail">Retail Shop</SelectItem>
                      <SelectItem value="warehouse">Warehouse</SelectItem>
                      <SelectItem value="plot">Commercial Plot</SelectItem>
                      <SelectItem value="residential">Residential</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <MapPin size={16} />
                    Preferred Location
                  </label>
                  <Input
                    value={formData.location}
                    onChange={(e) => handleInputChange("location", e.target.value)}
                    placeholder="e.g., Connaught Place, Gurgaon"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>

                {/* Budget Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white flex items-center gap-2">
                    <DollarSign size={16} />
                    Budget Range
                  </label>
                  <Input
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    placeholder="e.g., ₹2-5 Crore"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-white flex items-center gap-2">
                  <MessageSquare size={16} />
                  Additional Message
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  placeholder="Any specific requirements or questions..."
                  rows={4}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white/40 resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-black text-dharti-green hover:bg-black/80 font-semibold py-6 text-lg transition-all duration-300 hover:scale-105"
                >
                  Submit Inquiry
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InquiryForm;