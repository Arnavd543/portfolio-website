'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="about" className="relative py-32 px-4 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-200/30 dark:bg-purple-900/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-200/30 dark:bg-blue-900/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building a strong foundation in Computer Science and Physics
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />

          <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="flex flex-col md:flex-row gap-8">
              {/* University Logo/Icon */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                className="flex-shrink-0"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <GraduationCap size={48} className="text-white" />
                </div>
              </motion.div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2">
                      Cornell University
                    </h3>
                    <p className="text-xl text-purple-600 dark:text-purple-400 font-semibold mb-1">
                      College of Engineering
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Ithaca, NY
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0 text-left md:text-right">
                    <p className="text-lg font-semibold text-gray-900 dark:text-white">
                      Expected May 2027
                    </p>
                    <div className="inline-flex items-center gap-2 mt-2 px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full">
                      <Award className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                      <span className="font-semibold text-gray-900 dark:text-white">
                        GPA: 3.66
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    B.S. in Computer Science and Engineering Physics
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    Dual degree program combining computational theory with physical sciences
                  </p>
                </div>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      Relevant Coursework
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Data Structures and Algorithms',
                      'Machine Learning',
                      'Discrete Mathematics',
                      'Functional Programming',
                      'Linear Algebra',
                      'Multivariable Calculus',
                      'Differential Equations',
                      'Classical Physics'
                    ].map((course, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        viewport={{ once: true }}
                        className="px-4 py-2 bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 border border-purple-200 dark:border-purple-800 rounded-full text-sm font-medium text-gray-800 dark:text-gray-200 hover:scale-105 transition-transform"
                      >
                        {course}
                      </motion.span>
                    ))}
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
