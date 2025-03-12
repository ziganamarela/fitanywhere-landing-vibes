
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Introduction from "@/components/Introduction";
import BoxFun from "@/components/BoxFun";
import ResistanceBands from "@/components/ResistanceBands";
import BundleOffer from "@/components/BundleOffer";
import Testimonials from "@/components/Testimonials";
import TargetAudience from "@/components/TargetAudience";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  // Smooth scroll for internal links
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="overflow-x-hidden"
    >
      <Navigation />
      <Hero />
      <Introduction />
      <BoxFun />
      <ResistanceBands />
      <BundleOffer />
      <Testimonials />
      <TargetAudience />
      <FAQ />
      <FinalCTA />
      <Footer />
    </motion.div>
  );
};

export default Index;
