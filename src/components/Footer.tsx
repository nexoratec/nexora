import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="text-center sm:text-left">
            <div className="flex items-center space-x-2 mb-3 sm:mb-4 justify-center sm:justify-start">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center glow-orange">
                <span className="text-2xl font-bebas text-white">N</span>
              </div>
              <span className="text-xl font-bebas text-foreground">NEXORA</span>
            </div>
            <p className="text-muted-foreground text-sm mb-3 sm:mb-4">
              Empowering the next generation of internet experiences.
            </p>
            <div className="flex space-x-3 justify-center sm:justify-start">
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-smooth flex items-center justify-center group">
                <Facebook size={18} className="text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-smooth flex items-center justify-center group">
                <Twitter size={18} className="text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-smooth flex items-center justify-center group">
                <Instagram size={18} className="text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-secondary hover:bg-primary transition-smooth flex items-center justify-center group">
                <Linkedin size={18} className="text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center sm:text-left">
            <h3 className="font-bebas text-lg sm:text-xl mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary transition-smooth text-sm">About Us</Link></li>
              <li><Link to="/features" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Features</Link></li>
              <li><Link to="/services" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Services</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Pricing</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center sm:text-left">
            <h3 className="font-bebas text-lg sm:text-xl mb-3 sm:mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link to="/privacy" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Terms & Conditions</Link></li>
              <li><Link to="/refund" className="text-muted-foreground hover:text-primary transition-smooth text-sm">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <h3 className="font-bebas text-lg sm:text-xl mb-3 sm:mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <Mail size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">support@nexora.tech</span>
              </li>
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <Phone size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">1-800-NEXORA</span>
              </li>
              <li className="flex items-start space-x-3 justify-center sm:justify-start">
                <MapPin size={18} className="text-primary mt-1 flex-shrink-0" />
                <span className="text-muted-foreground text-sm">123 Tech Plaza, Digital City</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 sm:pt-8 border-t border-border text-center">
          <p className="text-muted-foreground text-xs sm:text-sm">
            © {new Date().getFullYear()} Nexora Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
