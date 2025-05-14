'use client';

import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1.5 }}
      className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-700 rounded-full shadow-lg hover:shadow-green-600 duration-400 transform hover:-translate-y-3"
    >
      <a
        href="https://wa.me/919876543210" // Replace with your WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className=" text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 text-sm font-semibold transition"
      >
        <FaWhatsapp size={18} />
        WhatsApp
      </a>
    </motion.div>
  );
}
