'use client';

import { motion } from 'framer-motion';

const stats = [
  { label: 'Projects Completed', value: '200+' },
  { label: 'Happy Clients', value: '150+' },
  { label: 'Industries Served', value: '25+' },
  { label: 'Team Members', value: '20+' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.2,
      ease: 'easeOut',
    },
  }),
};

const Stats = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#1E1E2F] inline-block"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{
            opacity: 1,
            scale: [1, 1.03, 1],
          }}
          viewport={{ once: false }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatDelay: 4,
            ease: 'easeInOut',
          }}
        >
          Trusted Stats
        </motion.h2>
        <p className="text-gray-500 mt-2 text-lg">Results that reflect our impact</p>
      </motion.div>

      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="group relative rounded-xl border p-6 hover:shadow-xl transition-all hover:scale-[1.04]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={fadeUp}
            custom={i}
          >
            {/* Optional: continuous animated dot */}
            <motion.div
              className="w-4 h-4 bg-[#4F46E5] rounded-full mb-4 mx-auto"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.p className="text-3xl font-bold text-[#4F46E5] group-hover:text-[#1E1E2F] transition">
              {stat.value}
            </motion.p>
            <p className="text-[#333] font-medium mt-1">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
