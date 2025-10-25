import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Award, Headphones } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bebas mb-8">
            GET IN <span className="text-primary">TOUCH</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed mb-16">
            Ready to upgrade your internet experience? Have questions about our services? 
            Our team is here to help. Reach out and let's get you connected.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2">Full Name</label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        required
                        className="bg-secondary border-border"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(123) 456-7890"
                      className="bg-secondary border-border"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your connectivity needs..."
                      required
                      rows={6}
                      className="bg-secondary border-border resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-white font-bebas text-xl py-6 rounded-xl glow-orange transition-smooth hover:scale-105"
                  >
                    SEND MESSAGE
                  </Button>
                </form>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="p-6 bg-card hover-lift transition-smooth">
                <Mail className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bebas text-xl mb-2">EMAIL</h3>
                <p className="text-muted-foreground text-sm">support@nexora.tech</p>
                <p className="text-muted-foreground text-sm">sales@nexora.tech</p>
              </Card>

              <Card className="p-6 bg-card hover-lift transition-smooth">
                <Phone className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bebas text-xl mb-2">PHONE</h3>
                <a href="tel:+18338212533" className="text-primary hover:text-primary/80 transition-smooth">
                  <p className="text-sm font-semibold">+1 (833) 821-2533</p>
                </a>
                <p className="text-muted-foreground text-sm mt-1">Available 24/7</p>
              </Card>

              <Card className="p-6 bg-card hover-lift transition-smooth">
                <MapPin className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bebas text-xl mb-2">OFFICE</h3>
                <p className="text-muted-foreground text-sm">
                  123 Tech Plaza<br />
                  Digital City, DC 12345
                </p>
              </Card>

              <Card className="p-6 bg-card hover-lift transition-smooth">
                <Clock className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-bebas text-xl mb-2">HOURS</h3>
                <p className="text-muted-foreground text-sm">
                  24/7 Support Available<br />
                  Office: Mon-Fri 9AM-6PM
                </p>
              </Card>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-2 border-primary/20 animate-fade-in">
            <h2 className="font-bebas text-3xl mb-4">
              PREFER TO <span className="text-primary">CHAT LIVE?</span>
            </h2>
            <p className="text-muted-foreground mb-4">
              Our support team is available 24/7 via live chat. Click the chat icon in 
              the bottom right corner to start a conversation instantly.
            </p>
          </Card>

          {/* Quick Response Section */}
          <div className="mt-16 grid md:grid-cols-3 gap-6">
            {[
              { 
                title: "Average Response Time", 
                value: "<5 min",
                icon: Clock,
                color: "text-vibrant-yellow"
              },
              { 
                title: "Customer Satisfaction", 
                value: "98%",
                icon: Award,
                color: "text-vibrant-green"
              },
              { 
                title: "Support Available", 
                value: "24/7",
                icon: Headphones,
                color: "text-vibrant-pink"
              },
            ].map((stat, index) => (
              <Card 
                key={index} 
                className="p-6 bg-card text-center hover-lift transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
                <p className="text-4xl font-bebas text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.title}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
