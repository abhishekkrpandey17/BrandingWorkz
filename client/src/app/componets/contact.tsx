"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
};

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
    }
  };

  return (
    <section id="quote" className="bg-white py-20 px-6 md:px-20">
      <div className="max-w-3xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: [1, 1.02, 1] }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut",
          }}
        >
          Get a Free Quote
        </motion.h2>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
        >
          Fill out the form and our team will get back to you within 24 hours.
        </motion.p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="text-black text-left space-y-8">
          {/* Name Input */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            custom={0}
          >
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl bg-gray-100 transform duration-500 hover:scale-107"
            />
          </motion.div>

          {/* Email Input */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            custom={1}
          >
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl bg-gray-50 transform duration-500 hover:scale-107"
            />
          </motion.div>

          {/* Message Textarea */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            custom={2}
          >
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border rounded-xl bg-gray-50 transform duration-500 hover:scale-107"
            />
          </motion.div>

          {/* Submit Button */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeInUp}
            custom={3}
          >
            <button
              type="submit"
              disabled={status === "sending"}
              className="px-4 py-2 border-2 border-indigo-600 text-indigo-600 rounded-lg font-medium hover:bg-indigo-600 hover:text-white transition shadow-lg hover:shadow-indigo-400 duration-900 transform hover:rotate-[360deg]"
            >
              {status === "sending" ? "Sending..." : "Send Message"}
            </button>
          </motion.div>

          {/* Status Messages */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={
              status === "sent" || status === "error" ? { opacity: 1 } : { opacity: 0 }
            }
            transition={{ duration: 0.5 }}
          >
            {status === "sent" && (
              <p className="text-green-600 mt-4">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-red-600 mt-4">❌ Something went wrong. Try again.</p>
            )}
          </motion.div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
