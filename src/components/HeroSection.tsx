import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Video, Calendar, Users } from "lucide-react";
import ZoomRegistration from "./ZoomRegistration";

const HeroSection = () => {
  const scrollToRegistration = () => {
    const registrationSection = document.querySelector('section:last-of-type');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 bg-workshop-lightGray overflow-hidden">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-radial from-workshop-purple/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-workshop-blue/10 to-transparent"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Automate Your <span className="gradient-text">Content Creation</span>—No Coding Needed
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              Join our free 1-hour strategy webinar and learn how to go from idea to 80% complete social content. 
              Perfect for business owners, marketers, and creators—no technical experience required.
            </p>

            {/* Key Benefits */}
            <div className="mb-8 space-y-2">
              <div className="flex items-center gap-2 text-gray-700">
                <div className="rounded-full bg-workshop-purple/10 p-1">
                  <svg className="w-4 h-4 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>No coding or engineering background required</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="rounded-full bg-workshop-purple/10 p-1">
                  <svg className="w-4 h-4 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>If you use Excel, you can do this</span>
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <div className="rounded-full bg-workshop-purple/10 p-1">
                  <svg className="w-4 h-4 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span>You don't need to hire an engineer</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToRegistration}
                className="btn-primary text-lg flex items-center gap-2 group"
              >
                Register Free 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => {
                  const overviewSection = document.getElementById('overview');
                  if (overviewSection) {
                    overviewSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="text-lg border-workshop-purple text-workshop-purple hover:bg-workshop-purple/5"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            {/* Registration Form */}
            <div className="transform md:translate-x-4 md:translate-y-4">
              <ZoomRegistration />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-workshop-blue/20 to-workshop-purple/20 rounded-2xl transform translate-x-8 translate-y-8 -z-10"></div>
          </div>
        </div>

        {/* Updated Stats for Content Automation */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">500+</p>
            <p className="text-gray-600 mt-2">Content Creators Trained</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">80%</p>
            <p className="text-gray-600 mt-2">Time Savings Achieved</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">95%</p>
            <p className="text-gray-600 mt-2">Would Recommend</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">24/7</p>
            <p className="text-gray-600 mt-2">Automated Content</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
