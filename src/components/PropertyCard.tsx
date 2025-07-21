import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Bed, Bath, Square, Eye } from "lucide-react";

interface PropertyCardProps {
  image: string;
  title: string;
  location: string;
  price: string;
  type: "Commercial" | "Residential" | "Luxury" | "Ready to Move";
  beds?: number;
  baths?: number;
  area: string;
  onViewDetails: () => void;
}

const PropertyCard = ({ 
  image, 
  title, 
  location, 
  price, 
  type, 
  beds, 
  baths, 
  area, 
  onViewDetails 
}: PropertyCardProps) => {
  const getTypeColor = () => {
    switch (type) {
      case "Commercial": return "bg-blue-600";
      case "Residential": return "bg-green-600";
      case "Luxury": return "bg-purple-600";
      case "Ready to Move": return "bg-dharti-green";
      default: return "bg-gray-600";
    }
  };

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-2 border border-border">
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
        
        {/* Property Type Badge */}
        <Badge 
          className={`absolute top-4 left-4 ${getTypeColor()} text-white border-0`}
        >
          {type}
        </Badge>

        {/* Quick View Button */}
        <Button
          size="sm"
          variant="outline"
          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-dharti-green hover:border-dharti-green"
        >
          <Eye size={16} />
        </Button>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-dharti-green transition-colors duration-300">
          {title}
        </h3>
        
        <div className="flex items-center text-muted-foreground mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="text-2xl font-bold text-dharti-green mb-4">
          {price}
        </div>

        {/* Property Details */}
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
          {beds && (
            <div className="flex items-center gap-1">
              <Bed size={16} />
              <span>{beds} Beds</span>
            </div>
          )}
          {baths && (
            <div className="flex items-center gap-1">
              <Bath size={16} />
              <span>{baths} Baths</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Square size={16} />
            <span>{area}</span>
          </div>
        </div>

        {/* CTA Button */}
        <Button 
          onClick={onViewDetails}
          className="w-full bg-dharti-green hover:bg-dharti-green-glow text-foreground font-medium transition-all duration-300 hover:shadow-green-glow"
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default PropertyCard;