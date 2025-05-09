
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { motion } from 'framer-motion';

const Index = () => {
  useEffect(() => {
    // Check for stored theme preference and apply
    const theme = localStorage.getItem('theme');
    if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Prefetch project images for better performance
    const prefetchImages = () => {
      const images = [
        "https://images.unsplash.com/photo-1673188848458-e3a9b7d8dc2e?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&auto=format&fit=crop&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
      ];
      
      images.forEach(src => {
        const img = new Image();
        img.src = src;
      });
    };
    
    // Execute after initial render
    prefetchImages();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background"
    >
      <Header />
      <div className="pt-16"> {/* Add padding top to account for fixed header */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <ContactForm />
        <Footer />
      </div>
      <BackToTop />
    </motion.div>
  );
};

export default Index;
