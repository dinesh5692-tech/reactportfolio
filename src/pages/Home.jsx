import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-grey-900 to-black text-white"
    >
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl w-full px-6 gap-10">
        
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <p className="text-gray-400 text-xl">Hey, There I'm</p>
          <h1 className="text-4xl md:text-5xl font-extrabold">
            Mudavath <span>Manoj Kumar</span>
          </h1>
          <h2 className="text-3xl md:text-4xl text-blue-500 font-semibold">
            <TypeAnimation
              sequence={[
                'Software Developer', 2000,
                'Frontend Engineer', 2000,
                'React Developer', 2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h2>

          <a
            href="/resume.pdf"
            download
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md w-fit"
          >
            Resume
          </a>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="rounded-full border-4 border-blue-600 overflow-hidden shadow-lg w-72 h-72 md:w-80 md:h-80 transform hover:scale-105 transition duration-300">

            <img
              src="/picture1.png" // ✅ Place your image in public folder
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      
    </section>
  );
};

export default Hero;
