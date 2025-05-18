"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ServicesHero = () => {
  return (
    <section className="relative w-full h-[70vh] text-white flex items-center justify-center text-center px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/servicesherobg.png" 
          alt="Our Services"
          fill
          priority
          className="object-cover w-full h-full"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br " />
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
        We Build <span className="text-white ">We Solve </span><span className="text-yellow-500">We Scale</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200">
          Discover the solutions we craft to elevate brands — from development and marketing to automation and growth.
        </p>
      </motion.div>
    </section>
  );
};

export default ServicesHero;
