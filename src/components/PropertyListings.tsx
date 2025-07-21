import PropertyCard from "./PropertyCard";
import commercial1 from "@/assets/commercial-1.jpg";
import commercial2 from "@/assets/commercial-2.jpg";
import commercial3 from "@/assets/commercial-3.jpg";
import residential1 from "@/assets/residential-1.jpg";
import residential2 from "@/assets/residential-2.jpg";

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      image: commercial1,
      title: "Premium Office Complex",
      location: "Connaught Place, Delhi",
      price: "₹2.5 Crore",
      type: "Commercial" as const,
      area: "2,500 sq ft",
    },
    {
      id: 2,
      image: residential1,
      title: "Luxury Apartment",
      location: "Gurgaon Sector 54",
      price: "₹1.8 Crore",
      type: "Luxury" as const,
      beds: 3,
      baths: 3,
      area: "1,800 sq ft",
    },
    {
      id: 3,
      image: commercial2,
      title: "Modern Retail Space",
      location: "Khan Market, Delhi",
      price: "₹3.2 Crore",
      type: "Commercial" as const,
      area: "1,200 sq ft",
    },
    {
      id: 4,
      image: residential2,
      title: "Designer Villa",
      location: "DLF Phase 3, Gurgaon",
      price: "₹4.5 Crore",
      type: "Ready to Move" as const,
      beds: 4,
      baths: 4,
      area: "3,200 sq ft",
    },
    {
      id: 5,
      image: commercial3,
      title: "Warehouse Facility",
      location: "Manesar Industrial Area",
      price: "₹1.2 Crore",
      type: "Commercial" as const,
      area: "5,000 sq ft",
    },
    {
      id: 6,
      image: residential1,
      title: "Modern Penthouse",
      location: "Golf Course Road",
      price: "₹6.8 Crore",
      type: "Luxury" as const,
      beds: 5,
      baths: 6,
      area: "4,500 sq ft",
    },
  ];

  const handleViewDetails = (propertyId: number) => {
    console.log("View details for property:", propertyId);
    // Navigate to property details page
  };

  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-foreground mb-6">
            Featured <span className="text-dharti-green">Properties</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our handpicked selection of premium commercial and residential properties 
            in Delhi NCR's most sought-after locations.
          </p>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              type={property.type}
              beds={property.beds}
              baths={property.baths}
              area={property.area}
              onViewDetails={() => handleViewDetails(property.id)}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-dharti-green hover:bg-dharti-green-glow text-foreground font-medium px-8 py-4 rounded-full transition-all duration-300 hover:shadow-green-glow hover:scale-105">
            View All Properties
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyListings;