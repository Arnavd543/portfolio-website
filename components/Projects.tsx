'use client';

import { motion } from 'framer-motion';
import { Code2, Calendar } from 'lucide-react';

const projects = [
  {
    title: "Tennis Match Predictor",
    period: "Jun. 2025 - Aug. 2025",
    technologies: "Python, XGBoost, Django, Scikit-learn, Pandas",
    highlights: [
      "Achieved 68% prediction accuracy on professional tennis matches using XGBoost on 107K+ past matches.",
      "Engineered 40+ advanced features and implemented randomized hyperparameter tuning across 108 configurations during training and 3-way temporal validation to data leakage and ensure unbiased performance metrics.",
      "Engineered end-to-end Django application with the prediction API, dynamic HTML templating, CSS styling, and backend model integration with confidence scoring and a multi-model fallback system."
    ]
  },
  {
    title: "OCamlGit - Version Control System",
    period: "Mar. 2025 - May 2025",
    technologies: "OCaml, Unix, Functional Programming, Dune",
    highlights: [
      "Implemented core Git functionality including init, add, commit, branch, and merge operations using functional programming paradigms and immutable data structures",
      "Designed modular architecture with clean separation of concerns, comprehensive error handling, and Unix system calls for file I/O with 95% line coverage with unit testing."
    ]
  },
  {
    title: "Quantum Machine Learning Classifier",
    period: "Aug 2025 - Sep 2025",
    technologies: "Python, Pennylane, Scikit-learn",
    highlights: [
      "Designed and implemented a quantum-enhanced binary classifier to classify a non-linear dataset",
      "Implemented angle embedding and parameterized entangling layers, improving test accuracy to 65% (from 50%) through circuit depth expansion, optimizer tuning, and hyperparameter optimization"
    ]
  },
  {
    title: "Physics AI Tutor",
    period: "Apr 2025",
    technologies: "Python, Streamlit, Llama 4, Ollama",
    highlights: [
      "Built conversational AI system using Llama 3.2 with interactive web interface for personalized physics tutoring across mechanics, E&M, and waves with adaptive difficulty levels",
      "Increased solution accuracy by 32% for textbook physics problems through targeted prompt engineering"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-indigo-600 rounded-lg flex-shrink-0">
                    <Code2 size={20} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm text-gray-600 dark:text-gray-400">
                      <Calendar size={14} />
                      <span>{project.period}</span>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                    {project.technologies}
                  </p>
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-2 text-sm text-gray-700 dark:text-gray-300">
                      <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
