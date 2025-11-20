'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Education
          </h2>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-600 rounded-lg">
                <GraduationCap size={32} className="text-white" />
              </div>
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Cornell University
                    </h3>
                    <p className="text-lg text-gray-700 dark:text-gray-300">
                      College of Engineering
                    </p>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 mt-2 md:mt-0">
                    <p>Ithaca, NY</p>
                    <p className="font-semibold">Expected May 2027</p>
                  </div>
                </div>

                <div className="mt-4">
                  <p className="text-lg text-gray-800 dark:text-gray-200 mb-2">
                    <span className="font-semibold">B.S. in Computer Science and Engineering Physics</span>
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
                    GPA: <span className="font-semibold">3.66</span>
                  </p>

                  <div className="mt-4">
                    <p className="font-semibold text-gray-900 dark:text-white mb-2">Coursework:</p>
                    <p className="text-gray-700 dark:text-gray-300">
                      Data Structures and Algorithms, Discrete Mathematics, Functional Programming,
                      Multivariable Calculus, Differential Equations, Classical Physics, Machine Learning,
                      Linear Algebra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
