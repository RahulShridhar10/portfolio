import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github as GitHub } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, cardVariants } from "@/lib/animations";

// Project data
const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-featured e-commerce platform built with React, Node.js, and MongoDB. Features include product listings, cart functionality, user authentication, and payment processing.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80",
    tags: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A Kanban-style task management application that allows users to create, assign, and track tasks. Built with Vue.js and Firebase for real-time updates.",
    image: "https://images.unsplash.com/photo-1611224885990-ab7363d7f2a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1939&q=80",
    tags: ["Vue.js", "Firebase", "Vuex", "CSS"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/task-manager"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "A weather application that provides current weather conditions and forecasts for any location. Uses OpenWeatherMap API and features interactive maps.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["JavaScript", "API", "HTML", "CSS"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/weather-dashboard"
  },
  {
    id: 4,
    title: "Blog Platform",
    description: "A full-stack blog platform with features like user authentication, post creation, comments, and social sharing. Built with Next.js and PostgreSQL.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    tags: ["Next.js", "PostgreSQL", "TypeScript", "TailwindCSS"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/blog-platform"
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills. Features responsive design, dark/light mode, and contact form.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2055&q=80",
    tags: ["React", "TailwindCSS", "Vite", "TypeScript"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/portfolio"
  },
  {
    id: 6,
    title: "Recipe Finder App",
    description: "An application that allows users to search for recipes based on ingredients they have. Features filtering by dietary restrictions and meal types.",
    image: "https://images.unsplash.com/photo-1505935428862-770b6f24f629?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2067&q=80",
    tags: ["React", "API", "CSS", "JavaScript"],
    liveUrl: "https://example.com",
    sourceUrl: "https://github.com/yourusername/recipe-finder"
  }
];

// Extract all unique tags from projects
const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

export function ProjectsSection() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  const filteredProjects = selectedTag
    ? projects.filter(project => project.tags.includes(selectedTag))
    : projects;

  return (
    <motion.section
      id="projects"
      className="py-16 md:py-24"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="container">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          variants={fadeIn("up", 0.1)}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">My Projects</h2>
          <p className="text-muted-foreground">
            Here are some of the projects I've worked on. Each project demonstrates different skills and technologies.
          </p>
        </motion.div>

        <motion.div
          className="mb-8 flex flex-wrap justify-center gap-2"
          variants={fadeIn("up", 0.2)}
        >
          <Button
            variant={selectedTag === null ? "default" : "outline"}
            onClick={() => setSelectedTag(null)}
          >
            All
          </Button>
          {allTags.map(tag => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              onClick={() => setSelectedTag(tag)}
            >
              {tag}
            </Button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              whileHover="hover"
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader className="flex-grow-0">
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-1 mt-2">
                    {project.tags.map(tag => (
                      <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="flex justify-between flex-grow-0">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                      <GitHub className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
