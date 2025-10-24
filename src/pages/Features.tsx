import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Zap, Shield, Clock, Wifi, Globe, Server, Signal, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Fiber-Optic Speed",
      description: "Experience internet speeds up to 1Gbps with our advanced fiber-optic infrastructure. Stream 4K content, game online, and download large files in seconds.",
      details: ["Up to 1000 Mbps download", "Up to 1000 Mbps upload", "Low latency < 10ms"],
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Your connection is protected by military-grade encryption and enterprise-level security protocols that keep your data safe from threats.",
      details: ["SSL/TLS encryption", "DDoS protection", "Firewall included"],
    },
    {
      icon: Clock,
      title: "99.9% Uptime",
      description: "Our redundant network infrastructure ensures your connection stays online. We guarantee 99.9% uptime with automatic failover systems.",
      details: ["Redundant connections", "Automatic failover", "Network monitoring"],
    },
    {
      icon: Wifi,
      title: "Whole Home Coverage",
      description: "Premium mesh Wi-Fi routers ensure strong signal in every corner of your home or office, eliminating dead zones.",
      details: ["Mesh Wi-Fi technology", "Seamless roaming", "Multiple device support"],
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connected to Tier-1 global networks ensuring optimal routing and the fastest possible speeds to anywhere in the world.",
      details: ["Tier-1 connectivity", "CDN integration", "Optimized routing"],
    },
    {
      icon: Server,
      title: "Unlimited Data",
      description: "No data caps, no throttling, no surprises. Use as much bandwidth as you need without worrying about overage charges.",
      details: ["Truly unlimited", "No throttling", "No hidden fees"],
    },
    {
      icon: Signal,
      title: "Wide Coverage",
      description: "Our extensive network covers urban and rural areas, bringing high-speed internet to communities that need it most.",
      details: ["Urban coverage", "Rural expansion", "Growing network"],
    },
    {
      icon: Lock,
      title: "Privacy Protected",
      description: "We never sell your data or track your browsing history. Your privacy is paramount and protected by our strict policies.",
      details: ["No data selling", "No tracking", "Privacy first"],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas mb-8">
            POWERFUL <span className="text-primary">FEATURES</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-16">
            Discover the technology and services that make Nexora the premier choice for 
            internet connectivity. We've built our infrastructure from the ground up to 
            deliver the best possible experience.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 bg-card hover:bg-secondary transition-smooth hover-lift group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:glow-orange transition-smooth">
                    <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-smooth" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bebas text-2xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      {feature.description}
                    </p>
                    <ul className="space-y-2">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-20 bg-gradient-to-br from-primary/10 to-transparent p-8 md:p-12 rounded-2xl border border-primary/20 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bebas mb-6">
              TECHNOLOGY THAT <span className="text-primary">SCALES</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Our network infrastructure is built on cutting-edge fiber-optic technology, 
              providing the foundation for speeds and reliability that traditional copper-based 
              networks simply can't match. We're continuously investing in network expansion 
              and upgrades to ensure our customers always have access to the latest and fastest 
              internet technology.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a home user streaming content, a gamer requiring low latency, or 
              a business running mission-critical applications, our infrastructure scales to 
              meet your needs today and in the future.
            </p>
          </div>

          {/* Performance Comparison */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bebas text-center mb-12">
              NEXORA VS <span className="text-primary">TRADITIONAL ISPs</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { metric: "Download Speed", nexora: "1000 Mbps", others: "100 Mbps", color: "text-vibrant-yellow" },
                { metric: "Upload Speed", nexora: "1000 Mbps", others: "10 Mbps", color: "text-vibrant-green" },
                { metric: "Latency", nexora: "<10ms", others: "50ms+", color: "text-vibrant-pink" },
              ].map((item, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card hover-lift transition-smooth text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-sm text-muted-foreground mb-4">{item.metric}</p>
                  <p className={`text-4xl font-bebas mb-2 ${item.color}`}>{item.nexora}</p>
                  <p className="text-xs text-muted-foreground mb-4">Nexora</p>
                  <div className="h-px bg-border mb-4"></div>
                  <p className="text-2xl font-bebas text-muted-foreground">{item.others}</p>
                  <p className="text-xs text-muted-foreground">Traditional ISPs</p>
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

export default Features;
