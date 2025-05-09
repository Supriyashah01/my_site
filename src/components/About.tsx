
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const About = () => {
  return (
    <section id="about" className="py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          About <span className="gradient-text">Me</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <div className="w-64 h-64 md:w-72 md:h-72 relative rounded-full overflow-hidden border-4 border-portfolio-purple shadow-lg">
              <img 
                src="/lovable-uploads/bb473bd6-4682-42ba-9280-3bcb577e52ad.png" 
                alt="Supriya Shah"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-portfolio-blue/30 to-transparent mix-blend-overlay"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              My work blends <span className="font-semibold text-portfolio-blue">curiosity</span>, <span className="font-semibold text-portfolio-purple">empathy</span>, and a love for <span className="font-semibold text-portfolio-darkblue">clean, functional design</span>. With a strong foundation in user research, UI/UX principles, wireframing, and front-end development, I aim to build products that connect with users on a deeper level.
            </p>
            
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              I started my journey with HTML, CSS, and JavaScript, and over the past 3+ years, I've explored the exciting intersections of <span className="font-semibold text-portfolio-blue">design and technology</span>.
            </p>
            
            <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
              My goal is to contribute to meaningful, forward-thinking projects that use design and AI to solve real-world challenges and make technology more human.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
