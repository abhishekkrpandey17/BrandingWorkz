"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
      <Image
  src="/images/herobg.png"
  alt="Hero Background"
  fill
  className="object-cover w-full h-full"
  priority // ✅ Add this line
/>

        {/* Dark overlay */}
        <div className="absolute inset-0  bg-opacity-60" />
      </div>

      {/* Text Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl leading-tight mt-60">
          Build Brands That <span className="text-indigo-400">Lead</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-200 max-w-2xl">
          We craft impactful digital strategies, custom apps, and web experiences to grow your business.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            href="#quote"
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:bg-indigo-700 transition"
          >
            Let’s Talk
          </Link>
          <Link
            href="#projects"
            className="px-6 py-3 border border-white text-white rounded-xl font-medium hover:bg-white hover:text-black transition"
          >
            View Portfolio
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
