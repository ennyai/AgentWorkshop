
import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WorkshopOverview from "@/components/WorkshopOverview";
import BuildSection from "@/components/BuildSection";
import BusinessBenefits from "@/components/BusinessBenefits";
import Timeline from "@/components/Timeline";
import Testimonials from "@/components/Testimonials";
import RegistrationForm from "@/components/RegistrationForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <WorkshopOverview />
      <BuildSection />
      <BusinessBenefits />
      <Timeline />
      <Testimonials />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Index;
