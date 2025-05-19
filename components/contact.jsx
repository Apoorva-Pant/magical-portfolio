'use client';

import { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { ClipboardDocumentCheckIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

const contactDetails = [
  {
    label: 'Email',
    value: 'apoorvavijaypant13@gmail.com',
    icon: <EnvelopeIcon className="w-5 h-5 inline-block mr-2" />,
  },
  {
    label: 'Phone',
    value: '+91-9571806365',
    icon: <PhoneIcon className="w-5 h-5 inline-block mr-2" />,
  },
];

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    color: 'bg-gray-800 text-white',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourprofile',
    color: 'bg-blue-600 text-white',
  },
  {
    label: 'Twitter',
    href: 'https://twitter.com/yourhandle',
    color: 'bg-sky-400 text-white',
  },
];

export default function Contact() {
  const [typedText, setTypedText] = useState('');
  const [copied, setCopied] = useState(null);
  const fullText = 'Contact Me';

  // Typing animation that stops after full render
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Clipboard copy handler
  function handleCopy(value, type) {
    if (!navigator.clipboard) return;
    navigator.clipboard.writeText(value);
    setCopied(type);
    setTimeout(() => setCopied(null), 1500);
  }

  // Scroll-based animation
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: '-10% 0px' });

  return (
    <section
      ref={ref}
      className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6 py-20 transition-colors duration-700"
    >
      <AnimatePresence mode="wait">
        {inView && (
          <>
            {/* Heading */}
            <motion.h1
              key="contact-heading"
              className="text-6xl sm:text-8xl font-extrabold mb-16 select-none"
              aria-label="Contact Me"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6 }}
            >
              {typedText}
              {typedText !== fullText && (
                <motion.span
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
                  className="inline-block w-6"
                >
                  |
                </motion.span>
              )}
            </motion.h1>

            {/* Contact Buttons */}
            <motion.div
              key="contact-details"
              className="flex flex-col sm:flex-row gap-8 mb-16 max-w-md w-full justify-center"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {contactDetails.map(({ label, value, icon }) => (
                <button
                  key={label}
                  onClick={() => handleCopy(value, label.toLowerCase())}
                  className="flex items-center justify-center space-x-2 bg-purple-500/20 hover:bg-purple-500/30 text-white rounded-full px-6 py-3 text-lg sm:text-xl font-semibold cursor-pointer transition-shadow shadow-md relative"
                  aria-label={`Copy ${label}`}
                  type="button"
                >
                  {icon}
                  <span>{value}</span>
                  <AnimatePresence>
                    {copied === label.toLowerCase() && (
                      <motion.span
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute -top-8 right-4 text-sm text-green-400 font-semibold select-none"
                      >
                        Copied!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>
              ))}
            </motion.div>

            {/* Social Pills */}
            <motion.div
              key="contact-socials"
              className="flex flex-wrap justify-center gap-6 max-w-md w-full"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {socials.map(({ label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${color} rounded-full px-5 py-2 font-semibold text-center shadow-md hover:scale-105 transform transition-transform duration-300 flex items-center justify-center gap-2`}
                  aria-label={label}
                >
                  {label}
                </a>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
