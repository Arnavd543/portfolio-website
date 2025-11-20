'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4">
            Arnav Dangre
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6">
            Computer Science & Engineering Physics Student
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Cornell University | AI/ML Engineer | Software Developer
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          <a
            href="mailto:aad256@cornell.edu"
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Mail size={20} />
            <span>aad256@cornell.edu</span>
          </a>
          <a
            href="tel:8184725855"
            className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Phone size={20} />
            <span>(818) 472-5855</span>
          </a>
          <div className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-lg shadow-md">
            <MapPin size={20} />
            <span>Los Angeles, CA</span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center gap-4"
        >
          <a
            href="https://github.com/Arnavd543"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:scale-110 transition-transform"
          >
            <Github size={24} />
          </a>
          <a
            href="https://linkedin.com/in/arnav-dangre"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform"
          >
            <Linkedin size={24} />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <a
            href="#about"
            className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold hover:bg-indigo-700 transition-colors"
          >
            Learn More
          </a>
        </motion.div>
      </div>
    </section>
  );
}
