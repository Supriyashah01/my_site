
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Image } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
  github?: string;
  demo?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-Powered Design Assistant",
    description: "An intelligent assistant that helps designers create user interfaces based on natural language prompts and sketches.",
    category: "AI",
    image: "https://via.placeholder.com/600x400/4361EE/FFFFFF?text=AI+Design+Assistant",
    tags: ["React", "TypeScript", "TensorFlow.js", "Figma API"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 2,
    title: "Interactive Data Visualization Dashboard",
    description: "A responsive dashboard showcasing complex data sets through intuitive and interactive visualizations.",
    category: "Frontend",
    image: "https://via.placeholder.com/600x400/7209B7/FFFFFF?text=Data+Dashboard",
    tags: ["D3.js", "React", "CSS Grid", "REST API"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 3,
    title: "Human-Centered Design System",
    description: "A comprehensive design system focused on accessibility and usability, built with component-driven development.",
    category: "UI/UX",
    image: "https://via.placeholder.com/600x400/B5A9FC/000000?text=Design+System",
    tags: ["Storybook", "React", "Accessibility", "Design Tokens"],
    github: "https://github.com",
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A web application for tracking personal expenses and incomes with visualization features.",
    category: "Frontend",
    image: "https://via.placeholder.com/600x400/4CC9F0/000000?text=Finance+Tracker",
    tags: ["React", "Chart.js", "Local Storage", "PWA"],
    github: "https://github.com",
    demo: "https://demo.com"
  },
  {
    id: 5,
    title: "Sentiment Analysis Tool",
    description: "An AI-powered tool that analyzes text and determines the emotional sentiment behind it.",
    category: "AI",
    image: "https://via.placeholder.com/600x400/3A0CA3/FFFFFF?text=Sentiment+Analysis",
    tags: ["Python", "NLP", "React", "Flask API"],
    github: "https://github.com",
  },
  {
    id: 6,
    title: "User Research Platform",
    description: "A platform for conducting user research, collecting feedback, and analyzing user behavior patterns.",
    category: "UI/UX",
    image: "https://via.placeholder.com/600x400/4361EE/FFFFFF?text=Research+Platform",
    tags: ["React", "Firebase", "Analytics", "Survey Design"],
    demo: "https://demo.com"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projectsData);
  const categories = ["All", "AI", "Frontend", "UI/UX"];
  
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(projectsData.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);
  
  return (
    <section id="projects" className="py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          My <span className="gradient-text">Projects</span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12 text-gray-600 dark:text-gray-300"
        >
          A collection of projects that showcase my skills in UI/UX design, web development, and AI integration.
        </motion.p>
        
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => setSelectedCategory(category)}
                variant={selectedCategory === category ? "default" : "outline"}
                className={`rounded-full ${selectedCategory === category ? 'bg-portfolio-purple hover:bg-portfolio-purple/90' : 'hover:bg-portfolio-purple/10 hover:text-portfolio-purple'}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
        
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow">
        <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image className="w-10 h-10 text-gray-400" />
          </div>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="bg-gray-100 dark:bg-gray-800">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex gap-2 pt-2 border-t border-gray-100 dark:border-gray-800">
          {project.github && (
            <Button variant="outline" size="sm" className="flex-1" onClick={() => window.open(project.github, '_blank')}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Button>
          )}
          {project.demo && (
            <Button size="sm" className="flex-1 bg-portfolio-blue hover:bg-portfolio-blue/90" onClick={() => window.open(project.demo, '_blank')}>
              <ExternalLink className="mr-2 h-4 w-4" />
              Demo
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default Projects;
