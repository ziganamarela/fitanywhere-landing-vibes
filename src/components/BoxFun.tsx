
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const BoxFun = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    { id: 1, text: "Portable & Powerful" },
    { id: 2, text: "Pro-Level Boxing Workouts" },
    { id: 3, text: "Aesthetic & Functional" },
    { id: 4, text: "Instant Action" },
  ];

  return (
    <section className="section-container bg-secondary/40">
      <div className="fit-container">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2 order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1517438476312-10d79c077509?q=80&w=2070&auto=format&fit=crop"
              alt="BoxFun Attachment"
              className="rounded-lg object-cover w-full max-h-[500px] shadow-lg"
            />
          </motion.div>
          
          <motion.div 
            className="w-full md:w-1/2 order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="heading-lg mb-6">
              Experience <span className="text-brand-yellow">BoxFun</span>: The Ultimate Companion to PowerTower
            </h2>
            
            <p className="text-lg mb-8">
              Unlock pro-level boxing workouts with zero installation. The BoxFun attachment transforms your PowerTower into a complete boxing studio, bringing elite training to your home in seconds.
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
                  className="bg-white/80 backdrop-blur-sm rounded-lg p-6 overflow-hidden"
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
                        <p className="text-hover-effect">{feature.text}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BoxFun;
