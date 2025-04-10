
import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import Terminal from "@/components/Terminal";
import { toast } from "@/hooks/use-toast";

const Index = () => {
  useEffect(() => {
    // Welcome toast when the page loads
    toast({
      title: "مرحبًا بك في سيلا",
      description: "شكرًا لزيارة موقعنا",
    });
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <main>
        <HeroSection />
        <Terminal />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
