import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BuildSection = () => {
  const contentTypes = [
    {
      title: "Social Media Automation",
      description: "Transform a single idea into multiple platform-specific posts: LinkedIn articles, Twitter threads, Instagram captions, and Facebook posts—all with perfect formatting.",
      icon: (
        <svg className="w-12 h-12 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
        </svg>
      ),
    },
    {
      title: "Email Campaign Series",
      description: "Create complete email sequences from a topic: welcome series, product launches, newsletters, and follow-ups with personalized subject lines and calls-to-action.",
      icon: (
        <svg className="w-12 h-12 text-workshop-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Blog Content Pipeline",
      description: "Generate comprehensive blog posts, meta descriptions, headlines, and promotional snippets. Include outline creation, research integration, and SEO optimization.",
      icon: (
        <svg className="w-12 h-12 text-workshop-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      ),
    },
    {
      title: "Product Descriptions",
      description: "Automate e-commerce content creation: product descriptions, feature highlights, benefits, and variations. Perfect for catalogs with hundreds of products.",
      icon: (
        <svg className="w-12 h-12 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-workshop-lightGray">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Content You Can <span className="gradient-text">Automate</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            See real examples of content automation in action. From a single input, create dozens of 
            pieces of content across multiple platforms—no coding required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contentTypes.map((contentType, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 card-gradient h-full">
              <CardHeader>
                <div className="mb-4">{contentType.icon}</div>
                <CardTitle>{contentType.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{contentType.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Tools Section */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
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
