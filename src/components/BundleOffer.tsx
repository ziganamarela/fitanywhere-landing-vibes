
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown, ChevronUp, ArrowRight, Tag } from "lucide-react";

const BundleOffer = () => {
  const [showDetails, setShowDetails] = useState(false);
  
  const bundleItems = [
    { id: 1, name: "PowerTower Portable Gym", price: "€1299.99" },
    { id: 2, name: "BoxFun Boxing Cap Attachment", price: "€69.99" },
    { id: 3, name: "Premium Elastic Resistance Set", price: "€69.99" },
    { id: 4, name: "Exclusive Video Tutorial Library", price: "€240/year", isBonus: true },
    { id: 5, name: "Free Shipping within Amsterdam & Utrecht", price: "€30", isBonus: true },
  ];

  return (
    <section className="section-container bg-secondary/70">
      <div className="fit-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="heading-lg mb-8">
            Why the <span className="text-brand-yellow">FitAnywhere Bundle</span> is Your Ultimate Fitness Solution
          </h2>
          
          <div className="bg-white shadow-lg rounded-xl overflow-hidden">
            <div className="p-8">
              <div className="divide-y">
                {bundleItems.map((item) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: item.id * 0.1 }}
                    className={`py-4 flex justify-between items-center ${
                      item.isBonus ? "text-brand-yellow font-medium" : ""
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {item.isBonus ? (
                        <Tag className="w-5 h-5" />
                      ) : (
                        <Check className="w-5 h-5 text-brand-yellow" />
                      )}
                      <span>{item.name}</span>
                    </div>
                    <span>{item.price}</span>
                  </motion.div>
                ))}
              </div>
              
              <button
                onClick={() => setShowDetails(!showDetails)}
                className="mt-6 text-brand-yellow flex items-center gap-1 mx-auto font-medium hover:underline"
              >
                {showDetails ? "Hide Details" : "View Details"}
                {showDetails ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
              </button>
              
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t text-left"
                  >
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-yellow mt-1" />
                        <span>Full access to all exercises in our exclusive mobile app</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-yellow mt-1" />
                        <span>One-year warranty on all equipment with premium customer support</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <ArrowRight className="w-4 h-4 text-brand-yellow mt-1" />
                        <span>Priority shipping and white-glove delivery service</span>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            
            <div className="bg-secondary p-8">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
                <div className="text-left">
                  <div className="text-lg font-medium">Total Retail Value</div>
                  <div className="text-2xl font-bold line-through text-muted-foreground">€1709.97</div>
                </div>
                
                <motion.div 
                  className="text-right"
                  initial={{ scale: 1 }}
                  whileInView={{ scale: [1, 1.05, 1] }}
                  viewport={{ once: false, margin: "-100px" }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                >
                  <div className="text-lg font-medium">Exclusive Bundle Price</div>
                  <div className="text-3xl md:text-4xl font-bold text-brand-yellow">€999</div>
                </motion.div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-brand-yellow/10 rounded-lg p-4 text-center mb-6"
              >
                <span className="font-bold">Save €710.97!</span> Limited time offer.
              </motion.div>
              
              <Button className="cta-button w-full">
                GET THE COMPLETE BUNDLE NOW
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BundleOffer;
