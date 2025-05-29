import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Video } from "lucide-react";
import ZoomRegistration from "./ZoomRegistration";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState<"info" | "register">("info");

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
              Build Real <span className="gradient-text">AI Agents</span> For Your Enterprise
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-xl">
              Our hands-on workshop helps established businesses create tangible AI solutions. 
              Leave with working prototypes, not just concepts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={() => setActiveTab("register")}
                className="btn-primary text-lg flex items-center gap-2 group"
              >
                Register Now 
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
              <Button 
                variant="outline" 
                onClick={() => setActiveTab("info")}
                className="text-lg border-workshop-purple text-workshop-purple hover:bg-workshop-purple/5"
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="order-1 md:order-2 relative">
            {/* Tab Navigation */}
            <div className="flex mb-4 bg-white rounded-lg p-1 shadow-sm border border-gray-100">
              <button
                onClick={() => setActiveTab("info")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === "info"
                    ? "bg-workshop-purple text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <MapPin className="w-4 h-4" />
                Workshop Details
              </button>
              <button
                onClick={() => setActiveTab("register")}
                className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-md text-sm font-medium transition-all ${
                  activeTab === "register"
                    ? "bg-workshop-purple text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Video className="w-4 h-4" />
                Virtual Registration
              </button>
            </div>

            {/* Content based on active tab */}
            {activeTab === "info" ? (
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 relative z-10 transform md:translate-x-4 md:translate-y-4">
                <div className="absolute -top-3 -left-3 bg-workshop-purple text-white text-sm font-medium py-1 px-3 rounded-full">
                  Limited Spots
                </div>
                <h3 className="text-2xl font-semibold mb-4">AI Agents Workshop</h3>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-workshop-purple/10 p-1 mt-0.5">
                      <svg className="w-4 h-4 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>2-Day Intensive Training</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-workshop-purple/10 p-1 mt-0.5">
                      <svg className="w-4 h-4 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Hands-on Development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-workshop-purple/10 p-1 mt-0.5">
                      <svg className="w-4 h-4 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Enterprise Use Cases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="rounded-full bg-workshop-purple/10 p-1 mt-0.5">
                      <svg className="w-4 h-4 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Take Home Working Solutions</span>
                  </li>
                </ul>
                <div className="flex justify-between items-baseline mb-2">
                  <span className="text-lg font-semibold">Next Workshop:</span>
                  <span>June 15-16, 2025</span>
                </div>
                <div className="flex justify-between items-baseline mb-4">
                  <span className="text-lg font-semibold">Location:</span>
                  <span>Virtual & San Francisco</span>
                </div>
                <Button 
                  onClick={() => setActiveTab("register")}
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  Register for Virtual Session
                </Button>
              </div>
            ) : (
              <div className="transform md:translate-x-4 md:translate-y-4">
                <ZoomRegistration />
              </div>
            )}
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-r from-workshop-blue/20 to-workshop-purple/20 rounded-2xl transform translate-x-8 translate-y-8 -z-10"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">120+</p>
            <p className="text-gray-600 mt-2">Companies Trained</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">98%</p>
            <p className="text-gray-600 mt-2">Satisfaction Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">45+</p>
            <p className="text-gray-600 mt-2">AI Agents Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold gradient-text">8.7M</p>
            <p className="text-gray-600 mt-2">Generated Revenue</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
