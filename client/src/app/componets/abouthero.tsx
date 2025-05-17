"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const AboutHero = () => {
  return (
    <section className="relative w-full h-[70vh] text-white flex items-center justify-center text-center px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/aboutherobg.png" 
          alt="About Hero Background"
          fill
          className="object-cover w-full h-full"
          priority
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 " />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          About <span className="text-indigo-300">BrandingWorkz</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200">
          We are not just a digital agency — we&apos;re your growth partners. Discover who we are, what drives us, and how we help brands succeed.
        </p>
      </motion.div>
    </section>
  );
};

export default AboutHero;
