"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Target,
  PenTool,
  Code,
  Rocket,
  RefreshCw,
} from "lucide-react";

const steps = [
  {
    title: "Discover",
    desc: "Understand your business, goals & challenges.",
    icon: <Lightbulb size={32} />,
  },
  {
    title: "Strategize",
    desc: "Craft a digital roadmap tailored to you.",
    icon: <Target size={32} />,
  },
  {
    title: "Design",
    desc: "Create intuitive UI/UX & brand visuals.",
    icon: <PenTool size={32} />,
  },
  {
    title: "Develop",
    desc: "Build fast, scalable apps & websites.",
    icon: <Code size={32} />,
  },
  {
    title: "Launch",
    desc: "Deploy & test for performance.",
    icon: <Rocket size={32} />,
  },
  {
    title: "Support",
    desc: "Maintain & evolve your digital assets.",
    icon: <RefreshCw size={32} />,
  },
];

// Card animation
const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const Process = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20" id="process">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 inline-block"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{
            opacity: 1,
            scale: [1, 1.02, 1],
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        >
          How We Work
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Our process is built for clarity, creativity, and results.
        </motion.p>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md text-left border hover:shadow-2xl hover:bg-blue-50 hover:shadow-blue-200 transition-all hover:border-1 hover:border-blue-200 duration-200 transform hover:rotate-[-3deg] hover:-translate-y-6 "
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
              variants={cardVariant}
              custom={index}
            >
              <motion.div
                className="mb-4 text-indigo-600"
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                {step.icon}
              </motion.div>
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
