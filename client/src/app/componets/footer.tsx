"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <motion.footer
      className="bg-[#1E1E2F] text-white px-6 md:px-20 pt-16 pb-10"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Branding */}
        <motion.div
          custom={0}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.1, duration: 0.6, type: "spring" }}
        >
          <h2 className="text-2xl font-bold text-white mb-2">
            <span className="text-[#4F46E5]">Branding</span>Workz
          </h2>
          <p className="text-sm text-gray-400">
            Elevating brands with design, development, marketing and strategy.
          </p>

          {/* Social Media */}
          <div className="flex gap-4 mt-4">
            {[ 
              { icon: <FaFacebookF />, href: "https://facebook.com" },
              { icon: <FaInstagram />, href: "https://instagram.com" },
              { icon: <FaTwitter />, href: "https://twitter.com" },
              { icon: <FaLinkedinIn />, href: "https://linkedin.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-[#2E2E3E] rounded-full hover:bg-[#4F46E5] transition"
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <motion.div
          custom={1}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
        >
          <h4 className="text-lg font-semibold mb-2 text-white">Explore</h4>
          <ul className="space-y-1 text-sm text-gray-300">
            {["Home", "Services", "Projects", "About", "Contact"].map((item, i) => (
              <motion.li
                key={i}
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ type: "tween", duration: 0.2 }}
              >
                <Link href={`#${item.toLowerCase()}`}>{item}</Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          custom={2}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
        >
          <h4 className="text-lg font-semibold mb-2 text-white">Contact</h4>
          <p className="text-sm text-gray-300">
            Kolkata, India<br />
            +91 98765 43210<br />
            hello@brandingworkz.in
          </p>
        </motion.div>

        {/* Newsletter */}
        <motion.div
          custom={3}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
        >
          <h4 className="text-lg font-semibold mb-3 text-white">Stay Updated</h4>
          <p className="text-sm text-gray-400 mb-3">
            Get news, updates and special offers straight to your inbox.
          </p>
          <form className="flex items-center">
            <motion.input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md bg-white text-gray-800 text-sm outline-none w-full"
              whileFocus={{ scale: 1.02 }}
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-[#4F46E5] text-white px-4 py-1.5 rounded-r-md hover:bg-indigo-700 transition"
            >
              Subscribe
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <motion.div
        className="text-center text-xs text-gray-500 mt-10 border-t border-gray-700 pt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        &copy; {new Date().getFullYear()} BrandingWorkz Powered by CODEMAP. All rights reserved.
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
