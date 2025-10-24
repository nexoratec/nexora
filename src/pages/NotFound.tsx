import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Home, WifiOff } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-32 pb-20 px-4 sm:px-6 container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <WifiOff className="w-32 h-32 text-primary mx-auto mb-6 animate-pulse" />
          </div>
          
          <h1 className="text-8xl md:text-9xl font-bebas mb-4 animate-scale-in">
            <span className="text-vibrant-yellow">4</span>
            <span className="text-vibrant-green">0</span>
            <span className="text-vibrant-pink">4</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bebas mb-6 animate-fade-in">
            CONNECTION <span className="text-primary">NOT FOUND</span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Looks like you've wandered into uncharted digital territory. 
            The page you're looking for doesn't exist or has been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Link to="/">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bebas text-xl px-8 py-6 rounded-xl glow-orange transition-smooth hover:scale-105"
              >
                <Home className="mr-2" size={20} /> GO TO HOMEPAGE
              </Button>
            </Link>
            
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.history.back()}
              className="font-bebas text-xl px-8 py-6 rounded-xl border-primary text-primary hover:bg-primary hover:text-white transition-smooth"
            >
              <ArrowLeft className="mr-2" size={20} /> GO BACK
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default NotFound;
