'use client';

import { motion } from 'framer-motion';
import { Rocket, Brain, GitBranch, GraduationCap, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Tennis Match Predictor",
    period: "Jun. 2025 - Aug. 2025",
    icon: Rocket,
    gradient: "from-emerald-500 to-teal-600",
    technologies: ["Python", "XGBoost", "Django", "Scikit-learn", "Pandas"],
    highlights: [
      "Achieved 68% prediction accuracy on professional tennis matches using XGBoost on 107K+ past matches.",
      "Engineered 40+ advanced features and implemented randomized hyperparameter tuning across 108 configurations during training and 3-way temporal validation to data leakage and ensure unbiased performance metrics.",
      "Engineered end-to-end Django application with the prediction API, dynamic HTML templating, CSS styling, and backend model integration with confidence scoring and a multi-model fallback system."
    ],
    impact: "68% accuracy, 107K+ matches analyzed"
  },
  {
    title: "OCamlGit - Version Control System",
    period: "Mar. 2025 - May 2025",
    icon: GitBranch,
    gradient: "from-orange-500 to-red-600",
    technologies: ["OCaml", "Unix", "Functional Programming", "Dune"],
    highlights: [
      "Implemented core Git functionality including init, add, commit, branch, and merge operations using functional programming paradigms and immutable data structures",
      "Designed modular architecture with clean separation of concerns, comprehensive error handling, and Unix system calls for file I/O with 95% line coverage with unit testing."
    ],
    impact: "95% test coverage, full Git implementation"
  },
  {
    title: "Quantum Machine Learning Classifier",
    period: "Aug 2025 - Sep 2025",
    icon: Brain,
    gradient: "from-purple-500 to-pink-600",
    technologies: ["Python", "Pennylane", "Scikit-learn"],
    highlights: [
      "Designed and implemented a quantum-enhanced binary classifier to classify a non-linear dataset",
      "Implemented angle embedding and parameterized entangling layers, improving test accuracy to 65% (from 50%) through circuit depth expansion, optimizer tuning, and hyperparameter optimization"
    ],
    impact: "65% accuracy, 15% improvement"
  },
  {
    title: "Physics AI Tutor",
    period: "Apr 2025",
    icon: GraduationCap,
    gradient: "from-blue-500 to-cyan-600",
    technologies: ["Python", "Streamlit", "Llama 3.2", "Ollama"],
    highlights: [
      "Built conversational AI system using Llama 3.2 with interactive web interface for personalized physics tutoring across mechanics, E&M, and waves with adaptive difficulty levels",
      "Increased solution accuracy by 32% for textbook physics problems through targeted prompt engineering"
    ],
    impact: "32% accuracy improvement"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-32 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 border border-blue-200 dark:border-blue-800">
            <Rocket className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-semibold text-blue-900 dark:text-blue-300">
              Featured Work
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Transforming ideas into impactful solutions through code and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                {/* Glow effect on hover */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500`} />

                <div className="relative h-full bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transition-all duration-300 flex flex-col">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:text-transparent group-hover:${project.gradient} transition-all">
                        {project.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {project.period}
                      </p>
                    </div>
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 12 }}
                      className={`p-4 bg-gradient-to-br ${project.gradient} rounded-2xl shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                  </div>

                  {/* Impact badge */}
                  <div className="mb-6">
                    <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${project.gradient} bg-opacity-10 rounded-full`}>
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm font-semibold">{project.impact}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {project.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="flex gap-3 text-gray-700 dark:text-gray-300"
                      >
                        <span className={`bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent mt-1 flex-shrink-0 font-bold`}>▸</span>
                        <span className="text-sm leading-relaxed">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Technologies */}
                  <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: i * 0.05 }}
                          viewport={{ once: true }}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full hover:scale-105 transition-transform"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
