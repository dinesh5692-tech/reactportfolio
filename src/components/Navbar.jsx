import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: 'home' },
    { id: 2, link: 'about' },
    { id: 3, link: 'experience' },
    { id: 4, link: 'projects' },
    { id: 5, link: 'contact' },
  ];

  return (
    <div className="fixed w-full bg-black/30 backdrop-blur-md shadow-md z-50">
      <div className="flex justify-between items-center px-8 py-4">

        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <img 
            src="/picture1.png" 
            alt="Profile" 
            className="w-12 h-12 rounded-full border-2 border-blue-500"
          />
          <a href="#home" className="text-xl md:text-2xl font-bold text-blue-600">
            MUDAVATH MANOJ KUMAR
          </a>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ id, link }) => (
            <li key={id} className="group relative cursor-pointer">
              <a
                href={`#${link}`}
                className="text-gray-700 hover:text-blue-600 font-medium"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
              </a>
            </li>
          ))}

          {/* Resume Button */}
          <li>
            <a 
              href="/resume.pdf"
              download
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div 
          onClick={() => setNav(!nav)} 
          className="md:hidden cursor-pointer text-gray-700"
        >
          {nav ? <FaTimes size={25} /> : <FaBars size={25} />}
        </div>
      </div>

      {/* Mobile Navigation */}
      {nav && (
        <ul className="flex flex-col items-center absolute top-20 left-0 w-full bg-white/90 backdrop-blur-md gap-8 py-10 shadow-md">
          {links.map(({ id, link }) => (
            <li key={id} className="text-xl font-medium">
              <a
                href={`#${link}`}
                onClick={() => setNav(false)}
                className="hover:text-blue-600"
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="/resume.pdf"
              download
              className="bg-blue-500 text-white px-5 py-2 rounded hover:bg-blue-600 transition"
              onClick={() => setNav(false)}
            >
              Resume
            </a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;
