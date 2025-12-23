'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const steps = [
  {
    number: '01',
    title: 'Tell Us Your Needs',
    description: 'You share your requirements and context. We use this information to support alignment with suitable third-party software providers.',
  },
  {
    number: '02',
    title: 'Commercial Coordination',
    description: 'We coordinate the commercial process between customers and software providers, supporting clear communication and efficient subscription distribution.',
  },
  {
    number: '03',
    title: 'Subscription Access',
    description: 'Once commercial terms are aligned, customers gain access to third-party software subscriptions provided directly by the software provider.',
  },
]

export default function HowItWorks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="how-it-works" ref={ref} className="py-32 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three simple steps to support efficient software subscription distribution
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gray-800 to-transparent transform -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                {/* Step number circle */}
                <div className="relative flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                    whileHover={{ scale: 1.15, rotate: 10 }}
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white flex items-center justify-center text-2xl font-bold mb-6 relative z-10 shadow-[0_0_40px_rgba(96,165,250,0.6),0_0_80px_rgba(139,92,246,0.3)] backdrop-blur-sm border border-blue-400/30"
                  >
                    {step.number}
                  </motion.div>

                  <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-sm">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-20"
        >
          <a
            href="#contact"
            className="inline-flex items-center text-lg text-gray-400 hover:text-white transition-colors group"
          >
            Start a conversation →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
