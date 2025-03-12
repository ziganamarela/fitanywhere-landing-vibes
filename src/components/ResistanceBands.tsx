
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const ResistanceBands = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    { id: 1, text: "Enhanced Strength & Mobility" },
    { id: 2, text: "Lightweight & Ultra-Portable" },
    { id: 3, text: "Suitable for All Fitness Levels" },
  ];

  return (
    <section className="section-container bg-white">
      <div className="fit-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6">
              <span className="text-brand-yellow">Resistance Bands</span>: The Perfect Finishing Touch
            </h2>
            
            <p className="text-lg mb-8">
              Complete your fitness arsenal with premium resistance bands that add unparalleled versatility to your workouts. These professional-grade bands integrate seamlessly with PowerTower, or can be used independently for a full-body workout anywhere.
            </p>
            
            <div className="mb-8">
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="learn-more-toggle"
              >
                {isExpanded ? "Show Less" : "Learn More"}
                {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
            </div>
            
            <AnimatePresence>
              {isExpanded && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="bg-secondary/50 backdrop-blur-sm rounded-lg p-6 overflow-hidden"
                >
                  <div className="grid grid-cols-1 gap-4">
                    {features.map((feature) => (
                      <motion.div 
                        key={feature.id}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: feature.id * 0.1 }}
                        className="detail-item"
                      >
                        <Check className="detail-item-icon" />
                        <p>{feature.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop"
              alt="Resistance Bands"
              className="rounded-lg object-cover w-full max-h-[500px] shadow-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResistanceBands;
