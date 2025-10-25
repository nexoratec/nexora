import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ScrollingBanner from "@/components/ScrollingBanner";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Wifi, Shield, Clock, Zap, Globe, Lock, Router, ArrowRight, MessageSquare, Calendar, WifiOff, Network, Gauge, Phone, Settings, CheckCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto text-center space-y-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bebas leading-tight">
            <span className="block">HOOKED BY <span className="text-vibrant-yellow">SPEED</span></span>
            <span className="block">FASCINATED BY <span className="text-vibrant-green">CONNECTIVITY</span></span>
            <span className="block">FUELED BY <span className="text-vibrant-pink">INNOVATION </span> AND</span>
            <span className="block"> MEANINGFUL <span className="text-vibrant-orange">EXPERIENCE</span>.</span>
          </h1>
         
        </div>
      </section>

      {/* Scrolling Banner */}
      <ScrollingBanner />

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bebas">
                CRAFTING INTERNET EXPERIENCES AT{" "}
                <span className="text-primary">NEXORA</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                At Nexora Technologies, we're not just providing internet - we're crafting experiences. 
                Our cutting-edge infrastructure, combined with unwavering reliability and innovative 
                solutions, powers the digital lives of thousands. From fiber-optic speed to enterprise-grade 
                security, we're redefining what connectivity means in the modern world.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Wifi, label: "High-Speed" },
                { icon: Lock, label: "Secure" },
                { icon: Router, label: "Reliable" },
                { icon: Globe, label: "Global" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="p-8 bg-card hover:bg-secondary transition-smooth hover-lift text-center group cursor-pointer"
                >
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:scale-110 transition-smooth" />
                  <p className="font-bebas text-xl">{item.label}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas text-center mb-16">
            WHY CHOOSE <span className="text-primary">NEXORA</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Zap,
                title: "Lightning Speed",
                description: "Experience blazing-fast fiber-optic speeds up to 1Gbps for seamless streaming and gaming.",
              },
              {
                icon: Shield,
                title: "Secure Connection",
                description: "Enterprise-grade security protocols keep your data safe and your connection private.",
              },
              {
                icon: Clock,
                title: "24/7 Support",
                description: "Our dedicated team is always ready to help, any time of day or night.",
              },
              {
                icon: Router,
                title: "Flexible Plans",
                description: "Choose from residential to business plans tailored to your unique needs.",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover:bg-secondary transition-smooth hover-lift group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:glow-orange transition-smooth">
                  <feature.icon className="w-7 h-7 text-primary group-hover:text-white transition-smooth" />
                </div>
                <h3 className="font-bebas text-2xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Highlights Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bebas mb-4">
              NO WORDS, <span className="text-primary">BIG EGO BOOST</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience unmatched performance and reliability with our premium internet services
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-gradient-to-br from-vibrant-yellow via-vibrant-yellow/80 to-vibrant-yellow/60 text-background hover-lift transition-smooth group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-background/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Zap className="w-8 h-8 text-background" />
                </div>
                <div className="text-sm font-semibold mb-2 opacity-90">BACKBONE OF OUR DESIGN TEAM</div>
                <h3 className="font-bebas text-3xl mb-4 leading-tight">LIGHTNING FAST FIBER SPEEDS</h3>
                <p className="text-background/90 leading-relaxed">
                  Experience blazing speeds up to 1Gbps that power your entire digital life. 
                  Stream 4K, game without lag, and work from home seamlessly.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">UP TO 1000 MBPS</div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-red-500 via-red-500/80 to-red-500/60 text-white hover-lift transition-smooth group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold mb-2 opacity-90">OUTSTANDING ATTENTION TO DETAIL</div>
                <h3 className="font-bebas text-3xl mb-4 leading-tight">ENTERPRISE GRADE SECURITY</h3>
                <p className="text-white/90 leading-relaxed">
                  Military-grade encryption and advanced firewall protection keep your data 
                  safe from cyber threats and unauthorized access.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">99.9% SECURE</div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-600 text-white hover-lift transition-smooth group">
              <div className="mb-6">
                <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-semibold mb-2 opacity-90">PROFESSIONAL CREATIVE DETAIL ORIENTED</div>
                <h3 className="font-bebas text-3xl mb-4 leading-tight">24/7 EXPERT SUPPORT</h3>
                <p className="text-white/90 leading-relaxed">
                  Our dedicated technical support team is available around the clock 
                  to ensure your connection stays strong and reliable.
                </p>
              </div>
              <div className="flex items-center justify-between">
                <div className="text-sm font-semibold">ALWAYS AVAILABLE</div>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 bg-gradient-to-br from-vibrant-yellow/20 to-transparent border-2 border-vibrant-yellow/30 hover-lift transition-smooth group animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-vibrant-yellow/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <MessageSquare className="w-8 h-8 text-vibrant-yellow" />
              </div>
              <h3 className="font-bebas text-3xl mb-3">TALK TO OUR LIVE AGENT</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Get instant help from our expert team. Real humans, real solutions, available 24/7.
              </p>
              <a href="tel:+18338212533">
                <Button className="w-full bg-vibrant-yellow hover:bg-vibrant-yellow/90 text-background font-bebas text-lg py-6 rounded-xl transition-smooth hover:scale-105">
                  CALL NOW: +1 (833) 821-2533
                </Button>
              </a>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-vibrant-green/20 to-transparent border-2 border-vibrant-green/30 hover-lift transition-smooth group animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 rounded-full bg-vibrant-green/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Calendar className="w-8 h-8 text-vibrant-green" />
              </div>
              <h3 className="font-bebas text-3xl mb-3">BOOK A TECHNICIAN</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Schedule installation or maintenance at your convenience. Same-day service available.
              </p>
              <a href="tel:+18338212533">
                <Button className="w-full bg-vibrant-green hover:bg-vibrant-green/90 text-background font-bebas text-lg py-6 rounded-xl transition-smooth hover:scale-105">
                  CALL NOW: +1 (833) 821-2533
                </Button>
              </a>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-vibrant-pink/20 to-transparent border-2 border-vibrant-pink/30 hover-lift transition-smooth group animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 rounded-full bg-vibrant-pink/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <WifiOff className="w-8 h-8 text-vibrant-pink" />
              </div>
              <h3 className="font-bebas text-3xl mb-3">INTERNET NOT WORKING?</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Let us fix that immediately. Quick troubleshooting and instant solutions.
              </p>
              <a href="tel:+18338212533">
                <Button className="w-full bg-vibrant-pink hover:bg-vibrant-pink/90 text-background font-bebas text-lg py-6 rounded-xl transition-smooth hover:scale-105">
                  CALL NOW: +1 (833) 821-2533
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* Network Coverage Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bebas">
                BLAZING FAST <span className="text-primary">NATIONWIDE</span> COVERAGE
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our fiber-optic network spans across major cities and growing rural areas. 
                Check if Nexora is available in your location and experience the speed difference.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Cities Covered", value: "150+" },
                  { label: "Happy Customers", value: "50K+" },
                  { label: "Network Uptime", value: "99.9%" },
                  { label: "Avg Speed", value: "500 Mbps" },
                ].map((stat, index) => (
                  <Card key={index} className="p-4 bg-card text-center hover-lift transition-smooth">
                    <p className="text-3xl font-bebas text-primary">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                ))}
              </div>
            </div>
            <Card className="p-8 bg-card hover-lift transition-smooth animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="aspect-square bg-secondary rounded-2xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-vibrant-green/20 animate-pulse"></div>
                <Network className="w-32 h-32 text-primary relative z-10" />
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto bg-gradient-to-br from-secondary/30 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Main Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-bebas leading-tight mb-6">
                  DEEP INTO <span className="text-primary">INTERNET</span><br />
                  EXPERIENCE, <span className="text-vibrant-green">FIBER PRESENCE</span><br />
                  AND <span className="text-vibrant-orange">DIGITAL SOLUTIONS</span>
                </h2>
              </div>
              
              {/* Decorative Elements */}
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-vibrant-yellow flex items-center justify-center">
                  <Zap className="w-8 h-8 text-background" />
                </div>
                <div className="w-20 h-20 rounded-full bg-vibrant-green flex items-center justify-center">
                  <Network className="w-10 h-10 text-background" />
                </div>
                <div className="w-12 h-12 rounded-full bg-vibrant-pink flex items-center justify-center">
                  <Wifi className="w-6 h-6 text-background" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-vibrant-orange flex items-center justify-center rotate-12">
                  <Router className="w-7 h-7 text-background" />
                </div>
              </div>
            </div>

            {/* Right Side - FAQ Items */}
            <div className="space-y-4">
              {[
                {
                  title: "FIBER SPEED & RELIABILITY",
                  content: "Our fiber-optic network delivers consistent speeds up to 1Gbps with 99.9% uptime. Experience zero buffering, instant downloads, and seamless 4K streaming across all your devices simultaneously.",
                  color: "text-primary",
                  bgColor: "bg-primary/20",
                  borderColor: "border-primary/30"
                },
                {
                  title: "INSTALLATION & SETUP", 
                  content: "Professional installation by certified technicians at no extra cost. We handle everything from fiber cable installation to router configuration and network optimization for your home or business.",
                  color: "text-vibrant-green",
                  bgColor: "bg-vibrant-green/20", 
                  borderColor: "border-vibrant-green/30"
                },
                {
                  title: "DIGITAL SOLUTIONS",
                  content: "Complete digital infrastructure including managed Wi-Fi, cloud backup, cybersecurity protection, and smart home integration. Scale your digital capabilities with our enterprise-grade solutions.",
                  color: "text-vibrant-orange",
                  bgColor: "bg-vibrant-orange/20",
                  borderColor: "border-vibrant-orange/30"
                },
                {
                  title: "TECHNICAL SUPPORT",
                  content: "24/7 expert support with average response time under 2 minutes. Our local technicians provide remote troubleshooting, on-site visits, and proactive network monitoring to keep you connected.",
                  color: "text-vibrant-yellow",
                  bgColor: "bg-vibrant-yellow/20",
                  borderColor: "border-vibrant-yellow/30"
                }
              ].map((faq, index) => (
                <details key={index} className="group">
                  <summary className={`flex items-center justify-between p-4 bg-card hover:bg-secondary transition-smooth cursor-pointer rounded-lg border-2 ${faq.borderColor} list-none`}>
                    <span className={`font-bebas text-lg ${faq.color}`}>{faq.title}</span>
                    <div className={`w-6 h-6 rounded-full ${faq.bgColor} flex items-center justify-center group-open:rotate-45 transition-transform`}>
                      <span className={`${faq.color} text-xl`}>+</span>
                    </div>
                  </summary>
                  <div className={`mt-2 p-4 rounded-lg ${faq.bgColor} border-2 ${faq.borderColor}`}>
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.content}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bebas text-center mb-16">
            SIMPLE <span className="text-primary">3-STEP</span> INSTALLATION
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Phone,
                title: "Contact Us",
                description: "Choose your plan and schedule installation at your convenience.",
                color: "text-vibrant-yellow",
                delay: "0s"
              },
              {
                step: "02",
                icon: Settings,
                title: "Professional Setup",
                description: "Our certified technicians install and configure everything perfectly.",
                color: "text-vibrant-green",
                delay: "0.1s"
              },
              {
                step: "03",
                icon: CheckCircle,
                title: "Enjoy Speed",
                description: "Start streaming, gaming, and working at lightning-fast speeds immediately.",
                color: "text-vibrant-pink",
                delay: "0.2s"
              },
            ].map((item, index) => (
              <Card 
                key={index} 
                className="p-8 bg-card hover:bg-secondary transition-smooth hover-lift group relative overflow-hidden animate-fade-in"
                style={{ animationDelay: item.delay }}
              >
                <div className="absolute top-0 right-0 text-[120px] font-bebas text-secondary/50 leading-none">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <div className={`w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth ${item.color}`}>
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-bebas text-2xl mb-3">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bebas leading-tight">
            LET'S GET YOU <span className="text-primary">CONNECTED</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Ready to experience the future of internet? Get in touch with our team 
            and discover the perfect plan for your needs.
          </p>
          <a href="tel:+18338212533">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white font-bebas text-lg sm:text-xl px-6 sm:px-8 py-5 sm:py-6 rounded-xl glow-orange transition-smooth hover:scale-105"
            >
              CALL NOW: +1 (833) 821-2533 <ArrowRight className="ml-2" size={18} />
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
