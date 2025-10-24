import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas mb-8">
            ABOUT <span className="text-primary">NEXORA</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-16">
            We're not just an internet service provider - we're pioneers in digital connectivity, 
            dedicated to empowering individuals and businesses with cutting-edge technology and 
            unparalleled service.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <Card className="p-8 bg-card hover-lift transition-smooth">
              <Target className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bebas mb-4">OUR MISSION</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver reliable, high-speed internet connectivity that transforms how people 
                live, work, and connect. We're committed to bridging the digital divide and 
                ensuring everyone has access to world-class internet infrastructure.
              </p>
            </Card>

            <Card className="p-8 bg-card hover-lift transition-smooth">
              <Eye className="w-12 h-12 text-primary mb-4" />
              <h2 className="text-3xl font-bebas mb-4">OUR VISION</h2>
              <p className="text-muted-foreground leading-relaxed">
                To become the leading internet service provider recognized for innovation, 
                reliability, and customer satisfaction. We envision a future where seamless 
                connectivity enables unlimited possibilities for every user.
              </p>
            </Card>
          </div>

          <h2 className="text-4xl md:text-5xl font-bebas mb-12 text-center">
            WHY CHOOSE <span className="text-primary">NEXORA</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mb-20">
            {[
              {
                icon: Award,
                title: "Industry Leader",
                description: "Over 10 years of excellence in ISP services with multiple industry awards.",
              },
              {
                icon: Users,
                title: "Customer First",
                description: "98% customer satisfaction rating with dedicated 24/7 support.",
              },
              {
                icon: Target,
                title: "Innovation Driven",
                description: "Constantly upgrading our infrastructure with the latest fiber technology.",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card hover-lift transition-smooth text-center"
              >
                <item.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-bebas text-2xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 md:p-12 rounded-2xl animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bebas mb-6">OUR STORY</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2014, Nexora Technologies began with a simple mission: to provide 
                reliable, high-speed internet to underserved communities. What started as a 
                small local operation has grown into a comprehensive ISP serving thousands of 
                residential and business customers.
              </p>
              <p>
                Our journey has been marked by continuous innovation and an unwavering commitment 
                to customer satisfaction. From deploying state-of-the-art fiber-optic networks to 
                pioneering customer service excellence, we've consistently pushed the boundaries 
                of what an ISP can be.
              </p>
              <p>
                Today, Nexora stands as a testament to what's possible when technology meets 
                genuine care for customers. We're not just connecting homes and businesses to 
                the internet - we're enabling dreams, powering innovation, and building the 
                digital infrastructure of tomorrow.
              </p>
            </div>
          </div>

          {/* Team Values Section */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bebas text-center mb-12">
              OUR <span className="text-primary">VALUES</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Innovation First",
                  description: "We constantly evolve our technology to stay ahead of the curve.",
                  color: "from-vibrant-yellow/20 to-transparent border-vibrant-yellow/30"
                },
                {
                  title: "Customer Obsessed",
                  description: "Every decision we make starts with our customers' needs.",
                  color: "from-vibrant-green/20 to-transparent border-vibrant-green/30"
                },
                {
                  title: "Reliability Matters",
                  description: "We build infrastructure that you can depend on 24/7/365.",
                  color: "from-vibrant-pink/20 to-transparent border-vibrant-pink/30"
                },
                {
                  title: "Community Impact",
                  description: "We're committed to bridging the digital divide in every community.",
                  color: "from-primary/20 to-transparent border-primary/30"
                },
              ].map((value, index) => (
                <Card 
                  key={index} 
                  className={`p-6 bg-gradient-to-br ${value.color} border-2 hover-lift transition-smooth animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bebas text-2xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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

export default About;
