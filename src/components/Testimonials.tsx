
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    quote: "PowerTower and BoxFun completely transformed my routine. As someone who values both aesthetics and functionality, this system checks every box while taking up minimal space in my apartment.",
    author: "Jasper",
    location: "Amsterdam",
  },
  {
    id: 2,
    quote: "Finally, fitness equipment designed for minimalists who don't want to compromise on quality. The resistance bands were a perfect addition to my PowerTower workouts.",
    author: "Eva",
    location: "Utrecht",
  },
  {
    id: 3,
    quote: "Resistance bands were the perfect addition to round out my workout routine. I can target every muscle group without ever leaving my home.",
    author: "Lucas",
    location: "Amsterdam",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    let timer: number;
    
    if (autoplay) {
      timer = window.setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [autoplay]);

  const handlePrev = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setAutoplay(false);
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="section-container bg-white">
      <div className="fit-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 md:p-12 bg-secondary/30 rounded-xl">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-yellow/20" />
            
            <div className="min-h-[200px] flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <p className="text-xl md:text-2xl italic mb-6">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  <p className="font-bold">
                    {testimonials[activeIndex].author}, <span className="font-normal">{testimonials[activeIndex].location}</span>
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
            
            <div className="flex justify-center items-center gap-4 mt-8">
              <button 
                onClick={handlePrev}
                className="p-2 rounded-full bg-white shadow-sm hover:bg-secondary transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setAutoplay(false);
                      setActiveIndex(index);
                    }}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeIndex ? "bg-brand-yellow" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button 
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-sm hover:bg-secondary transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
