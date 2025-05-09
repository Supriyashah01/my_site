import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skills = {
    languages: ["HTML", "CSS", "JavaScript", "Python"],
    designTools: ["Figma", "DaVinci Resolve"],
    specialties: ["UI/UX Design", "Human-Centered Design", "AI Integration", "Web Development"],
    softSkills: ["Empathy", "Problem Solving", "Creativity", "Collaboration"]
  };

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-20 px-8 md:px-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="gradient-text">Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-portfolio-blue">Languages & Tools</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.languages.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Badge className="bg-portfolio-blue/10 text-portfolio-blue hover:bg-portfolio-blue/20 px-3 py-2 text-sm rounded-full">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-portfolio-purple">Design Tools</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.designTools.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Badge className="bg-portfolio-purple/10 text-portfolio-purple hover:bg-portfolio-purple/20 px-3 py-2 text-sm rounded-full">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-portfolio-darkblue">Specialties</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.specialties.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Badge className="bg-portfolio-darkblue/10 text-portfolio-darkblue hover:bg-portfolio-darkblue/20 px-3 py-2 text-sm rounded-full">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-sm"
          >
            <h3 className="text-xl font-semibold mb-4 text-portfolio-lightblue">Soft Skills</h3>
            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {skills.softSkills.map((skill, index) => (
                <motion.div key={index} variants={item}>
                  <Badge className="bg-portfolio-lightblue/10 text-portfolio-lightblue hover:bg-portfolio-lightblue/20 px-3 py-2 text-sm rounded-full">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
