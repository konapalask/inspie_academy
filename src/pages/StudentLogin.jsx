import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMinus, FaArrowRight, FaUser, FaLock } from 'react-icons/fa'

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
      <section className="py-32 bg-black text-white">
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
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white border border-gray-200 p-12"
            >
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
                <button
                  type="submit"
                  className="w-full bg-black text-white px-10 py-5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Login to Portal
                  <FaArrowRight className="text-xs" />
                </button>
              </form>

              {/* Demo Credentials */}
              <div className="mt-12 pt-8 border-t border-gray-200">
                <p className="text-xs tracking-[0.15em] uppercase text-gray-500 mb-4 text-center">
                  Demo Credentials
                </p>
                <div className="bg-gray-50 p-6 space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Username:</span>
                    <span className="text-gray-900 font-medium">demo_student</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500 font-light">Password:</span>
                    <span className="text-gray-900 font-medium">demo123</span>
                  </div>
                </div>
              </div>
            </motion.div>

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

          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-medium text-black mb-4 tracking-tight uppercase">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
