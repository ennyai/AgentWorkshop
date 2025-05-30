import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Star } from "lucide-react";
import wherewolfLogo from "@/assets/wherewolf.png";
import airsimplicityLogo from "@/assets/airsimplicity.png";
import truckeeHRLogo from "@/assets/truckee HR.webp";
import kidderMatthewsLogo from "@/assets/kidder-matthews-logo.webp";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Phil Ellison",
      position: "Revenue Operations Manager",
      company: "Wherewolf",
      location: "Denver, Colorado",
      image: wherewolfLogo,
      quote: "Their consistent communication, clear timelines, and willingness to adjust to our needs ensured the project's success.",
      project: "Custom Software Dev for Digital Waiver Software Company",
      rating: 5.0,
      service: "AI Development, Custom Software Development"
    },
    {
      name: "Juli Reiserer",
      position: "Marketing",
      company: "AirSimplicity",
      location: "Denver, Colorado",
      image: airsimplicityLogo,
      quote: "The final scalable solution was deployed across our entire property portfolio.",
      project: "Home Adjustment Prototype Dev for Short-Term Rental Mgmt Co",
      rating: 5.0,
      service: "Custom Software Development"
    },
    {
      name: "Kim Pierce",
      position: "Owner",
      company: "TruckeeHR",
      location: "Truckee, California",
      image: truckeeHRLogo,
      quote: "The final project was exactly what I was looking for.",
      project: "AI Consulting for HR Consulting Company",
      rating: 5.0,
      service: "AI Consulting, AI Development"
    },
    {
      name: "Sean Retzloff",
      position: "VP",
      company: "Kidder Mathews",
      location: "Reno, Nevada",
      image: kidderMatthewsLogo,
      quote: "They were responsive to all my teams' requests and provided incredible customer service.",
      project: "Email Marketing for Real Estate Company",
      rating: 5.0,
      service: "Email Marketing, Generative AI"
    },
  ];

  const clutchUrl = "https://clutch.co/profile/enny-ai";

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">Enny AI Client Reviews</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Real results from business owners and companies who worked with Enny AI to automate their processes and scale their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <CardContent className="p-0">
                {/* Company Logo Header */}
                <div className="bg-gray-50 p-6 border-b border-gray-100">
                  <div className="flex items-center justify-center h-16 mb-4">
                    <img 
                      src={testimonial.image} 
                      alt={`${testimonial.company} logo`}
                      className={`object-contain ${
                        testimonial.company === 'Kidder Mathews' 
                          ? 'max-h-25 max-w-48' 
                          : testimonial.company === 'TruckeeHR'
                            ? 'max-h-20 max-w-48'
                            : 'max-h-12 max-w-32'
                      }`}
                    />
                  </div>
                  <div className="text-center">
                    <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                    <p className="text-xs text-gray-500">{testimonial.company} • {testimonial.location}</p>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <p className="text-xs text-workshop-purple font-medium uppercase tracking-wide mb-1">
                        {testimonial.service}
                      </p>
                      <p className="text-sm text-gray-600">{testimonial.project}</p>
                    </div>
                    <div className="flex items-center gap-1 ml-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-sm font-semibold ml-1">{testimonial.rating}</span>
                    </div>
                  </div>
                  
                  <p className="italic text-gray-700 mb-4">"{testimonial.quote}"</p>
                  
                  <a 
                    href={clutchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-workshop-purple hover:text-workshop-blue transition-colors text-sm font-medium"
                  >
                    View full review on Clutch
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <div className="h-1 bg-gradient-to-r from-workshop-blue via-workshop-purple to-workshop-teal"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results Stats */}
        <div className="mt-16 bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8">
          <h3 className="text-2xl font-semibold mb-8 text-center">Verified Results from Clutch.co</h3>
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">5.0★</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">100%</div>
              <div className="text-sm text-gray-600">Would Refer</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">$50K+</div>
              <div className="text-sm text-gray-600">Total Project Value</div>
            </div>
            <div>
              <div className="text-3xl font-bold gradient-text mb-2">AI+</div>
              <div className="text-sm text-gray-600">Automation Expertise</div>
            </div>
          </div>
          <div className="text-center mt-6">
            <a 
              href={clutchUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-workshop-purple hover:text-workshop-blue transition-colors font-medium"
            >
              View all reviews on Clutch.co
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Trusted by Businesses Worldwide</h3>
          <p className="text-gray-600 mb-8">
            From HR consulting to real estate automation, our AI solutions deliver measurable results
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">HR Consulting</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Real Estate</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Short-Term Rentals</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Software Companies</span>
              </div>
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <div className="h-12 bg-gray-200 rounded-lg px-8 py-2 flex items-center justify-center">
                <span className="text-gray-500 font-medium">Employment Services</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
