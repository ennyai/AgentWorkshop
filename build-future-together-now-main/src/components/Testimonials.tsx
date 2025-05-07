
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, Global Finance Corp",
      company: "Global Finance Corp",
      image: "/placeholder.svg",
      quote: "The AI Agents Workshop was transformative for our business. Within three weeks of implementation, our customer service team's efficiency increased by 35%.",
    },
    {
      name: "Michael Chen",
      position: "VP of Innovation, TechSolutions Inc",
      company: "TechSolutions Inc",
      image: "/placeholder.svg",
      quote: "Unlike other AI workshops that focus on theory, this one delivered tangible results. We built a functional document processing agent during the workshop that we now use daily.",
    },
    {
      name: "Amanda Rodriguez",
      position: "Director of Operations, Logistics International",
      company: "Logistics International",
      image: "/placeholder.svg",
      quote: "The ROI from implementing what we learned has been remarkable. Our AI agent now handles 60% of routine data analysis tasks, freeing our analysts to focus on strategic projects.",
    },
    {
      name: "Robert Kim",
      position: "Chief Data Officer, Healthcare Partners",
      company: "Healthcare Partners",
      image: "/placeholder.svg",
      quote: "The workshop's focus on compliance and security was critical for our healthcare environment. We were able to implement AI agents that respect HIPAA regulations without compromise.",
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Hear from executives and technical leaders
            who have implemented what they learned in our workshop.
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
                    </div>
                  </div>
                  <p className="italic text-gray-700">{testimonial.quote}</p>
                </div>
                <div className="h-1 bg-gradient-to-r from-workshop-blue via-workshop-purple to-workshop-teal"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Trusted by Leading Companies</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Company logo" className="h-12" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Company logo" className="h-12" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Company logo" className="h-12" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Company logo" className="h-12" />
            </div>
            <div className="grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Company logo" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
