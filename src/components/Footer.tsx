import React from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Mail, Users } from "lucide-react";
import ennyLogo from "@/assets/ennyAI logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-workshop-blue text-white pt-12 pb-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start gap-8 md:gap-16 mb-8">
          {/* Left Section - Logo and Contact Info */}
          <div className="flex-shrink-0">
            <div className="flex items-center mb-4">
              <img 
                src={ennyLogo} 
                alt="Enny AI" 
                className="h-12 w-auto"
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-workshop-teal" />
                <span className="text-gray-300 text-sm">Truckee, California</span>
              </div>
              
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-workshop-teal" />
                <a href="mailto:farlen@enny.ai" className="text-workshop-teal hover:text-white transition-colors underline text-sm">
                  farlen@enny.ai
                </a>
              </div>
              
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-workshop-teal" />
                <a href="https://www.enny.ai/contact" className="text-workshop-teal hover:text-white transition-colors underline text-sm">
                  Book a Meeting
                </a>
              </div>
            </div>
          </div>
          
          {/* Right Section - Navigation Links */}
          <div className="flex-shrink-0">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="https://www.enny.ai" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="https://www.enny.ai/case-studies" className="text-gray-300 hover:text-white transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="https://www.enny.ai/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="https://www.enny.ai/legal" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Enny AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
