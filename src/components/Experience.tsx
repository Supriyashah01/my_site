
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 md:px-16 bg-gray-50 dark:bg-gray-800/20">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          My <span className="gradient-text">Learning Journey</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-blue to-portfolio-purple"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <TimelineItem 
              year="2022-Present" 
              title="Advanced UI/UX & AI Integration"
              description="Exploring advanced design patterns and the intersection of AI with human-centered interfaces. Working on projects that combine aesthetic design with intelligent functionality."
              delay={0.1}
            />
            
            <TimelineItem 
              year="2021-2022" 
              title="Expanding Design & Development Skills"
              description="Deepened knowledge of JavaScript frameworks and design systems. Started working with Python for backend logic and integrating with frontend interfaces."
              delay={0.2}
            />
            
            <TimelineItem 
              year="2020-2021" 
              title="UI/UX Design Exploration"
              description="Discovered user experience design principles and started applying them to web projects. Learned Figma for wireframing and prototyping."
              delay={0.3}
            />
            
            <TimelineItem 
              year="2019-2020" 
              title="Web Development Foundations"
              description="Started learning HTML, CSS, and JavaScript. Built first static websites and began understanding responsive design principles."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  delay: number;
}

const TimelineItem = ({ year, title, description, delay }: TimelineItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative flex ml-8 md:ml-16"
    >
      {/* Circle marker on timeline */}
      <div className="absolute -left-12 md:-left-20 top-0 w-4 h-4 rounded-full bg-portfolio-purple"></div>
      
      <div className="w-full">
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow">
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {title}
            </CardTitle>
            <span className="text-sm px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full">
              {year}
            </span>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Experience;
