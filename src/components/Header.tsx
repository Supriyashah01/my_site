
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  // Handle theme change
  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
    }

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Handle scroll detection for header style change
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-8 md:px-16 flex justify-between items-center transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="font-semibold text-xl">
        <span className="gradient-text">Supriya Shah</span>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <ul className="flex space-x-8">
          <li><a href="#about" className="hover:text-portfolio-blue transition-colors">About</a></li>
          <li><a href="#skills" className="hover:text-portfolio-blue transition-colors">Skills</a></li>
          <li><a href="#projects" className="hover:text-portfolio-blue transition-colors">Projects</a></li>
          <li><a href="#experience" className="hover:text-portfolio-blue transition-colors">Experience</a></li>
          <li><a href="#contact" className="hover:text-portfolio-blue transition-colors">Contact</a></li>
        </ul>
      </nav>

      <div className="flex items-center gap-4">
        {/* Dark mode toggle */}
        <Button 
          onClick={toggleTheme} 
          variant="ghost" 
          size="icon" 
          className="rounded-full"
          aria-label="Toggle theme"
        >
          {isDarkMode ? (
            <Sun className="h-5 w-5 text-yellow-400" />
          ) : (
            <Moon className="h-5 w-5 text-slate-700" />
          )}
        </Button>

        {/* Mobile menu button */}
        <Button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          variant="ghost" 
          size="icon" 
          className="rounded-full md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg py-4 px-8 md:hidden"
        >
          <ul className="flex flex-col space-y-4">
            <li><a href="#about" className="block py-2 hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>About</a></li>
            <li><a href="#skills" className="block py-2 hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" className="block py-2 hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#experience" className="block py-2 hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Experience</a></li>
            <li><a href="#contact" className="block py-2 hover:text-portfolio-blue transition-colors" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
};

export default Header;
