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
            Free Webinar <span className="gradient-text">Agenda</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join our 1-hour live session and see exactly how content automation works. 
            We'll demo the entire process from idea to published content.
          </p>
        </div>
        
        {/* Webinar Agenda */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="inline-block px-6 py-2 bg-workshop-purple text-white rounded-full text-lg font-medium">Free 1-Hour Webinar</span>
          </div>
          
          <div className="grid md:grid-cols-1 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-workshop-purple">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">0:00 - 0:15</h3>
                <span className="text-sm bg-workshop-purple/10 text-workshop-purple px-3 py-1 rounded-full">Welcome</span>
              </div>
              <h4 className="text-xl text-workshop-purple font-medium mb-3">Introduction & Problem Overview</h4>
              <p className="text-gray-600">
                Why content creation is so time-consuming and expensive. The real cost of manual content production 
                for businesses and creators.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-workshop-blue">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">0:15 - 0:35</h3>
                <span className="text-sm bg-workshop-blue/10 text-workshop-blue px-3 py-1 rounded-full">Live Demo</span>
              </div>
              <h4 className="text-xl text-workshop-blue font-medium mb-3">Content Automation in Action</h4>
              <p className="text-gray-600">
                Watch as we take a simple idea and transform it into complete social media content—headlines, 
                posts, tweets, and more—in real-time using no-code tools.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-workshop-teal">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">0:35 - 0:50</h3>
                <span className="text-sm bg-workshop-teal/10 text-workshop-teal px-3 py-1 rounded-full">Tools & Strategy</span>
              </div>
              <h4 className="text-xl text-workshop-teal font-medium mb-3">Tools & Implementation Roadmap</h4>
              <p className="text-gray-600">
                The exact platforms you need: Make.com, n8n, Google Sheets. Step-by-step implementation 
                plan you can start using immediately.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-workshop-purple">
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-lg font-semibold">0:50 - 1:00</h3>
                <span className="text-sm bg-workshop-purple/10 text-workshop-purple px-3 py-1 rounded-full">Q&A + Next Steps</span>
              </div>
              <h4 className="text-xl text-workshop-purple font-medium mb-3">Q&A & Workshop Preview</h4>
              <p className="text-gray-600">
                Answer your questions and preview the optional 3-hour hands-on implementation workshop 
                for those who want to build their own system.
              </p>
            </div>
          </div>
        </div>

        {/* Optional Workshop Section */}
        <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Want to Build Your Own? <span className="gradient-text">Join the Workshop</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              After the free webinar, you'll have the option to join our hands-on implementation workshop 
              where we help you build your own content automation system.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-workshop-purple/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">3-Hour Session</h4>
              <p className="text-sm text-gray-600">Intensive hands-on building with expert guidance</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-workshop-blue/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-workshop-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Working System</h4>
              <p className="text-sm text-gray-600">Leave with your own content automation running</p>
            </div>

            <div className="bg-white p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-workshop-teal/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-workshop-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Ongoing Support</h4>
              <p className="text-sm text-gray-600">Community access and troubleshooting help</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-sm text-gray-600 mb-4">
              Workshop details and pricing will be shared during the free webinar
            </p>
            <span className="inline-block px-4 py-2 bg-white border border-workshop-purple text-workshop-purple rounded-lg font-medium">
              Announced During Free Webinar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
