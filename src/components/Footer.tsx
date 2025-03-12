
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Mail } from "lucide-react";

const Footer = () => {
  const [showScrollButton, setShowScrollButton] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 500);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="text-xl font-bold text-brand-yellow">
              FitAnywhere
            </a>
            <div className="mt-2 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <a href="mailto:be@fitanywhere.today" className="hover:text-brand-yellow transition-colors">
                be@fitanywhere.today
              </a>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} FitAnywhere. All rights reserved.
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {showScrollButton && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-brand-yellow rounded-full shadow-lg hover:shadow-xl transform transition-transform hover:scale-110 focus:outline-none"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-black" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
