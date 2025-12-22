'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const benefits = [
  {
    title: 'Trusted by Businesses',
    description: 'Years of experience in software distribution with a proven track record of reliability and security.',
    stat: '99.9%',
    statLabel: 'Uptime',
  },
  {
    title: 'Lightning Fast',
    description: 'Get your software subscriptions up and running in record time with our streamlined processes.',
    stat: '< 24h',
    statLabel: 'Setup Time',
  },
  {
    title: 'Expert Support',
    description: 'Dedicated support team available around the clock to ensure your success.',
    stat: '24/7',
    statLabel: 'Support',
  },
  {
    title: 'Cost Effective',
    description: 'Optimize your software spending with our bulk licensing and smart subscription management.',
    stat: '30%',
    statLabel: 'Avg. Savings',
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
            We combine expertise, efficiency, and reliability to deliver
            exceptional software distribution services
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
              {/* Stat badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 border border-gray-800 mb-6">
                <span className="text-2xl font-bold mr-2">{benefit.stat}</span>
                <span className="text-sm text-gray-400">{benefit.statLabel}</span>
              </div>

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
