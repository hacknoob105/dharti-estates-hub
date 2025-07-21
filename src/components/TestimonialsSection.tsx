import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  avatar: string;
}

const TestimonialCard = ({ name, role, location, rating, comment, avatar }: TestimonialProps) => {
  return (
    <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-premium transition-all duration-300 hover:-translate-y-1 border border-border group">
      {/* Quote Icon */}
      <div className="text-dharti-green mb-4 group-hover:animate-glow">
        <Quote size={32} />
      </div>

      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${
              i < rating 
                ? "text-yellow-400 fill-yellow-400" 
                : "text-gray-600"
            } transition-colors duration-300`}
          />
        ))}
      </div>

      {/* Testimonial Text */}
      <p className="text-muted-foreground leading-relaxed mb-6 italic">
        "{comment}"
      </p>

      {/* Client Info */}
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full bg-gradient-green flex items-center justify-center text-foreground font-bold text-lg">
          {avatar}
        </div>
        <div>
          <h4 className="text-foreground font-semibold group-hover:text-dharti-green transition-colors">
            {name}
          </h4>
          <p className="text-sm text-muted-foreground">{role}</p>
          <p className="text-xs text-dharti-green">{location}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Business Owner",
      location: "Connaught Place, Delhi",
      rating: 5,
      comment: "Dharti Estate helped me find the perfect office space for my consulting firm. Their expertise in commercial properties is unmatched. The entire process was smooth and professional. Highly recommended for serious investors!",
      avatar: "RS"
    },
    {
      name: "Priya Gupta",
      role: "Real Estate Investor",
      location: "Gurgaon Sector 47",
      rating: 5,
      comment: "I've invested in 3 properties through Dharti Estate over the past 2 years. Each investment has given excellent returns. Their market knowledge and transparency in dealings is exceptional. Trust them completely!",
      avatar: "PG"
    },
    {
      name: "Amit Verma",
      role: "Entrepreneur",
      location: "Khan Market, Delhi",
      rating: 5,
      comment: "Outstanding service! They found me a premium retail space in Khan Market within my budget. The team's dedication and follow-up throughout the process was remarkable. My business is thriving in this location!",
      avatar: "AV"
    },
    {
      name: "Meera Jain",
      role: "Doctor",
      location: "Golf Course Road",
      rating: 5,
      comment: "Purchased my dream home through Dharti Estate. From property selection to legal documentation, everything was handled professionally. The luxury apartment exceeded my expectations. Excellent team to work with!",
      avatar: "MJ"
    },
    {
      name: "Vikash Singh",
      role: "Manufacturing Business",
      location: "Manesar Industrial Area",
      rating: 5,
      comment: "Needed a large warehouse facility for my manufacturing unit. Dharti Estate not only found the perfect location but also negotiated the best deal. Their industrial property expertise saved me both time and money.",
      avatar: "VS"
    },
    {
      name: "Neha Agarwal",
      role: "IT Professional",
      location: "DLF Phase 3",
      rating: 5,
      comment: "As a first-time property buyer, I was nervous about the process. The Dharti Estate team guided me through every step with patience and expertise. Got a beautiful 3BHK apartment at the best price. Forever grateful!",
      avatar: "NA"
    }
  ];

  const averageRating = testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length;
  const totalReviews = testimonials.length;

  return (
    <div className="py-20 px-4 bg-section-bg">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-dharti-green">Clients Say</span>
          </h2>
          
          {/* Overall Rating Display */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={24}
                  className={`${
                    i < Math.floor(averageRating) 
                      ? "text-yellow-400 fill-yellow-400" 
                      : "text-gray-600"
                  }`}
                />
              ))}
            </div>
            <div className="text-xl font-semibold text-foreground">
              {averageRating.toFixed(1)} out of 5
            </div>
            <div className="text-muted-foreground">
              ({totalReviews} reviews)
            </div>
          </div>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join hundreds of satisfied clients who have found their perfect properties 
            and achieved their investment goals with Dharti Estate.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              {...testimonial}
            />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="group">
              <div className="text-3xl font-bold text-dharti-green mb-2 group-hover:animate-glow">
                500+
              </div>
              <div className="text-muted-foreground">Happy Clients</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-dharti-green mb-2 group-hover:animate-glow">
                98%
              </div>
              <div className="text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-dharti-green mb-2 group-hover:animate-glow">
                ₹500Cr+
              </div>
              <div className="text-muted-foreground">Properties Sold</div>
            </div>
            <div className="group">
              <div className="text-3xl font-bold text-dharti-green mb-2 group-hover:animate-glow">
                10+
              </div>
              <div className="text-muted-foreground">Years Excellence</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;