
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center py-6 px-8 md:px-16 w-full"
    >
      <div className="font-semibold text-xl">
        <span className="gradient-text">Supriya Shah</span>
      </div>
      <nav>
        <ul className="flex space-x-8">
          <li><a href="#about" className="hover:text-portfolio-blue transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-portfolio-blue transition-colors">Skills</a></li>
          <li><a href="#experience" className="hover:text-portfolio-blue transition-colors">Experience</a></li>
          <li><a href="#contact" className="hover:text-portfolio-blue transition-colors">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
