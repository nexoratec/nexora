import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Wrench, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Residential Broadband",
      description: "High-speed fiber internet for your home with speeds up to 1Gbps. Perfect for families who stream, game, and work from home.",
      features: [
        "Speeds from 100Mbps to 1Gbps",
        "Unlimited data usage",
        "Free Wi-Fi router included",
        "24/7 technical support",
        "Easy self-installation option",
      ],
      color: "from-vibrant-yellow/20 to-transparent",
    },
    {
      icon: Building2,
      title: "Business Leased Lines",
      description: "Dedicated fiber connections for businesses requiring guaranteed bandwidth and SLA-backed uptime for mission-critical operations.",
      features: [
        "Symmetric speeds up to 10Gbps",
        "99.9% uptime SLA",
        "Static IP addresses",
        "Priority support",
        "Customized solutions",
      ],
      color: "from-vibrant-green/20 to-transparent",
    },
    {
      icon: Wrench,
      title: "Wi-Fi Installation",
      description: "Professional Wi-Fi setup and optimization services ensuring complete coverage throughout your property with no dead zones.",
      features: [
        "Site survey & planning",
        "Professional installation",
        "Mesh network setup",
        "Coverage optimization",
        "Network security configuration",
      ],
      color: "from-vibrant-pink/20 to-transparent",
    },
    {
      icon: Settings,
      title: "Router Configuration",
      description: "Expert router setup and configuration services to maximize your network performance and security.",
      features: [
        "Advanced router setup",
        "Security hardening",
        "Guest network creation",
        "Parental controls setup",
        "Performance optimization",
      ],
      color: "from-vibrant-orange/20 to-transparent",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas mb-8">
            OUR <span className="text-primary">SERVICES</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-16">
            From residential broadband to enterprise solutions, Nexora offers a comprehensive 
            range of services designed to meet the connectivity needs of everyone.
          </p>

          <div className="space-y-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-8 md:p-10 bg-gradient-to-r ${service.color} border-2 border-border hover:border-primary/50 transition-smooth hover-lift`}
              >
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-2">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 glow-orange">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bebas text-3xl mb-2">{service.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 mt-2 flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-center md:justify-end">
                    <a href="tel:+18338212533">
                      <Button
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-white font-bebas text-lg px-6 py-6 rounded-xl glow-orange transition-smooth hover:scale-105"
                      >
                        CALL NOW <ArrowRight className="ml-2" size={18} />
                      </Button>
                    </a>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-card p-8 md:p-12 rounded-2xl border border-border animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bebas mb-6">
              NEED A CUSTOM <span className="text-primary">SOLUTION?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Every business has unique connectivity requirements. Whether you need a dedicated 
              fiber line, complex network setup, or custom bandwidth allocation, our enterprise 
              team can design a solution tailored specifically for your needs.
            </p>
            <a href="tel:+18338212533">
              <Button
                variant="outline"
                size="lg"
                className="font-bebas text-lg border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
              >
                CALL: +1 (833) 821-2533
              </Button>
            </a>
          </div>

          {/* Service Benefits */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bebas text-center mb-12">
              WHY CHOOSE <span className="text-primary">NEXORA SERVICES</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { title: "Same-Day Service", description: "Need it now? We'll be there today." },
                { title: "Expert Technicians", description: "Certified professionals you can trust." },
                { title: "Transparent Pricing", description: "No hidden fees or surprises." },
                { title: "Lifetime Support", description: "We're here whenever you need us." },
              ].map((benefit, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card hover:bg-secondary transition-smooth hover-lift text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bebas text-xl mb-2 text-primary">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
