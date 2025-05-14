'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const services = [
  {
    title: "Web Development",
    desc: "Custom websites, eCommerce, and CMS using modern stacks.",
    icon: "/images/webdevelopment.png",
  },
  {
    title: "App Development",
    desc: "React Native and Flutter apps tailored to your business needs.",
    icon: "/images/appdevelopment.png",
  },
  {
    title: "Digital Marketing",
    desc: "SEO, SEM, Social Media & Ad campaigns with ROI-driven strategies.",
    icon: "/images/digitalmarketing.png",
  },
  {
    title: "Brand Strategy",
    desc: "Identity design, tone, voice and storytelling for your brand.",
    icon: "/images/strategy.png",
  },
  {
    title: "Custom Software",
    desc: "Internal tools, ERPs, CRMs, dashboards, and automation systems.",
    icon: "/images/customsoftware.png",
  },
  {
    title: "Consulting & Strategy",
    desc: "Get expert guidance to scale or modernize your business digitally.",
    icon: "/images/cunsulting.svg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

const Services = () => {
  return (
    <section id="services" className="bg-[#F9FAFB] py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            show: {
              opacity: 1,
              scale: [1, 1.02, 1],
              transition: { duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 },
            },
          }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 inline-block"
        >
          Our Services
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-lg text-gray-600 mb-12 max-w-3xl mx-auto"
        >
          We offer a full suite of digital services to help you build, grow, and optimize your brand presence.
        </motion.p>

        {/* Service Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border hover:shadow-2xl hover:bg-blue-50 hover:shadow-blue-200 transition-all hover:border-1 hover:border-blue-200 duration-300 transform hover:rotate-[-2deg] hover:-translate-y-2"
              initial="hidden"
              whileInView="show"
              viewport={{ once: false }}
              custom={index}
              variants={fadeUp}
              whileHover={{ scale: 1.07 }}
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={service.icon}
                  alt={`${service.title} icon`}
                  width={100}
                  height={100}
                  className="w-35 h-35 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
