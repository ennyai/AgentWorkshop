
import React from "react";

const BusinessBenefits = () => {
  return (
    <section id="benefits" className="section-padding bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-workshop-purple/5 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-workshop-blue/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Benefits for <span className="gradient-text">Established Businesses</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Our workshop is specifically designed to address the unique challenges and opportunities
            that established businesses face when implementing AI solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-purple/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Accelerate Implementation</h3>
            <p className="text-gray-600">
              Skip months of research and development by implementing proven AI agent architectures
              tailored to your business requirements. Deploy solutions within weeks, not years.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-blue/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Integrate with Existing Systems</h3>
            <p className="text-gray-600">
              Learn how to connect AI agents with your legacy systems, databases, and software
              without major disruptions or costly infrastructure overhauls.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-teal/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">ROI-Focused Development</h3>
            <p className="text-gray-600">
              Focus on AI implementations that deliver measurable business value. Each project
              includes ROI assessment frameworks for tracking performance metrics.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-purple/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Compliance & Security Built-in</h3>
            <p className="text-gray-600">
              Develop AI agents that adhere to industry regulations and enterprise security
              standards from the ground up, minimizing compliance risks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-blue/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Internal Capability Building</h3>
            <p className="text-gray-600">
              Equip your team with the skills to maintain and extend your AI agents after the workshop,
              reducing dependency on external vendors and consultants.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-teal/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Strategic Innovation</h3>
            <p className="text-gray-600">
              Identify opportunities for AI-driven innovation specific to your industry and
              competitive landscape, creating sustainable competitive advantages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
