'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-blue-700 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl mb-12 text-indigo-100">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.a
              href="mailto:aad256@cornell.edu"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              <Mail size={24} />
              <span className="font-semibold">aad256@cornell.edu</span>
            </motion.a>

            <motion.a
              href="tel:8184725855"
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-colors"
            >
              <Phone size={24} />
              <span className="font-semibold">(818) 472-5855</span>
            </motion.a>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center gap-3 p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <MapPin size={24} />
              <span className="font-semibold">Los Angeles, CA</span>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-4 p-6 bg-white/10 backdrop-blur-sm rounded-xl"
            >
              <motion.a
                href="https://github.com/Arnavd543"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <Github size={24} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/arnav-dangre"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2 }}
                className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
              >
                <Linkedin size={24} />
              </motion.a>
            </motion.div>
          </div>

          <p className="text-indigo-100">
            © 2025 Arnav Dangre. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
