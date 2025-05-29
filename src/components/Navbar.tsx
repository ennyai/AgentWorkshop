import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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
    const registrationSection = document.querySelector('section:last-of-type');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="font-bold text-2xl gradient-text">Content Automation</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#overview" className="text-workshop-darkGray hover:text-workshop-purple transition-colors">
            Webinar
          </a>
          <a href="#benefits" className="text-workshop-darkGray hover:text-workshop-purple transition-colors">
            Benefits
          </a>
          <a href="#timeline" className="text-workshop-darkGray hover:text-workshop-purple transition-colors">
            Agenda
          </a>
          <a href="#testimonials" className="text-workshop-darkGray hover:text-workshop-purple transition-colors">
            Success Stories
          </a>
          <Button className="btn-primary" onClick={scrollToRegistration}>
            Register Free
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-workshop-darkGray"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0 p-4 flex flex-col space-y-4 animate-fade-in">
          <a
            href="#overview"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2"
          >
            Webinar
          </a>
          <a
            href="#benefits"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2"
          >
            Benefits
          </a>
          <a
            href="#timeline"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2"
          >
            Agenda
          </a>
          <a
            href="#testimonials"
            onClick={() => setIsMenuOpen(false)}
            className="text-workshop-darkGray hover:text-workshop-purple transition-colors py-2"
          >
            Success Stories
          </a>
          <Button className="btn-primary w-full" onClick={scrollToRegistration}>
            Register Free
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
