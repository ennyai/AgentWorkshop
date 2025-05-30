import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BuildSection = () => {
  return (
    <section className="section-padding bg-workshop-lightGray">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Live Content Automation Demo</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Watch as we take a simple idea and transform it into complete social media content— IG, LinkedIn, X, and more—in real-time. You'll see the exact tools and workflow we use to create content automatically.
          </p>
        </div>

        {/* Tools Section */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-semibold mb-6 text-center">Tools We'll Show You</h3>
          <p className="text-gray-600 text-center mb-8">
            These are the exact no-code platforms you'll learn to use—no technical background required
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="h-16 flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-workshop-blue to-workshop-purple rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">Make</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Make.com</h4>
              <p className="text-sm text-gray-600">Visual automation platform</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="h-16 flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-workshop-teal to-workshop-blue rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">n8n</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">n8n</h4>
              <p className="text-sm text-gray-600">Workflow automation</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="h-16 flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xs">Sheets</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">Google Sheets</h4>
              <p className="text-sm text-gray-600">Content management & triggers</p>
            </div>
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="h-16 flex items-center justify-center mb-3">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">AI</span>
                </div>
              </div>
              <h4 className="font-semibold mb-2">AI Platforms</h4>
              <p className="text-sm text-gray-600">Content generation engines</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic mb-6">
            "If you can use Excel, you can implement these automations—no coding required!"
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">30 min</div>
              <div className="text-sm text-gray-600">Setup Time</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">Zero</div>
              <div className="text-sm text-gray-600">Coding Required</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">24/7</div>
              <div className="text-sm text-gray-600">Automated Content</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">∞</div>
              <div className="text-sm text-gray-600">Scalability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
