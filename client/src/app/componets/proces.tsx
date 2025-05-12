"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, PenTool, Code, Rocket, RefreshCw } from "lucide-react";

const steps = [
  { title: "Discover", desc: "Understand your business, goals & challenges.", icon: <Lightbulb size={32} /> },
  { title: "Strategize", desc: "Craft a digital roadmap tailored to you.", icon: <Target size={32} /> },
  { title: "Design", desc: "Create intuitive UI/UX & brand visuals.", icon: <PenTool size={32} /> },
  { title: "Develop", desc: "Build fast, scalable apps & websites.", icon: <Code size={32} /> },
  { title: "Launch", desc: "Deploy & test for performance.", icon: <Rocket size={32} /> },
  { title: "Support", desc: "Maintain & evolve your digital assets.", icon: <RefreshCw size={32} /> },
];

const Process = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20" id="process">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How We Work</h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our process is built for clarity, creativity, and results.
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md text-left hover:shadow-lg transition"
            >
              <div className="mb-4 text-indigo-600">{step.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
