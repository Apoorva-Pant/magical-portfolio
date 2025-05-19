'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: 'Movie Finder App',
    description: 'A sleek React-based web app that allows users to search and explore movies using an OMDB movie database API. Features real-time search suggestions, detailed movie info, poster previews, and responsive design.',
    image: '',
    tech: ['React', 'API Integration', 'CSS'],
    github: 'https://github.com/Apoorva-Pant/Movie-Finder-App',
    live: 'https://apoorva-pant.github.io/Movie-Finder-App/',
  },
  {
    title: 'Marugarh Website',
    description: 'A full-stack e-commerce site with cart and payment features.',
    image: '',
    tech: ['React', 'Node.js', 'Stripe'],
    github: 'https://github.com/Apoorva-Pant/marugarh-website',
    live: 'https://apoorva-pant.github.io/marugarh-website/',
  },
  {
    title: 'Weather App',
    description: 'A minimalist weather forecasting app that fetches and displays real-time weather data for any city using a third-party weather API. Includes temperature, condition icons, and 5-day forecasts.',
    image: '',
    tech: ['React', 'javaScript', 'OpenWeatherMap API', 'CSS'],
    github: 'https://github.com/Apoorva-Pant/weather-app',
    live: 'https://mausamkijaankari.netlify.app/',
  },
  {
    title: 'QR Menu App',
    description: 'A responsive restaurant menu web app where users can browse categorized items with filters. Designed for cafe clients, making it easy to update items and prices dynamically.',
    image: '',
    tech: ['React', 'JavaScript', 'Next.js', 'Css'],
    github: 'https://github.com/Apoorva-Pant/qr-menu-app',
    live: 'https://scannedmenu-app.netlify.app/',
  },
  {
    title: 'My Old Portfolio',
    description: 'A real-time chat app using WebSockets.',
    image: '',
    tech: ['React', 'Socket.io', 'Express'],
    github: 'https://github.com/Apoorva-Pant/Portfolio',
    live: 'https://apoorva-pant.github.io/Portfolio/',
  },
  {
    title: 'My New Portfolio',
    description: 'A real-time chat app using WebSockets.',
    image: '',
    tech: ['React', 'Socket.io', 'Express'],
    github: '#',
    live: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  fast: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.3,
      ease: 'easeOut',
    },
  }),
  slow: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 1.2,
      ease: 'easeInOut',
    },
  }),
};

export default function Projects() {
  const controls = useAnimation();
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { amount: 0.4 });
  const { scrollYProgress } = useScroll();

  const bgColor = useTransform(scrollYProgress, [0.65, 0.7], [
    'rgba(224, 242, 254, 1)', // light blue from Certifications
    'rgba(237, 233, 254, 1)', // light purple
  ]);

  useEffect(() => {
    if (inView) {
      const unsubscribe = scrollYProgress.on('change', (v) => {
        if (v < 0.85) {
          controls.start((i) => cardVariants.slow(i));
        } else {
          controls.start((i) => cardVariants.fast(i));
        }
      });
      return () => unsubscribe();
    } else {
      controls.start('hidden');
    }
  }, [inView, scrollYProgress, controls]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="relative w-full min-h-screen py-20 px-6 text-black transition-colors duration-700"
    >
      <h2 className="text-4xl font-bold text-center mb-12 sticky top-4 z-30 bg-white/30 backdrop-blur-md w-max mx-auto px-6 py-3 rounded-xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto z-10 relative">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="rounded-3xl shadow-2xl bg-white p-6 flex flex-col justify-between items-start space-y-6 cursor-pointer hover:scale-[1.03] transition-transform duration-300"
            initial="hidden"
            animate={controls}
            custom={i}
            whileHover={{ scale: 1.03 }}
          >
            {project.image ? (
              <div className="w-full h-56 relative rounded-xl overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            ) : (
              <div className="w-full h-56 flex items-center justify-center bg-purple-100 text-purple-500 text-lg font-semibold rounded-xl">
                {project.title}
              </div>
            )}

            <h3 className="text-2xl font-extrabold">{project.title}</h3>
            <p className="text-base text-gray-700">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="text-xs px-3 py-1 bg-purple-100 rounded-full font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-5 py-2 rounded-2xl bg-black text-white font-semibold hover:bg-gray-800 transition"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm px-5 py-2 rounded-2xl bg-purple-200 text-black font-semibold hover:bg-purple-300 transition"
              >
                Live Site
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
