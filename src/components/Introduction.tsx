
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown, ChevronUp } from "lucide-react";

const Introduction = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const features = [
    { id: 1, text: "Minimalist, Premium Design" },
    { id: 2, text: "Instant, Tool-Free Setup" },
    { id: 3, text: "Lifetime Investment, No Monthly Fees" },
    { id: 4, text: "Professional Grade Workouts" },
  ];

  return (
    <section className="section-container bg-white">
      <div className="fit-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-6">
            Introducing <span className="text-brand-yellow">PowerTower</span>: The Centerpiece of Your Premium Home Gym
          </h2>
          
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Crowded gyms and endless subscriptions no longer serve the high-performing urban minimalist. 
            The <span className="font-semibold">PowerTower</span> brings professional-quality workouts into your space without compromise.
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
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
          
          <div className="mt-12">
            <motion.img 
              src="https://images.unsplash.com/photo-1629753853620-7fe7073166a9?q=80&w=2070&auto=format&fit=crop"
              alt="PowerTower Home Gym"
              className="rounded-lg object-cover mx-auto max-h-[500px] shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
