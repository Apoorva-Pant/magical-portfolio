'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'framer-motion'; // use the framer-motion one

const experiences = [
  {
    role: 'Intern',
    company: 'Planning Lush Pvt Ltd',
    duration: 'Jan 2024 – Jun 2024',
    description: 'An event management company focused on tech-enabled planning solutions.',
    work: [
      'Built event landing pages using HTML, CSS, JS',
      'Improved mobile UI and integrated RSVP forms',
      'Optimized website speed and SEO using Lighthouse audits',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    role: 'Freelance Developer',
    company: 'MarketingMinds Digital',
    duration: 'Jun 2024 – Present',
    description: 'A digital marketing agency creating custom web solutions for local businesses.',
    work: [
      'Built websites for cafes, added Instagram embeds and WhatsApp chat',
      'Worked in a cross-functional team under supervision',
      'Implemented responsive designs, sliders, reservation forms',
    ],
    tech: ['Tailwind CSS', 'Next.js', 'Framer Motion', 'JavaScript'],
  },
];

const fadeInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

export default function Experience() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start((i) => fadeInRight.visible(i));
    } else {
      controls.start('hidden');
    }
  }, [inView, controls]);

  return (
    <motion.section id="experience"
      ref={ref}
      style={{ backgroundColor: '#ede9fe' }} // fixed light purple bg
      className="relative w-full min-h-screen py-20 px-4 text-black"
    >
      <h2 className="text-4xl font-bold text-center mb-16 sticky top-4 z-30 bg-white/30 backdrop-blur-md w-max mx-auto px-6 py-2 rounded-xl">
        Experience
      </h2>

      <div className="flex flex-col gap-12 max-w-5xl mx-auto">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={controls}
            variants={fadeInRight}
            whileHover={{ scale: 1.02 }}
            className="bg-white shadow-2xl rounded-xl p-6 sm:p-8 space-y-4 transition-transform duration-300"
          >
            <div className="text-xl sm:text-2xl font-semibold">
              {exp.role} – <span className="text-purple-700">{exp.company}</span>
            </div>
            <div className="text-sm sm:text-base text-gray-600 mb-2">{exp.duration}</div>
            <p className="text-sm sm:text-base italic text-gray-800">{exp.description}</p>
            <ul className="list-disc pl-6 text-sm sm:text-base text-gray-800 space-y-1">
              {exp.work.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 pt-2">
              {exp.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs sm:text-sm px-2 py-1 bg-purple-100 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
