'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';

const experiences = [
  {
    title: "AI/ML Research Engineer",
    company: "Moccet",
    location: "Los Angeles, CA",
    period: "May 2025 - Aug. 2025",
    highlights: [
      "Led development of AI talent matching platform that connected 500+ relevant professionals with projects within 48 hours, achieving industry specific matches through a custom AHP-TOPSIS decision algorithm in TypeScript.",
      "Launched pipeline processing 100K+ candidate profiles from Apollo.io's database, reducing end-to-end matching time from manual hours to 2 minutes and reducing costs to 10 cents per project.",
      "Developed an intelligent messaging system integrated with Anthropic Claude API with sentiment analysis for detecting and resolving disagreements in messages and overall conversation assistance.",
      "Implemented live conversation platform with Firestore and WebRTC P2P video for 1,000+ concurrent users."
    ]
  },
  {
    title: "Intelligent Systems ML Engineer",
    company: "Cornell Unmanned Air Systems",
    location: "Ithaca, NY",
    period: "Oct. 2024 - Present",
    highlights: [
      "Built custom OpenAI Gym environment for autonomous aircraft navigation with realistic physics simulation, 4-dimensional continuous state/action spaces, moving obstacles, and a simulated LIDAR for obstacle detection.",
      "Accelerated PPO training pipeline by 73% (15min → 4min) through vectorized environment operations and parallelizing environments to enable faster testing of reward functions and hyperparameter tuning.",
      "Engineered multi-objective reward function for PPO agent balancing goal-seeking behavior, obstacle avoidance, and path efficiency to reach waypoints with 70% accuracy."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Experience
          </h2>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-indigo-600 rounded-lg flex-shrink-0">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-3">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-lg text-indigo-600 dark:text-indigo-400 font-semibold">
                          {exp.company}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 text-gray-600 dark:text-gray-300">
                        <div className="flex items-center gap-1">
                          <MapPin size={16} />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                        <div className="flex items-center gap-1 mt-1">
                          <Calendar size={16} />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex gap-2 text-gray-700 dark:text-gray-300">
                          <span className="text-indigo-600 dark:text-indigo-400 mt-1">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
