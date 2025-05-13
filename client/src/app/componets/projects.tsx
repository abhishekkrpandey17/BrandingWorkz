'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Beauty Salon Branding",
    category: "Brand Identity",
    image: "/projects/project1.jpg",
  },
  {
    title: "Startup Landing Page",
    category: "Web Design",
    image: "/projects/project2.jpg",
  },
  {
    title: "CRM Dashboard UI",
    category: "Custom Software",
    image: "/projects/project3.jpg",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.15 },
  }),
};

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1E1E2F] inline-block"
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
          Featured Projects
        </motion.h2>
        <p className="text-gray-500 mt-2 text-lg">Showcasing what we&apos;ve built</p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden shadow group border hover:shadow-xl transition-all"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            custom={i}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative w-full h-60 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6 bg-white">
              <h3 className="text-xl font-semibold text-indigo-600">{project.title}</h3>
              <p className="text-gray-600 text-sm mt-1">{project.category}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
