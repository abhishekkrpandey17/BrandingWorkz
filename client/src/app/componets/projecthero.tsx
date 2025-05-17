"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ProjectsHero = () => {
  return (
    <section className="relative w-full h-[70vh] text-white flex items-center justify-center text-center px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/projectsherobg.png"
          alt="Our Projects"
          fill
          priority
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0" />
      </div>

      {/* Animated Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Featured <span className="text-indigo-300">Projects</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Explore our work – web, mobile, design and marketing projects that helped brands grow and scale.
        </p>
      </motion.div>
    </section>
  );
};

export default ProjectsHero;
