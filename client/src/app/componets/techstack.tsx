"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const stack = [
  { name: "React", icon: "/images/react.png" },
  { name: "Next.js", icon: "/images/nextjs.png" },
  { name: "MongoDB", icon: "/images/mongodb.png" },
  { name: "Tailwind CSS", icon: "/images/tailwind.png" },
  { name: "Node.js", icon: "/images/node.png" },
  { name: "SEO Tools", icon: "/images/seo.png" },
];

const TechStack = () => {
  return (
    <section id="techstack" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Our Technology Stack
        </h2>
        <p className="text-gray-600 mb-10 max-w-xl mx-auto">
          We use cutting-edge frameworks and tools to build scalable, high-performing solutions.
        </p>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {stack.map((tech, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              <Image
                src={tech.icon}
                alt={tech.name}
                width={50}
                height={50}
                className="object-contain mb-2"
              />
              <p className="text-sm text-gray-700">{tech.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
