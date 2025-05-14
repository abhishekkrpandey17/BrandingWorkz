'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">
        {/* Animated Heading */}
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0, scale: 0.95 },
            show: {
              opacity: 1,
              scale: [1, 1.03, 1],
              transition: { duration: 0.8, ease: 'easeInOut', repeat: Infinity, repeatDelay: 4 },
            },
          }}
          className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 inline-block"
        >
          Who We Are
        </motion.h2>

        {/* Paragraph */}
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={fadeIn}
          className="text-lg text-gray-600 leading-relaxed mb-8"
        >
          BrandingWorkz is a creative tech agency specializing in brand building,
          digital marketing, and custom software development. We empower startups,
          businesses, and enterprises with scalable web, app, and ad solutions.
        </motion.p>

        {/* Cards Grid */}
        <div className="mt-6 grid md:grid-cols-2 gap-8 ">
          <motion.div
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={fadeIn}
            className="p-6 rounded-xl border hover:shadow-xl transition-all "
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Our Mission</h3>
            <p className="text-gray-600">
              To deliver smart, effective digital solutions that help businesses grow in a
              connected world.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false }}
            variants={fadeIn}
            className="p-6 rounded-xl border hover:shadow-xl transition-all"
          >
            <h3 className="text-xl font-semibold text-indigo-600 mb-2">Why Choose Us</h3>
            <p className="text-gray-600">
              Expertise across design, development, and marketing. 100+ successful projects. Trusted by Indian startups and global brands.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
