'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Certifications', id: 'certifications' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="z-[9999]">
      {/* Floating Name Box (Left) */}
      <div className="fixed z-[9999] top-3 left-3 sm:top-5 sm:left-10 md:left-16 lg:left-24 backdrop-blur-lg bg-white/90 text-black rounded-full px-0.5 sm:px-1 py-0.5 sm:py-1 shadow-md sm:shadow-lg border border-gray-300 flex items-center space-x-2">
        <Image
          src="/me.jpg"
          alt="Profile"
          width={52}
          height={52}
          className="rounded-full object-cover"
        />
        <Link
          href="/"
          className="text-lg sm:text-2xl font-bold tracking-wide whitespace-nowrap text-black"
        >
          Apoorva Pant
        </Link>
      </div>

      {/* Floating Menu Box (Right) */}
      <div className="fixed z-[9999] top-3 right-3 sm:top-5 sm:right-10 md:right-16 lg:right-24 backdrop-blur-md bg-white/90 text-black border border-gray-300 rounded-full px-4 py-2 shadow-md sm:shadow-lg">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-ghost btn-circle sm:btn-xs md:btn-sm lg:btn-md sm:px-2 sm:py-2 md:px-2 md:py-2 text-black"
          >
            <Menu className="w-10 h-10" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-white text-black border border-gray-300 rounded-box w-44 sm:w-52"
          >
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <button
                  onClick={() => handleScroll(id)}
                  className="w-full text-left"
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
