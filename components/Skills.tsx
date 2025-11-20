'use client';

import { motion } from 'framer-motion';
import { Code, Layers, Database, Wrench } from 'lucide-react';

const skillCategories = [
  {
    icon: Code,
    title: "Programming Languages",
    skills: ["Python", "Java", "OCaml", "TypeScript", "JavaScript", "SQL"]
  },
  {
    icon: Layers,
    title: "Frameworks & Libraries",
    skills: ["Django", "Node.js", "React", "PyTorch", "Scikit-learn", "OpenAI Gym", "Streamlit", "Qiskit", "Pennylane"]
  },
  {
    icon: Database,
    title: "Data Science & ML",
    skills: ["Pandas", "NumPy", "Matplotlib", "Statistical Analysis", "Hyperparameter Tuning", "Reinforcement Learning (PPO)", "NLP", "Feature Engineering", "MCPs", "LLMs", "LangChain", "LangGraph", "RAG", "Prompt Engineering"]
  },
  {
    icon: Wrench,
    title: "Systems & Infrastructure",
    skills: ["Git", "Docker", "Microservices", "REST APIs", "Firebase", "WebRTC", "Unix", "Vercel", "PostgreSQL"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Technical Skills
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-indigo-600 rounded-lg">
                      <IconComponent size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
