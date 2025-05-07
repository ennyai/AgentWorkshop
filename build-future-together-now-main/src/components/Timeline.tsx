
import React from "react";

const Timeline = () => {
  return (
    <section id="timeline" className="section-padding bg-workshop-lightGray relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-gradient-radial from-workshop-purple/10 to-transparent rounded-full"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-radial from-workshop-blue/10 to-transparent rounded-full"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Workshop <span className="gradient-text">Timeline</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our comprehensive two-day workshop is structured to maximize learning and hands-on development.
            Here's what you can expect:
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-workshop-blue via-workshop-purple to-workshop-teal"></div>
          
          {/* Day 1 */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-workshop-blue text-white rounded-full text-sm font-medium">Day 1</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="md:text-right">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">9:00 AM - 10:30 AM</h3>
                  <h4 className="text-lg text-workshop-purple font-medium mb-3">Introduction to Enterprise AI Agents</h4>
                  <p className="text-gray-600">
                    Overview of AI agent architecture, capabilities, and practical applications
                    in enterprise environments. Case studies of successful implementations.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-purple bg-white"></div>
                </div>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-6 w-6 h-6 rounded-full border-4 border-workshop-purple bg-white"></div>
              
              <div className="md:pl-8">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">10:45 AM - 12:30 PM</h3>
                  <h4 className="text-lg text-workshop-blue font-medium mb-3">Agent Design Workshop</h4>
                  <p className="text-gray-600">
                    Hands-on session focusing on designing AI agents that align with your
                    specific business processes and integration requirements.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-blue bg-white"></div>
                </div>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-44 w-6 h-6 rounded-full border-4 border-workshop-blue bg-white"></div>
              
              <div className="md:text-right">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">1:30 PM - 3:30 PM</h3>
                  <h4 className="text-lg text-workshop-teal font-medium mb-3">Core Development: Building Your Agent</h4>
                  <p className="text-gray-600">
                    Start building your AI agent with expert guidance. Focus on core functionality,
                    natural language processing, and business logic implementation.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-teal bg-white"></div>
                </div>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-80 w-6 h-6 rounded-full border-4 border-workshop-teal bg-white"></div>
              
              <div className="md:pl-8">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">3:45 PM - 5:30 PM</h3>
                  <h4 className="text-lg text-workshop-purple font-medium mb-3">Integration Strategy</h4>
                  <p className="text-gray-600">
                    Learn techniques for integrating AI agents with existing enterprise systems,
                    APIs, and databases while maintaining security and compliance.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-purple bg-white"></div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Day 2 */}
          <div>
            <div className="text-center mb-8">
              <span className="inline-block px-4 py-1 bg-workshop-purple text-white rounded-full text-sm font-medium">Day 2</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="md:text-right">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">9:00 AM - 11:00 AM</h3>
                  <h4 className="text-lg text-workshop-blue font-medium mb-3">Advanced Development</h4>
                  <p className="text-gray-600">
                    Continue building your AI agent with focus on advanced features such as
                    reasoning, memory, and sophisticated decision-making capabilities.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-blue bg-white"></div>
                </div>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-6 w-6 h-6 rounded-full border-4 border-workshop-blue bg-white"></div>
              
              <div className="md:pl-8">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">11:15 AM - 12:30 PM</h3>
                  <h4 className="text-lg text-workshop-teal font-medium mb-3">Testing & Quality Assurance</h4>
                  <p className="text-gray-600">
                    Implement testing strategies specific to AI agents, focusing on reliability,
                    edge cases, and ensuring consistent performance.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-teal bg-white"></div>
                </div>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-44 w-6 h-6 rounded-full border-4 border-workshop-teal bg-white"></div>
              
              <div className="md:text-right">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">1:30 PM - 3:30 PM</h3>
                  <h4 className="text-lg text-workshop-purple font-medium mb-3">Deployment & Scaling</h4>
                  <p className="text-gray-600">
                    Prepare your AI agent for production deployment, including scaling considerations,
                    performance optimization, and monitoring strategies.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-purple bg-white"></div>
                </div>
              </div>
              
              {/* Timeline dot for desktop */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 mt-80 w-6 h-6 rounded-full border-4 border-workshop-purple bg-white"></div>
              
              <div className="md:pl-8">
                <div className="bg-white p-6 rounded-xl shadow-md relative">
                  <h3 className="text-xl font-semibold mb-2">3:45 PM - 5:30 PM</h3>
                  <h4 className="text-lg text-workshop-blue font-medium mb-3">Implementation Planning & Next Steps</h4>
                  <p className="text-gray-600">
                    Develop a roadmap for fully implementing your AI agent back at your organization,
                    including resource requirements and timeline planning.
                  </p>
                  
                  {/* Dot for timeline on mobile */}
                  <div className="md:hidden absolute -left-3 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-4 border-workshop-blue bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
