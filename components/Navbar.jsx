'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <div className="z-[9999]">
      {/* Floating Name Box (Left) */}
      <div className="fixed z-[9999] top-3 left-3 sm:top-5 sm:left-10 md:left-16 lg:left-24 backdrop-blur-lg bg-white/90 text-black rounded-full px-0.5 sm:px-1 py-0.5 sm:py-1 shadow-md sm:shadow-lg border border-gray-300 flex items-center space-x-2">
        {/* Profile Picture */}
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
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
