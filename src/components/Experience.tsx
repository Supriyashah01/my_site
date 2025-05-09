
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  HoverCard, 
  HoverCardContent, 
  HoverCardTrigger 
} from '@/components/ui/hover-card';
import { ChevronRight, Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface TimelineItemProps {
  title: string;
  description: string;
  delay: number;
  skills?: string[];
  achievements?: string[];
}

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
              title="Advanced UI/UX Design"
              description="Exploring advanced design patterns and human-centered interfaces. Working on projects that combine aesthetic design with intelligent functionality."
              delay={0.1}
              skills={["React", "Next.js", "Figma", "Design Systems"]}
              achievements={[
                "Designed and implemented a component library",
                "Contributed to open source HCI research projects",
                "Completed advanced coursework in generative design"
              ]}
            />
            
            <TimelineItem 
              title="Expanding Design & Development Skills"
              description="Deepened knowledge of JavaScript frameworks and design systems. Started working with Python for backend logic and integrating with frontend interfaces."
              delay={0.2}
              skills={["JavaScript", "TypeScript", "Python", "Design Systems"]}
              achievements={[
                "Built a design system from scratch for a client project",
                "Created interactive data visualizations with D3.js",
                "Learned backend integration with Python Flask"
              ]}
            />
            
            <TimelineItem 
              title="UI/UX Design Exploration"
              description="Discovered user experience design principles and started applying them to web projects. Learned Figma for wireframing and prototyping."
              delay={0.3}
              skills={["Figma", "UX Research", "Wireframing", "Prototyping"]}
              achievements={[
                "Completed UX certification courses",
                "Conducted user research studies",
                "Created high-fidelity prototypes"
              ]}
            />
            
            <TimelineItem 
              title="Web Development Foundations"
              description="Started learning HTML, CSS, and JavaScript. Built first static websites and began understanding responsive design principles."
              delay={0.4}
              skills={["HTML", "CSS", "JavaScript", "Responsive Design"]}
              achievements={[
                "Built first portfolio website",
                "Completed web development bootcamp",
                "Created responsive layouts from scratch"
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ title, description, delay, skills, achievements }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="relative flex ml-8 md:ml-16"
    >
      {/* Circle marker on timeline */}
      <HoverCard>
        <HoverCardTrigger asChild>
          <div className="absolute -left-12 md:-left-20 top-0 w-4 h-4 rounded-full bg-portfolio-purple hover:scale-125 transition-transform cursor-pointer"></div>
        </HoverCardTrigger>
        <HoverCardContent className="w-64">
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium"><Info className="h-3.5 w-3.5 inline mr-1" /> Timeline</span>
          </div>
          <p className="text-xs text-gray-500 mt-1">Click the card to see more details</p>
        </HoverCardContent>
      </HoverCard>
      
      <div className="w-full">
        <Card 
          className={`border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300 ${isExpanded ? 'ring-1 ring-portfolio-purple' : ''}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <CardHeader className="flex flex-row justify-between items-center pb-2">
            <CardTitle className="text-xl font-semibold text-gray-800 dark:text-gray-100 flex items-center">
              {title}
              <ChevronRight 
                className={`ml-2 h-5 w-5 text-portfolio-purple transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} 
              />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
            
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 pt-2 border-t border-gray-200 dark:border-gray-700"
              >
                {skills && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-portfolio-blue">Skills Gained</h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="bg-portfolio-blue/5 text-portfolio-blue border-portfolio-blue/20">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                
                {achievements && (
                  <div>
                    <h4 className="text-sm font-semibold mb-2 text-portfolio-purple">Key Achievements</h4>
                    <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-300">
                      {achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 rounded-full bg-portfolio-purple mt-1.5 mr-2"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
};

export default Experience;
