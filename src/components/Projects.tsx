
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Eye } from 'lucide-react';

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
    image: "/lovable-uploads/766159e6-0445-452e-b9f7-029a1d6a0388.png",
    tags: ["React", "TypeScript", "TensorFlow.js", "Figma API"],
    github: "https://github.com/supriyashah/ai-design-assistant",
    demo: "https://ai-design.demo.com"
  },
  {
    id: 2,
    title: "Interactive Data Visualization Dashboard",
    description: "A responsive dashboard showcasing complex data sets through intuitive and interactive visualizations.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    tags: ["D3.js", "React", "CSS Grid", "REST API"],
    github: "https://github.com/supriyashah/data-viz-dashboard",
    demo: "https://data-viz.demo.com"
  },
  {
    id: 3,
    title: "ICT Awareness Program in Sindhupalchowk",
    description: "A community initiative to promote digital literacy and ICT skills among rural communities in Sindhupalchowk district of Nepal.",
    category: "Community",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&auto=format&fit=crop&q=80",
    tags: ["Digital Literacy", "Community Outreach", "Training", "Rural Development"],
    github: "https://github.com/supriyashah/ict-sindhupalchowk",
    demo: "https://ict-awareness.demo.com"
  },
  {
    id: 4,
    title: "Personal Finance Tracker",
    description: "A web application for tracking personal expenses and incomes with visualization features.",
    category: "Frontend",
    image: "https://images.unsplash.com/photo-1579621970588-a35d0e7ab9b6?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Chart.js", "Local Storage", "PWA"],
    github: "https://github.com/supriyashah/finance-tracker",
    demo: "https://finance.demo.com"
  },
  {
    id: 6,
    title: "User Research Platform",
    description: "A platform for conducting user research, collecting feedback, and analyzing user behavior patterns.",
    category: "UI/UX",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80",
    tags: ["React", "Firebase", "Analytics", "Survey Design"],
    github: "https://github.com/supriyashah/user-research-platform",
    demo: "https://ux-research.demo.com"
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
  const [isHovered, setIsHovered] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="h-full"
    >
      <Card className="overflow-hidden h-full flex flex-col border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300">
        <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
            onError={(e) => {
              if (!imageError) {
                setImageError(true);
                e.currentTarget.src = "https://via.placeholder.com/800x400?text=Project+Image";
              }
            }}
            loading="lazy"
          />
          <AnimatePresence>
            {isHovered && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gray-900/70 flex items-center justify-center"
              >
                <Button 
                  size="sm"
                  variant="secondary"
                  className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white"
                  onClick={() => window.open(project.demo || project.github, '_blank')}
                >
                  <Eye className="mr-2 h-4 w-4" />
                  View Project
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        
        <CardHeader>
          <CardTitle className="text-xl flex items-center flex-wrap gap-2">
            {project.title}
            <Badge variant="outline" className="ml-auto bg-portfolio-purple/10 text-portfolio-purple text-xs">
              {project.category}
            </Badge>
          </CardTitle>
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
