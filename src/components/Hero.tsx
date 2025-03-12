
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 pt-20">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Break free <span className="text-[#FFD700]">&</span><br />
              train your <span className="text-[#FFD700]">way</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-600">
              Your portable gym that adapts to<br />your lifestyle.
            </p>
            
            <Button className="bg-[#FFD700] text-black hover:bg-[#FFD700]/90 px-8 py-6 text-lg font-medium">
              LEARN MORE
            </Button>

            <div className="mt-12 relative rounded-xl overflow-hidden">
              <img
                src="public/lovable-uploads/b5d38f42-9962-4fa8-bd6f-a268eb8476ca.png"
                alt="Fitness equipment in use"
                className="w-full h-[300px] object-cover rounded-xl"
              />
              <div className="absolute bottom-4 right-4 bg-[#FFD700] px-4 py-2 rounded-lg">
                <p className="text-black font-medium">Coming Spring 2025</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
