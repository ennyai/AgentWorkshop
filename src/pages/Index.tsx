import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RegistrationForm from "@/components/RegistrationForm";
import WorkshopOverview from "@/components/WorkshopOverview";
import BuildSection from "@/components/BuildSection";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WorkshopOverview />
      <RegistrationForm />
      <BuildSection />
      <Timeline />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
