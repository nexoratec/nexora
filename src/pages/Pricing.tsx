import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      speed: "100 Mbps",
      price: "$39",
      description: "Perfect for light browsing and streaming",
      features: [
        "100 Mbps download",
        "100 Mbps upload",
        "Unlimited data",
        "Free Wi-Fi router",
        "24/7 support",
        "1-3 devices",
      ],
      popular: false,
      color: "border-border",
    },
    {
      name: "Pro",
      speed: "500 Mbps",
      price: "$79",
      description: "Ideal for families and remote work",
      features: [
        "500 Mbps download",
        "500 Mbps upload",
        "Unlimited data",
        "Premium Wi-Fi router",
        "Priority support",
        "5-10 devices",
        "Free installation",
      ],
      popular: true,
      color: "border-primary",
    },
    {
      name: "Ultra",
      speed: "1 Gbps",
      price: "$129",
      description: "Maximum speed for power users",
      features: [
        "1000 Mbps download",
        "1000 Mbps upload",
        "Unlimited data",
        "Mesh Wi-Fi system",
        "VIP support",
        "Unlimited devices",
        "Free installation",
        "Network optimization",
      ],
      popular: false,
      color: "border-border",
    },
    {
      name: "Business",
      speed: "Custom",
      price: "Custom",
      description: "Tailored solutions for your business",
      features: [
        "Custom speeds",
        "Static IP addresses",
        "99.9% uptime SLA",
        "Dedicated support",
        "Advanced security",
        "Scalable bandwidth",
        "Professional setup",
        "Network monitoring",
      ],
      popular: false,
      color: "border-border",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bebas mb-6">
              SIMPLE <span className="text-primary">PRICING</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your needs. All plans include unlimited data, 
              free equipment, and our 24/7 support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`p-6 bg-card border-2 ${plan.color} ${
                  plan.popular ? "ring-2 ring-primary glow-orange scale-105" : ""
                } hover-lift transition-smooth relative overflow-hidden`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 text-sm font-bebas rounded-bl-lg">
                    POPULAR
                  </div>
                )}
                
                <div className="mb-6">
                  <h3 className="font-bebas text-3xl mb-2">{plan.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bebas text-primary">{plan.price}</span>
                    {plan.price !== "Custom" && <span className="text-muted-foreground ml-2">/month</span>}
                  </div>
                  <p className="text-lg font-bebas text-muted-foreground">{plan.speed}</p>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm">
                      <Check className="w-5 h-5 text-primary mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/contact">
                  <Button
                    className={`w-full font-bebas text-lg py-6 rounded-xl transition-smooth ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90 text-white glow-orange"
                        : "bg-secondary hover:bg-primary hover:text-white"
                    }`}
                  >
                    GET STARTED <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card animate-fade-in">
              <h3 className="font-bebas text-2xl mb-4">NO HIDDEN FEES</h3>
              <p className="text-muted-foreground leading-relaxed">
                The price you see is the price you pay. No activation fees, no equipment 
                rental charges, no surprises. We believe in transparent, straightforward 
                pricing that respects our customers.
              </p>
            </Card>

            <Card className="p-8 bg-card animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <h3 className="font-bebas text-2xl mb-4">30-DAY GUARANTEE</h3>
              <p className="text-muted-foreground leading-relaxed">
                Try Nexora risk-free. If you're not completely satisfied within the first 
                30 days, we'll refund your payment in full - no questions asked. That's 
                how confident we are in our service.
              </p>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-4xl md:text-5xl font-bebas text-center mb-12">
              PRICING <span className="text-primary">FAQs</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  question: "Can I upgrade or downgrade my plan?",
                  answer: "Absolutely! You can change your plan anytime without penalties."
                },
                {
                  question: "Are there any contracts?",
                  answer: "No long-term contracts required. Cancel anytime with 30 days notice."
                },
                {
                  question: "What's included in installation?",
                  answer: "All equipment, professional setup, and network optimization included."
                },
                {
                  question: "Do you offer business discounts?",
                  answer: "Yes! Contact us for custom enterprise pricing and volume discounts."
                },
              ].map((faq, index) => (
                <Card 
                  key={index} 
                  className="p-6 bg-card hover:bg-secondary transition-smooth hover-lift animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="font-bebas text-xl mb-3 text-primary">{faq.question}</h3>
                  <p className="text-muted-foreground text-sm">{faq.answer}</p>
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

export default Pricing;
