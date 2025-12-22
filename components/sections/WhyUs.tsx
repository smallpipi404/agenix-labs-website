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
              className="group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-transparent border border-gray-800 hover:border-gray-700 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed">{benefit.description}</p>

              {/* Hover effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/0 to-white/0 group-hover:from-white/5 group-hover:to-white/0 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
