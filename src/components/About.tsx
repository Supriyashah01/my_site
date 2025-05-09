
import React from 'react';
import { motion } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Eye, CircleUser } from 'lucide-react';

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
            className="relative flex justify-center items-center"
          >
            <div className="w-40 h-40 md:w-48 md:h-48 relative rounded-full overflow-hidden bg-gradient-to-br from-portfolio-blue/10 to-portfolio-purple/10 backdrop-blur-sm p-1">
              <Avatar className="w-full h-full border-2 border-portfolio-purple/20">
                <AvatarImage 
                  src="/lovable-uploads/bb473bd6-4682-42ba-9280-3bcb577e52ad.png" 
                  alt="Supriya Shah"
                  className="object-cover mix-blend-normal opacity-100 scale-105 object-[center_top]"
                />
                <AvatarFallback className="bg-gradient-to-br from-portfolio-blue/30 to-portfolio-purple/30 text-xl font-medium text-white">SS</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-2 right-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                <Eye size={18} className="text-portfolio-blue" />
              </div>
              <div className="absolute top-2 left-2 bg-white dark:bg-gray-800 rounded-full p-1 shadow-md">
                <CircleUser size={18} className="text-portfolio-purple" />
              </div>
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
