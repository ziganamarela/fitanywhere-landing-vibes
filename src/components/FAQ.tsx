
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    id: "q1",
    question: "Is there any drilling required to install PowerTower?",
    answer: "No – setup takes less than two minutes, with no tools required. PowerTower uses an innovative tension-based system to create a secure workout station without damaging your walls or ceiling.",
  },
  {
    id: "q2",
    question: "Can I box effectively with BoxFun at home?",
    answer: "Absolutely – it delivers professional-grade resistance. The BoxFun attachment is designed by professional trainers to provide authentic boxing workouts with adjustable resistance levels to match your skill and strength.",
  },
  {
    id: "q3",
    question: "How quickly will orders ship?",
    answer: "24-48 hours for Amsterdam & Utrecht. Orders to other areas in the Netherlands typically ship within 3-5 business days, with international shipping options available.",
  },
  {
    id: "q4",
    question: "Are Resistance Bands suitable for all levels?",
    answer: "Yes, designed for everyone. Our premium resistance bands come in multiple resistance levels, allowing beginners to start with lighter tension while providing enough challenge for advanced users.",
  },
];

const FAQ = () => {
  return (
    <section className="section-container bg-white">
      <div className="fit-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="heading-lg mb-8 text-center">Frequently Asked Questions</h2>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <AccordionItem value={faq.id} className="border-b border-brand-yellow/20">
                  <AccordionTrigger className="text-left py-4 font-medium hover:text-brand-yellow transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="py-4 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
