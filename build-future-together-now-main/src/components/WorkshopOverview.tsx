
import React from "react";

const WorkshopOverview = () => {
  return (
    <section id="overview" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Workshop <span className="gradient-text">Overview</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our AI Agents Workshop is specifically designed for established businesses
            looking to implement practical AI solutions that deliver immediate value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                Practical AI Implementation, Not Theory
              </h3>
              <p className="text-gray-600">
                This isn't a workshop filled with abstract concepts and ideas. We focus on
                building real, working AI agents that can be immediately integrated into your
                business operations, enhancing efficiency and driving innovation.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                Tailored to Enterprise Needs
              </h3>
              <p className="text-gray-600">
                We understand the unique challenges established businesses face when
                implementing new technologies. Our workshop addresses common barriers such
                as legacy systems integration, data privacy concerns, and organizational adoption.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">
                Learn by Building
              </h3>
              <p className="text-gray-600">
                Throughout the workshop, participants will construct functional AI agents
                guided by expert instructors. This hands-on approach ensures you leave with
                both knowledge and working prototypes ready for further development.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                alt="Workshop in action" 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <div className="text-workshop-purple">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Secure & Compliant</p>
                  <p className="text-xs text-gray-500">All agent development follows enterprise security standards</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 bg-white p-5 rounded-xl shadow-lg max-w-xs">
              <div className="flex items-start gap-3">
                <div className="text-workshop-teal">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium">Immediate Application</p>
                  <p className="text-xs text-gray-500">Deploy what you build within days, not months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOverview;
