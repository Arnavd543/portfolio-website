'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative py-32 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600 text-white overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur-sm border border-white/30"
          >
            <Send className="w-4 h-4" />
            <span className="text-sm font-semibold">
              Let's Connect
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-black mb-6">
            Get In Touch
          </h2>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            I'm always excited to discuss new opportunities, collaborate on innovative projects, or simply connect with fellow tech enthusiasts.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <motion.a
            href="mailto:aad256@cornell.edu"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 rounded-2xl" />
            <div className="relative flex items-center justify-center gap-4 p-8 border border-white/20 rounded-2xl">
              <div className="p-3 bg-white/10 rounded-xl">
                <Mail size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/70 mb-1">Email</p>
                <p className="font-semibold text-lg">aad256@cornell.edu</p>
              </div>
            </div>
          </motion.a>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -5 }}
            className="group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm group-hover:bg-white/20 transition-all duration-300 rounded-2xl" />
            <div className="relative flex items-center justify-center gap-4 p-8 border border-white/20 rounded-2xl">
              <div className="p-3 bg-white/10 rounded-xl">
                <MapPin size={24} />
              </div>
              <div className="text-left">
                <p className="text-sm text-white/70 mb-1">Location</p>
                <p className="font-semibold text-lg">Los Angeles, CA</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white/90 mb-6 text-lg">
            Connect with me on
          </p>
          <div className="flex justify-center gap-6">
            <motion.a
              href="https://github.com/Arnavd543"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <Github size={32} />
              </div>
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/arnav-dangre"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-white/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
              <div className="relative p-5 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
                <Linkedin size={32} />
              </div>
            </motion.a>
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-white/20 text-center"
        >
          <p className="text-white/70">
            © 2025 Arnav Dangre. Crafted with passion and code.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
