"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What industries do you serve?",
    answer:
      "We work with startups, SMEs, and enterprises across healthcare, education, retail, real estate, tech, and more.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "It depends on the scope, but most websites are delivered within 2-4 weeks. Custom software can take 1-3 months.",
  },
  {
    question: "Do you offer post-launch support?",
    answer:
      "Yes! We offer 1–6 months of complimentary support and paid maintenance plans afterward.",
  },
  {
    question: "Can you help with marketing as well?",
    answer:
      "Absolutely. We offer digital marketing services like SEO, social media, Google Ads, and content strategy.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20" id="faq">
      <motion.div
        className="max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: [1, 1.02, 1],
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 5,
            ease: "easeInOut",
          }}
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-xl p-4 transform duration-500 hover:scale-107"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <motion.span
                  className="text-indigo-600"
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} />
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.p
                    key="content"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="mt-4 text-gray-600 overflow-hidden"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FAQ;
