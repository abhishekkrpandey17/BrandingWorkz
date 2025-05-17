"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

// Animation variant
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const founder = {
  role: "Founder & CEO",
  name: "Suryajeet Singh Baghel",
  image: "/team/suryajeet.jpg",
  socials: {
    linkedin: "https://linkedin.com/in/suryajeet",
    twitter: "https://twitter.com/suryajeet",
    instagram: "https://instagram.com/suryajeet",
  },
};

const technicalHead = {
  role: "Technical Head",
  name: "Anil Behera",
  image: "/team/anil.jpg",
  socials: {
    linkedin: "https://linkedin.com/in/anilbehera",
    twitter: "https://twitter.com/anilbehera",
    instagram: "https://instagram.com/anilbehera",
  },
};

const consultants = [
  {
    role: "Technical Consultant",
    name: "Aritra Chakraborty",
    image: "/team/aritra.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/aritrachakraborty",
      twitter: "https://twitter.com/aritra",
      instagram: "https://instagram.com/aritra",
    },
  },
  {
    role: "Execution Consultant",
    name: "Abhishek Kr. Pandey",
    image: "/team/abhishek.jpg",
    socials: {
      linkedin: "https://linkedin.com/in/abhishekkp",
      twitter: "https://twitter.com/abhishekpandey",
      instagram: "https://instagram.com/abhishek",
    },
  },
];

type TeamMember = {
  role: string;
  name: string;
  image: string;
  socials: {
    linkedin: string;
    twitter: string;
    instagram: string;
  };
};

interface CardProps {
  member: TeamMember;
}

const Card = ({ member }: CardProps) => (
  <motion.div
    className="bg-white rotate-[-3deg] rounded-xl shadow-md  overflow-hidden text-center p-6 w-full max-w-sm hover:shadow-2xl hover:bg-blue-50 hover:shadow-blue-200 transition-all hover:border-1 hover:border-blue-200 duration-300 transform hover:rotate-[.5deg] hover:-translate-y-2"
    variants={fadeIn}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false }}
    whileHover={{ scale: 1.03 }}
  >
    <div className="relative w-32 h-32 mx-auto mb-4">
      <Image
        src={member.image}
        alt={member.name}
        fill
        className="object-cover rounded-full border-4 border-indigo-500"
      />
    </div>
    <h3 className="text-xl font-semibold text-gray-800">{member.name}</h3>
    <p className="text-indigo-600 text-sm mb-3">{member.role}</p>
    <div className="flex justify-center gap-4 text-gray-500 text-lg">
      <Link href={member.socials.linkedin} target="_blank" className="hover:text-indigo-600">
        <FaLinkedin />
      </Link>
      <Link href={member.socials.twitter} target="_blank" className="hover:text-indigo-600">
        <FaTwitter />
      </Link>
      <Link href={member.socials.instagram} target="_blank" className="hover:text-indigo-600">
        <FaInstagram />
      </Link>
    </div>
  </motion.div>
);

const TeamPage = () => {
  return (
    <section className="bg-[#F9FAFB] py-20 px-6 md:px-20 min-h-screen text-center">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-gray-800 mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: false }}
        variants={{
          hidden: { opacity: 0, scale: 0.95 },
          show: {
            opacity: 1,
            scale: [1, 1.03, 1],
            transition: { duration: 0.8, ease: "easeInOut", repeat: Infinity, repeatDelay: 4 },
          },
        }}
      >
        Our Core Team
      </motion.h2>

      {/* Founder */}
      <div className="flex justify-center mb-20">
        <Card member={founder} />
      </div>

      {/* Technical Head */}
      <div className="flex justify-center mb-20">
        <Card member={technicalHead} />
      </div>

      {/* Consultants */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 justify-center items-center max-w-4xl mx-auto">
        {consultants.map((member) => (
          <Card key={member.name} member={member} />
        ))}
      </div>
    </section>
  );
};

export default TeamPage;
