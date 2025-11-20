'use client';

import { motion } from 'framer-motion';
import { Briefcase, TrendingUp, Zap } from 'lucide-react';

const experiences = [
  {
    title: "AI/ML Research Engineer",
    company: "Moccet",
    location: "Los Angeles, CA",
    period: "May 2025 - Aug. 2025",
    type: "Internship",
    highlights: [
      "Led development of AI talent matching platform that connected 500+ relevant professionals with projects within 48 hours, achieving industry specific matches through a custom AHP-TOPSIS decision algorithm in TypeScript.",
      "Launched pipeline processing 100K+ candidate profiles from Apollo.io's database, reducing end-to-end matching time from manual hours to 2 minutes and reducing costs to 10 cents per project.",
      "Developed an intelligent messaging system integrated with Anthropic Claude API with sentiment analysis for detecting and resolving disagreements in messages and overall conversation assistance.",
      "Implemented live conversation platform with Firestore and WebRTC P2P video for 1,000+ concurrent users."
    ],
    skills: ["TypeScript", "AI/ML", "Claude API", "Firestore", "WebRTC"]
  },
  {
    title: "Intelligent Systems ML Engineer",
    company: "Cornell Unmanned Air Systems",
    location: "Ithaca, NY",
    period: "Oct. 2024 - Present",
    type: "Research",
    highlights: [
      "Built custom OpenAI Gym environment for autonomous aircraft navigation with realistic physics simulation, 4-dimensional continuous state/action spaces, moving obstacles, and a simulated LIDAR for obstacle detection.",
      "Accelerated PPO training pipeline by 73% (15min → 4min) through vectorized environment operations and parallelizing environments to enable faster testing of reward functions and hyperparameter tuning.",
      "Engineered multi-objective reward function for PPO agent balancing goal-seeking behavior, obstacle avoidance, and path efficiency to reach waypoints with 70% accuracy."
    ],
    skills: ["Python", "Reinforcement Learning", "OpenAI Gym", "PPO", "NumPy"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-32 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-pink-200/20 dark:bg-pink-900/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-200/20 dark:bg-blue-900/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 border border-purple-200 dark:border-purple-800">
            <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span className="text-sm font-semibold text-purple-900 dark:text-purple-300">
              Professional Journey
            </span>
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Driving innovation through AI/ML and intelligent systems
          </p>
        </motion.div>

        <div className="relative space-y-12">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-400 via-pink-400 to-blue-400 dark:from-purple-600 dark:via-pink-600 dark:to-blue-600 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`relative flex flex-col ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } items-center gap-8`}
            >
              {/* Timeline dot */}
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full transform md:-translate-x-1/2 ring-4 ring-white dark:ring-gray-900 z-10" />

              {/* Content card */}
              <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-700 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 text-xs font-semibold bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-900 dark:text-purple-300 rounded-full">
                            {exp.type}
                          </span>
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                          {exp.company}
                        </p>
                      </div>
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        className="p-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl shadow-lg"
                      >
                        {index === 0 ? (
                          <TrendingUp className="w-6 h-6 text-white" />
                        ) : (
                          <Zap className="w-6 h-6 text-white" />
                        )}
                      </motion.div>
                    </div>

                    {/* Location and period */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                      <span>{exp.location}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: i * 0.1 }}
                          viewport={{ once: true }}
                          className="flex gap-3 text-gray-700 dark:text-gray-300"
                        >
                          <span className="text-purple-600 dark:text-purple-400 mt-1 flex-shrink-0">▸</span>
                          <span className="text-sm leading-relaxed">{highlight}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                      {exp.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Spacer for alternating layout */}
              <div className="hidden md:block w-5/12" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
