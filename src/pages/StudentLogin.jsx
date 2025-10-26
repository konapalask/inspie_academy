import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMinus, FaArrowRight, FaUser, FaLock } from 'react-icons/fa'
import Card3D from '../components/Card3D'
import AnimatedSection from '../components/AnimatedSection'
import { SubmitButton } from '../components/Button'

export default function StudentLogin() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Redirect to demo platform
    window.open('https://inspireexams.com/', '_blank', 'noopener,noreferrer')
  }

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Student Portal</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Student <span className="font-semibold">Login</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Access your personalized learning dashboard, study materials, and performance analytics.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Login Form Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-xl mx-auto">
            <AnimatedSection>
              <Card3D className="bg-white rounded-2xl border border-slate-200 p-12 shadow-xl hover:shadow-2xl transition-all duration-500 card-3d gradient-overlay">
                <div className="relative">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <FaMinus className="text-xs" />
                  <h2 className="text-xs tracking-[0.2em] uppercase text-gray-500">Access Portal</h2>
                  <FaMinus className="text-xs" />
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Username Field */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Student ID / Username
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 pl-12 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                      placeholder="Enter your student ID"
                    />
                    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 pl-12 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                      placeholder="Enter your password"
                    />
                    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                  </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 border-gray-300" />
                    <span className="text-gray-600 font-light">Remember me</span>
                  </label>
                  <button type="button" className="text-gray-600 hover:text-black transition-colors font-light">
                    Forgot password?
                  </button>
                </div>

                {/* Submit Button */}
                <SubmitButton>
                  Login to Portal
                </SubmitButton>
              </form>

              {/* Demo Credentials */}
              <div className="mt-12 pt-8 border-t border-blue-200">
                <p className="text-xs tracking-[0.15em] uppercase text-blue-600 mb-4 text-center font-bold">
                  Demo Credentials
                </p>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl space-y-2 text-sm border border-blue-200">
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Username:</span>
                    <span className="text-slate-900 font-bold">demo_student</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 font-medium">Password:</span>
                    <span className="text-slate-900 font-bold">demo123</span>
                  </div>
                </div>
              </div>
                </div>
              </Card3D>
            </AnimatedSection>

            {/* Help Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center mt-12"
            >
              <p className="text-gray-600 font-light mb-4">
                New student? Contact admissions to get your login credentials.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase font-medium text-black hover:gap-4 transition-all duration-300"
              >
                Contact Support
                <FaArrowRight className="text-xs" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Portal Features</span>
              <FaMinus className="text-xs" />
            </div>
            
            <h2 className="text-4xl font-light text-black tracking-tight">
              What You'll <span className="font-semibold">Access</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto three-d-container">
            {[
              {
                title: 'Study Materials',
                description: 'Access comprehensive notes, practice papers, and reference materials'
              },
              {
                title: 'Mock Tests',
                description: 'Take unlimited mock tests and track your performance analytics'
              },
              {
                title: 'Live Classes',
                description: 'Join live interactive sessions and recorded lecture library'
              }
            ].map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card3D className="text-center card-3d h-full">
                  <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200 gradient-overlay h-full flex flex-col">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-xl layer-3 flex-shrink-0">
                      <span className="text-white text-2xl font-bold">{feature.title.charAt(0)}</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight uppercase layer-2">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed font-medium layer-1 mb-auto">
                      {feature.description}
                    </p>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
