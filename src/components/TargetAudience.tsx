
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { User, Briefcase, Activity } from "lucide-react";

const audienceTypes = [
  {
    id: 1,
    icon: Briefcase,
    title: "High-Earning Professionals",
    description: "For the executives and professionals who value efficiency and premium experiences. FitAnywhere fits your schedule and meets your standards for quality and design.",
  },
  {
    id: 2,
    icon: User,
    title: "Busy Urbanites",
    description: "Living in compact urban spaces doesn't mean compromising on fitness. FitAnywhere's minimal footprint delivers maximum results in apartments and small homes.",
  },
  {
    id: 3,
    icon: Activity,
    title: "Fitness Enthusiasts & Athletes",
    description: "Whether maintaining peak performance or pushing your limits, FitAnywhere's professional-grade equipment brings gym-quality workouts into your personal space.",
  },
];

const TargetAudience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  return (
    <section className="section-container bg-secondary/40">
      <div className="fit-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-12">Who Is This For?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {audienceTypes.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden"
              >
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setExpandedId(expandedId === item.id ? null : item.id)}
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-4">
                      <item.icon className="w-8 h-8 text-brand-yellow" />
                    </div>
                    <h3 className="font-bold mb-2">{item.title}</h3>
                  </div>
                  
                  <AnimatePresence>
                    {expandedId === item.id && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 text-left"
                      >
                        <p>{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  <div className="mt-4 text-brand-yellow text-sm">
                    {expandedId === item.id ? "Show Less" : "Learn More"}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TargetAudience;
