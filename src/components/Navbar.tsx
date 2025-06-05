import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import ennyLogo from "@/assets/ennyAI logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3" 
          : "bg-white/90 backdrop-blur-sm shadow-sm py-5"
      } border-b border-white/20`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <a href="https://www.enny.ai" className="flex items-center">
            <img 
              src={ennyLogo} 
              alt="Enny AI" 
              className="h-20 w-auto drop-shadow-sm"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#overview" className="text-workshop-darkGray hover:text-workshop-purple transition-colors font-medium drop-shadow-sm">
            Webinar
          </a>
          <a href="#benefits" className="text-workshop-darkGray hover:text-workshop-purple transition-colors font-medium drop-shadow-sm">
            Benefits
          </a>
          <a href="#timeline" className="text-workshop-darkGray hover:text-workshop-purple transition-colors font-medium drop-shadow-sm">
            Agenda
          </a>
          <a href="#testimonials" className="text-workshop-darkGray hover:text-workshop-purple transition-colors font-medium drop-shadow-sm">
            Success Stories
          </a>
          <Button className="btn-primary shadow-lg" onClick={scrollToRegistration}>
            Register Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-workshop-darkGray bg-white/50 backdrop-blur-sm shadow-sm hover:bg-white/70"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md shadow-xl border-t border-white/20 absolute top-full left-0 right-0 p-4 flex flex-col space-y-4 animate-fade-in">
          <a
            href="#overview"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2 font-medium"
          >
            Webinar
          </a>
          <a
            href="#benefits"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2 font-medium"
          >
            Benefits
          </a>
          <a
            href="#timeline"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2 font-medium"
          >
            Agenda
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2 font-medium"
          >
            Success Stories
          </a>
          <Button className="btn-primary w-full shadow-lg" onClick={scrollToRegistration}>
            Register Free
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
