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
            Benefits for <span className="gradient-text">Content Creators & Teams</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Whether you're a solo creator, marketing team, or business owner, our content automation 
            approach is designed for anyone who wants to scale their content without technical complexity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-purple/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Save 80% of Your Time</h3>
            <p className="text-gray-600">
              Transform hours of content creation into minutes. Automate the heavy lifting while 
              maintaining your unique voice and brand consistency across all platforms.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-blue/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Dramatically Cut Costs</h3>
            <p className="text-gray-600">
              No more expensive freelancers or agencies for routine content. You'll own the system 
              and reduce your content creation costs by thousands per month.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-teal/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">No Technical Skills Required</h3>
            <p className="text-gray-600">
              If you can use Excel or Google Sheets, you can implement these automations. 
              No coding, no engineering team, no complex technical setup required.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-purple/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Your Data Stays Safe</h3>
            <p className="text-gray-600">
              You control your automations and data. No dependency on external agencies or 
              platforms that could disappear. Your system belongs to you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-blue/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Scale Individual or Team</h3>
            <p className="text-gray-600">
              Perfect for solo creators who want to compete with big teams, or companies looking 
              to multiply their content output without hiring more staff.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
            <div className="rounded-full bg-workshop-teal/10 w-14 h-14 flex items-center justify-center mb-4">
              <svg className="w-7 h-7 text-workshop-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Immediate Implementation</h3>
            <p className="text-gray-600">
              Start automating your content creation right after the webinar. No months of 
              planning or development—you can begin seeing results within days.
            </p>
          </div>
        </div>

        {/* Objection Handling Section */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Frequently Asked Questions</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-workshop-purple">Is this just for technical people?</h4>
              <p className="text-gray-600 text-sm">
                Not at all! This is specifically designed for non-technical users. If you can manage a 
                spreadsheet, you can implement these automations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-workshop-purple">Do I need coding experience?</h4>
              <p className="text-gray-600 text-sm">
                Zero coding required. We use no-code platforms like Make.com and Google Sheets. 
                Everything is visual and intuitive.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-workshop-purple">What if I get stuck after the workshop?</h4>
              <p className="text-gray-600 text-sm">
                You'll get step-by-step guides and access to our community. Plus, if you join the 
                paid workshop, you get hands-on implementation support.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h4 className="font-semibold mb-2 text-workshop-purple">Is my data secure with these tools?</h4>
              <p className="text-gray-600 text-sm">
                Yes! You control your own automations and data. We'll show you how to set everything 
                up securely with industry-standard platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessBenefits;
