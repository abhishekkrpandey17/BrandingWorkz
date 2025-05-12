"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "What industries do you serve?",
    answer: "We work with startups, SMEs, and enterprises across healthcare, education, retail, real estate, tech, and more.",
  },
  {
    question: "How long does a typical project take?",
    answer: "It depends on the scope, but most websites are delivered within 2-4 weeks. Custom software can take 1-3 months.",
  },
  {
    question: "Do you offer post-launch support?",
    answer: "Yes! We offer 1–6 months of complimentary support and paid maintenance plans afterward.",
  },
  {
    question: "Can you help with marketing as well?",
    answer: "Absolutely. We offer digital marketing services like SEO, social media, Google Ads, and content strategy.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-20" id="faq">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-xl p-4 transition-all"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {item.question}
                </h3>
                <span className="text-indigo-600">
                  {openIndex === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </span>
              </button>

              {openIndex === index && (
                <p className="mt-4 text-gray-600">{item.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
