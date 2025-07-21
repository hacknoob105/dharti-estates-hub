import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, MessageCircle, Clock, Users } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      description: "+91 98765 43210",
      action: "tel:+919876543210"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      description: "info@dhartiestate.com",
      action: "mailto:info@dhartiestate.com"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      description: "Connaught Place, New Delhi",
      action: "#"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "WhatsApp",
      description: "Quick Chat",
      action: "https://wa.me/919876543210"
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
    { icon: <MapPin className="w-8 h-8" />, number: "50+", label: "Locations" },
    { icon: <Clock className="w-8 h-8" />, number: "10+", label: "Years Experience" },
  ];

  return (
    <div className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="flex justify-center mb-4 text-dharti-green group-hover:animate-glow">
                {stat.icon}
              </div>
              <div className="text-4xl font-bold text-foreground mb-2">{stat.number}</div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Contact Grid */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Get in <span className="text-dharti-green">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ready to invest? Our experts are here to guide you every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.action}
              className="group bg-card rounded-2xl p-8 text-center hover:bg-card-hover transition-all duration-300 hover:-translate-y-2 shadow-card hover:shadow-premium border border-border"
            >
              <div className="flex justify-center mb-4 text-dharti-green group-hover:animate-glow">
                {contact.icon}
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-dharti-green transition-colors">
                {contact.title}
              </h3>
              <p className="text-muted-foreground">{contact.description}</p>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-3xl p-12 border border-border">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Make Your Next Investment?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied investors who have found their perfect properties with Dharti Estate. 
            Let's discuss your investment goals today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-green text-foreground hover:shadow-green-glow transition-all duration-300 hover:scale-105 px-8 py-6"
            >
              <Phone className="mr-2 w-5 h-5" />
              Book Consultation
            </Button>
            <Button 
              variant="outline"
              size="lg"
              className="border-dharti-green text-dharti-green hover:bg-dharti-green hover:text-foreground px-8 py-6 transition-all duration-300 hover:scale-105"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Chat
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;