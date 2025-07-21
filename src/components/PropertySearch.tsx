import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Home, DollarSign } from "lucide-react";

const PropertySearch = () => {
  const [searchType, setSearchType] = useState("buy");

  return (
    <div className="bg-section-bg py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-foreground">
          Find Your Perfect <span className="text-dharti-green">Property</span>
        </h2>
        
        <div className="bg-card rounded-2xl p-8 shadow-premium border border-border">
          {/* Buy/Rent Toggle */}
          <div className="flex justify-center mb-8">
            <div className="bg-muted rounded-lg p-1 flex">
              <button
                onClick={() => setSearchType("buy")}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  searchType === "buy" 
                    ? "bg-dharti-green text-foreground shadow-lg" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType("rent")}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  searchType === "rent" 
                    ? "bg-dharti-green text-foreground shadow-lg" 
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Rent
              </button>
            </div>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <Home size={16} />
                Property Type
              </label>
              <Select>
                <SelectTrigger className="bg-input border-border focus:border-dharti-green">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="commercial">Commercial</SelectItem>
                  <SelectItem value="residential">Residential</SelectItem>
                  <SelectItem value="office">Office Space</SelectItem>
                  <SelectItem value="retail">Retail Shop</SelectItem>
                  <SelectItem value="warehouse">Warehouse</SelectItem>
                  <SelectItem value="plot">Plot</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <MapPin size={16} />
                Location
              </label>
              <Input 
                placeholder="Enter area, city..." 
                className="bg-input border-border focus:border-dharti-green"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                <DollarSign size={16} />
                Budget Range
              </label>
              <Select>
                <SelectTrigger className="bg-input border-border focus:border-dharti-green">
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">₹0 - ₹50 Lakh</SelectItem>
                  <SelectItem value="50-100">₹50 Lakh - ₹1 Crore</SelectItem>
                  <SelectItem value="100-200">₹1 - ₹2 Crore</SelectItem>
                  <SelectItem value="200-500">₹2 - ₹5 Crore</SelectItem>
                  <SelectItem value="500+">₹5+ Crore</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-muted-foreground opacity-0">
                Search
              </label>
              <Button 
                className="w-full bg-gradient-green text-foreground hover:shadow-green-glow transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <Search size={20} className="mr-2" />
                Find Property
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="text-sm text-muted-foreground">Quick filters:</span>
            {["Ready to Move", "Under Construction", "Luxury", "Investment"].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 text-sm bg-muted text-muted-foreground rounded-full hover:bg-dharti-green hover:text-foreground transition-all duration-300"
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertySearch;