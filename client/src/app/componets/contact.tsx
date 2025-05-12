"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = "your_service_id";
const TEMPLATE_ID = "your_template_id";
const PUBLIC_KEY = "your_public_key";

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
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Get a Free Quote
        </h2>
        <p className="text-gray-600 mb-10">
          Fill out the form and our team will get back to you within 24 hours.
        </p>

        <form onSubmit={handleSubmit} className="text-black space-y-10 text-left gap-5">
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
          />
          <textarea
            name="message"
            rows={5}
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border rounded-xl bg-gray-50"
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-indigo-600 text-white px-6 py-3 rounded-xl hover:bg-indigo-700 transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && <p className="text-green-600 mt-4">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-600 mt-4">Something went wrong. Try again.</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
