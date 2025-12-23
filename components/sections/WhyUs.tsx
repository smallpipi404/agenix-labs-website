'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    title: 'Commercial Reliability',
    description: 'We operate with clear processes and consistent commercial coordination, supporting reliable subscription distribution across partners.',
  },
  {
    title: 'Efficient Coordination',
    description: 'We streamline the commercial process between customers and software providers to support timely subscription activation.',
  },
  {
    title: 'Dedicated Point of Contact',
    description: 'We provide a consistent commercial point of contact to support communication between customers and software providers.',
  },
  {
    title: 'Operational Efficiency',
    description: 'We focus on efficient commercial coordination, reducing friction between customers and software providers throughout the subscription distribution process.',
  },
]

export default function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="why-us" ref={ref} className="py-32 bg-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Built on trusted partnerships and efficient software subscription distribution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative p-8 rounded-2xl backdrop-blur-md bg-white/5 border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] hover:bg-white/10 hover:border-purple-400/30 hover:shadow-[0_8px_32px_0_rgba(168,85,247,0.2)] transition-all duration-300"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent group-hover:from-purple-200 group-hover:to-blue-200 transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
