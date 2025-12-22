'use client'

import { motion } from 'framer-motion'
import Button from '../Button'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background gradient with tech colors */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(96,165,250,0.15),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(167,139,250,0.1),transparent_50%)]" />
      
      {/* Enhanced grid pattern with glow */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(96,165,250,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(96,165,250,0.1)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge with glassmorphism */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center px-6 py-3 rounded-full backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-blue-400 mr-3 animate-pulse" />
            <span className="text-sm text-gray-300">Trusted Software Distribution Partner</span>
          </motion.div>

          {/* Main headline with gradient */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Premium Software
            </span>
            <br />
            <span className="text-gray-400">Distribution</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            We connect enterprises and individuals with world-class software providers through strategic partnerships.
          </motion.p>

          {/* Trust indicators with glassmorphism */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-20 flex flex-wrap justify-center gap-6 text-sm"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <span className="text-gray-300">Enterprise-Grade Security</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <span className="text-gray-300">24/7 Support</span>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex items-center gap-3 px-6 py-3 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
            >
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.5)]" />
              <span className="text-gray-300">Global Reach</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-gray-600"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  )
}
