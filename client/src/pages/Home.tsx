import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Metrics from "@/components/Metrics";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ReferralModal from "@/components/ReferralModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(true);
  };
  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onOpenModal={openModal} />
      <Hero onOpenFreeModal={openModal} onOpenPremiumModal={openModal} />
      <HowItWorks />
      <Metrics />
      <Testimonials />
      <About />
      <FAQ />
      <Footer />
      
      <ReferralModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </div>
  );
}
