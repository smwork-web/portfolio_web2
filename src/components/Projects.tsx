import React from 'react';
import { motion } from 'framer-motion';
import ProjectsGrid from './projects/ProjectsGrid';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 via-purple-900/5 to-black" />
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Featured Projects
          </motion.h2>
          <motion.p
            className="text-xl text-blue-400"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Exploring the Frontiers of AI Technology
          </motion.p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          className="flex justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          {['All', 'ML', 'GenAI', 'LLM'].map((category, index) => (
            <motion.button
              key={category}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all
                ${category === 'All' 
                  ? 'bg-blue-500 text-white' 
                  : 'bg-blue-500/10 text-blue-400 hover:bg-blue-500/20'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <ProjectsGrid />
      </div>
    </section>
  );
};

export default Projects;