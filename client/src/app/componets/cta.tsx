'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const ContactCTA = () => {
  return (
    <section
      id="contact"
      className="bg-indigo-600 py-20 px-6 md:px-20 text-white text-center overflow-hidden"
    >
      <motion.h2
        className="text-3xl md:text-4xl font-bold mb-4 inline-block"
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
          ease: 'easeInOut',
        }}
      >
        Let’s Build Something Amazing
      </motion.h2>

      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
      >
        Need a website, app, or help with branding? Talk to our experts today.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <Link
          href="#quote"
          className="bg-black text-white font-semibold px-6 py-3 rounded-xl hover:bg-gray-500 hover:scale-105 transition-all inline-block"
        >
          Get a Free Quote
        </Link>
      </motion.div>
    </section>
  );
};

export default ContactCTA;
