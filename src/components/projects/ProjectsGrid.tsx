import React from 'react';
import { motion } from 'framer-motion';
import ProjectCard3D from './ProjectCard3D';

const projects = [
  {
    title: "Neural Vision Pro",
    description: "State-of-the-art computer vision system using YOLOv5 architecture",
    category: "ML",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80",
    metrics: {
      accuracy: "98.5%",
      performance: "30 FPS",
      dataset: "1M+ Images",
      modelSize: "140MB"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["PyTorch", "Computer Vision", "YOLO", "Object Detection"]
  },
  {
    title: "StyleGAN Artist",
    description: "Advanced GAN model for generating artistic masterpieces",
    category: "GenAI",
    image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&q=80",
    metrics: {
      quality: "FID: 4.2",
      generation: "0.5s/img",
      dataset: "2M Arts",
      modelSize: "850MB"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["GANs", "PyTorch", "Art Generation", "Deep Learning"]
  },
  {
    title: "LangChain GPT",
    description: "Custom LLM built with advanced prompt engineering",
    category: "LLM",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80",
    metrics: {
      performance: "50ms/query",
      memory: "16GB RAM",
      context: "16K tokens",
      modelSize: "7B params"
    },
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com",
    tags: ["LangChain", "GPT", "NLP", "Transformers"]
  }
] as const;

const ProjectsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <ProjectCard3D {...project} />
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsGrid;