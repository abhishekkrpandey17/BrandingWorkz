"use client";

import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";

const socialLinks = [
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={36} />,
    href: "https://wa.me/919999999999",
    bg: "bg-green-500",
  },
  {
    name: "Email",
    icon: <MdEmail size={36} />,
    href: "mailto:yourmail@example.com",
    bg: "bg-red-500",
  },
  {
    name: "Instagram",
    icon: <FaInstagram size={36} />,
    href: "https://instagram.com/yourprofile",
    bg: "bg-pink-500",
  },
  {
    name: "Facebook",
    icon: <FaFacebookF size={36} />,
    href: "https://facebook.com/yourpage",
    bg: "bg-blue-700",
  },
  {
    name: "Twitter",
    icon: <FaTwitter size={36} />,
    href: "https://twitter.com/yourprofile",
    bg: "bg-blue-400",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn size={36} />,
    href: "https://linkedin.com/in/yourprofile",
    bg: "bg-blue-600",
  },
];

export default function SocialLinksPage() {
  return (
    <section
      className="relative min-h-screen py-20 px-6 md:px-20 text-center bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/socialbg.jpg')`, 
      }}
    >
      {/* Overlay for contrast */}
      <div className="absolute inset-0 z-0" />

      <div className="relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-14 drop-shadow-xl">
          Connect With Us
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {socialLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-6 ${link.bg} text-white px-8 py-6 rounded-2xl shadow-2xl hover:scale-105 transition-transform`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: false }}
            >
              <div>{link.icon}</div>
              <div className="font-semibold text-2xl">{link.name}</div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
