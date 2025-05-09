
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Experience = () => {
  return (
    <section id="experience" className="py-20 px-8 md:px-16">
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12 text-center"
        >
          My <span className="gradient-text">Learning Journey</span>
        </motion.h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-portfolio-blue to-portfolio-purple"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            <TimelineItem 
              year="2022-Present" 
              title="Advanced UI/UX & AI Integration"
              description="Exploring advanced design patterns and the intersection of AI with human-centered interfaces. Working on projects that combine aesthetic design with intelligent functionality."
              side="right"
              delay={0.1}
            />
            
            <TimelineItem 
              year="2021-2022" 
              title="Expanding Design & Development Skills"
              description="Deepened knowledge of JavaScript frameworks and design systems. Started working with Python for backend logic and integrating with frontend interfaces."
              side="left"
              delay={0.2}
            />
            
            <TimelineItem 
              year="2020-2021" 
              title="UI/UX Design Exploration"
              description="Discovered user experience design principles and started applying them to web projects. Learned Figma for wireframing and prototyping."
              side="right"
              delay={0.3}
            />
            
            <TimelineItem 
              year="2019-2020" 
              title="Web Development Foundations"
              description="Started learning HTML, CSS, and JavaScript. Built first static websites and began understanding responsive design principles."
              side="left"
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
  side: 'left' | 'right';
  delay: number;
}

const TimelineItem = ({ year, title, description, side, delay }: TimelineItemProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: side === 'left' ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`relative flex ${side === 'left' ? 'md:justify-end' : ''}`}
    >
      <div className={`md:w-1/2 ${side === 'right' ? 'md:ml-auto' : ''} ${side === 'left' ? 'md:mr-8' : 'md:ml-8'}`}>
        <Card className="border border-gray-200 dark:border-gray-700 shadow-sm">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>{title}</span>
              <span className="text-sm px-3 py-1 bg-portfolio-blue/10 text-portfolio-blue rounded-full">
                {year}
              </span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-400">
              {description}
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Circle marker on timeline */}
      <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-10 w-4 h-4 rounded-full bg-gradient-to-r from-portfolio-blue to-portfolio-purple"></div>
    </motion.div>
  );
};

export default Experience;
