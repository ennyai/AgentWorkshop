import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowDown } from "lucide-react";

const WorkshopOverview = () => {
  return (
    <section id="overview" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Free Strategy <span className="gradient-text">Webinar</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Join our 1-hour live session and see exactly how to automate your content creation process. 
            Perfect for business owners, marketers, and creators who want to scale without hiring more people.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-12">
          <div>
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                Live Content Automation Demo
              </h3>
              <p className="text-gray-600">
                Watch as we take a simple idea and transform it into complete social media content—
                headlines, posts, tweets, and more—in real-time. You'll see the exact tools and 
                workflow we use to create 80% complete content automatically.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                No-Code Tools & Platforms
              </h3>
              <p className="text-gray-600">
                We'll show you the specific platforms you need: Make.com, n8n, Google Sheets, 
                and others. If you can use Excel or Google Sheets, you can implement these automations. 
                No engineering team required.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                Reduce Time & Costs
              </h3>
              <p className="text-gray-600">
                Learn how to cut your content creation time by 80% and reduce costs significantly. 
                Perfect for both individual creators and company teams looking to scale their content output.
              </p>
            </div>

            {/* Workshop Funnel */}
            <div className="bg-gradient-to-r from-workshop-purple/5 to-workshop-blue/5 p-6 rounded-xl border border-workshop-purple/20">
              <h4 className="font-semibold mb-2 text-workshop-purple">Want to Build Your Own?</h4>
              <p className="text-sm text-gray-600 mb-4">
                After the free webinar, you'll have the option to join our 3-hour hands-on implementation workshop 
                where we'll help you build your own content automation system.
              </p>
              <Button 
                variant="outline" 
                className="text-sm border-workshop-purple text-workshop-purple hover:bg-workshop-purple/5"
              >
                Learn About Workshop <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* What You'll Learn Section */}
        <div className="mt-16 bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">What You'll Learn in the Free Webinar</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-workshop-purple/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Content Strategy</h4>
              <p className="text-sm text-gray-600">From idea to complete content in minutes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-workshop-purple/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Tool Setup</h4>
              <p className="text-sm text-gray-600">Exact platforms and configurations</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-workshop-purple/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <ArrowDown className="w-6 h-6 text-workshop-purple" />
              </div>
              <h4 className="font-semibold mb-2">Time Reduction</h4>
              <p className="text-sm text-gray-600">How to cut content time by 80%</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-workshop-purple/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-workshop-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold mb-2">Implementation</h4>
              <p className="text-sm text-gray-600">Step-by-step action plan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopOverview;
