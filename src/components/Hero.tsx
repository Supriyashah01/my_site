
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-8 md:px-16 py-20 relative">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-portfolio-lightpurple/20 rounded-full filter blur-[100px] -z-10"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-portfolio-lightblue/20 rounded-full filter blur-[100px] -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-6xl font-bold mb-6"
        >
          Hi, I'm <span className="gradient-text">Supriya Shah</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl mb-6 text-gray-700 dark:text-gray-300"
        >
          A passionate Computer Science student focused on <span className="font-semibold text-portfolio-blue">human-centered design</span> and <span className="font-semibold text-portfolio-purple">AI-driven web development</span>.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg mb-8 max-w-2xl text-gray-600 dark:text-gray-400"
        >
          I love turning ideas into intuitive, beautiful, and meaningful digital experiences that don't just work — they <em>connect</em>.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-4"
        >
          <Button className="rounded-full px-8 py-6 bg-portfolio-blue hover:bg-portfolio-blue/90">
            View My Work
          </Button>
          <Button variant="outline" className="rounded-full px-8 py-6 border-portfolio-purple text-portfolio-purple hover:bg-portfolio-purple/10">
            <a href="#contact">Contact Me</a>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
