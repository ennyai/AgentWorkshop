
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const BuildSection = () => {
  const projects = [
    {
      title: "Customer Service AI",
      description: "Build an intelligent agent that handles customer inquiries with natural language processing, retrieves relevant information, and performs actions on behalf of customer service teams.",
      icon: (
        <svg className="w-12 h-12 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      ),
    },
    {
      title: "Data Analysis Assistant",
      description: "Create an AI agent that processes business data, generates insights, creates visualizations, and delivers actionable recommendations in natural language.",
      icon: (
        <svg className="w-12 h-12 text-workshop-teal" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "Document Processing Agent",
      description: "Develop an agent that extracts, organizes, and summarizes information from business documents, contracts, and reports with high accuracy.",
      icon: (
        <svg className="w-12 h-12 text-workshop-blue" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      title: "Process Automation Agent",
      description: "Build an agent that automates routine business processes across multiple systems, making decisions based on business rules and learning from user feedback.",
      icon: (
        <svg className="w-12 h-12 text-workshop-purple" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
  ];

  return (
    <section className="section-padding bg-workshop-lightGray">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What You'll <span className="gradient-text">Build</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            During our workshop, you'll develop functional AI agents tailored to enterprise needs.
            Here are some examples of what you'll create and take back to your organization:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 card-gradient h-full">
              <CardHeader>
                <div className="mb-4">{project.icon}</div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{project.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 italic mb-6">
            "All projects are built with production-ready code and integrate with common enterprise systems."
          </p>
          <div className="flex justify-center gap-8 flex-wrap">
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Technology Partner" className="h-12" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Technology Partner" className="h-12" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Technology Partner" className="h-12" />
            </div>
            <div className="grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
              <img src="/placeholder.svg" alt="Technology Partner" className="h-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSection;
