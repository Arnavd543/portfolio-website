'use client';

import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench, Sparkle } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    gradient: "from-blue-500 to-cyan-600",
    skills: ["Python", "Java", "OCaml", "TypeScript", "JavaScript", "SQL"]
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    gradient: "from-purple-500 to-pink-600",
    skills: ["Django", "Node.js", "React", "PyTorch", "Scikit-learn", "OpenAI Gym", "Streamlit", "Qiskit", "Pennylane"]
  },
  {
    icon: Database,
    title: "Data Science & ML",
    gradient: "from-emerald-500 to-teal-600",
    skills: ["Pandas", "NumPy", "Matplotlib", "Statistical Analysis", "Hyperparameter Tuning", "Reinforcement Learning (PPO)", "NLP", "Feature Engineering", "MCPs", "LLMs", "LangChain", "LangGraph", "RAG", "Prompt Engineering"]
  },
  {
    icon: Wrench,
    title: "Systems & Infrastructure",
    gradient: "from-orange-500 to-red-600",
    skills: ["Git", "Docker", "Microservices", "REST APIs", "Firebase", "WebRTC", "Unix", "Vercel", "PostgreSQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 border border-purple-200 dark:border-purple-800">
            <Sparkle className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-900 dark:text-purple-300">
              Technical Expertise
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Skills
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            A comprehensive toolkit for building intelligent systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} rounded-3xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`} />

                <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-transparent dark:hover:border-transparent transition-all duration-300">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`p-4 bg-gradient-to-br ${category.gradient} rounded-2xl shadow-lg`}
                    >
                      <IconComponent className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.03 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600 border border-gray-200 dark:border-gray-600 text-gray-800 dark:text-gray-200 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
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
