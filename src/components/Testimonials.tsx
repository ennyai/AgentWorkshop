import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      position: "Marketing Director, GrowthCo",
      company: "GrowthCo",
      image: "/placeholder.svg",
      quote: "After implementing the content automation system from the webinar, we went from spending 20+ hours per week on social media to just 2 hours. Our content output increased 5x while maintaining quality.",
    },
    {
      name: "Michael Rodriguez",
      position: "Solo Content Creator",
      company: "Independent",
      image: "/placeholder.svg",
      quote: "I was skeptical about automation, but this changed everything. I can now compete with big agencies as a solo creator. My content production went from 5 posts per week to 25+ with the same effort.",
    },
    {
      name: "Jessica Chen",
      position: "COO, E-commerce Plus",
      company: "E-commerce Plus",
      image: "/placeholder.svg",
      quote: "The best part? I have zero technical background. If I can set this up using just Google Sheets and Make.com, anyone can. We've saved over $3,000/month on content creation costs.",
    },
    {
      name: "David Thompson",
      position: "Marketing Manager, Local Business Group",
      company: "Local Business Group",
      image: "/placeholder.svg",
      quote: "The webinar opened my eyes to what's possible. We went from inconsistent posting to daily, high-quality content across all platforms. Our engagement rates increased 150% in just 2 months.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Content Automation <span className="gradient-text">Success Stories</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real results from business owners, marketers, and creators who attended our free webinar 
            and transformed their content creation process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                <div className="p-6 pb-4">
                  <div className="flex items-center mb-6">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-14 h-14 rounded-full object-cover" 
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.position}</p>
                      <p className="text-xs text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="italic text-gray-700">{testimonial.quote}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-workshop-blue via-workshop-purple to-workshop-teal"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Typical Results After the Webinar</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">80%</div>
              <div className="text-sm text-gray-600">Time Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">5x</div>
              <div className="text-sm text-gray-600">Content Output</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">$3K+</div>
              <div className="text-sm text-gray-600">Monthly Savings</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">150%</div>
              <div className="text-sm text-gray-600">Engagement Increase</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Trusted by Creators & Businesses</h3>
          <p className="text-gray-600 mb-8">
            From solo creators to marketing teams, our content automation approach works for everyone
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Content Creators</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Marketing Teams</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">E-commerce</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Freelancers</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Agencies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
