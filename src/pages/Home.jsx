import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaGraduationCap, 
  FaBookOpen, 
  FaTrophy, 
  FaUsers,
  FaChalkboardTeacher,
  FaLaptopCode,
  FaCertificate,
  FaCheckCircle,
  FaArrowRight,
  FaQuoteLeft,
  FaMinus
} from 'react-icons/fa'
import ExamBanner from '../components/ExamBanner'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  const stats = [
    { number: '10,000+', label: 'Students' },
    { number: '85%', label: 'Success' },
    { number: '10+', label: 'Programs' },
    { number: '13+', label: 'Years' }
  ]

  const courses = [
    {
      id: 1,
      title: 'NEET Preparation',
      category: 'medical',
      subtitle: 'Medical Entrance',
      duration: '24 Months',
      students: '2,500+ Enrolled',
      price: '₹75,000',
      period: 'per year',
      features: ['Live Interactive Classes', 'Study Material', 'Mock Tests', 'Personal Mentorship']
    },
    {
      id: 2,
      title: 'JEE Main & Advanced',
      category: 'engineering',
      subtitle: 'Engineering Entrance',
      duration: '24 Months',
      students: '3,200+ Enrolled',
      price: '₹80,000',
      period: 'per year',
      features: ['Expert Faculty', 'Problem Sets', 'Assessments', 'Doubt Clearing']
    },
    {
      id: 3,
      title: 'EAMCET Coaching',
      category: 'engineering',
      subtitle: 'State Level',
      duration: '12 Months',
      students: '1,800+ Enrolled',
      price: '₹60,000',
      period: 'per year',
      features: ['Board Alignment', 'Previous Papers', 'Test Series', 'Analytics']
    },
    {
      id: 4,
      title: 'Foundation',
      category: 'foundation',
      subtitle: 'Class 9-10',
      duration: '12 Months',
      students: '2,100+ Enrolled',
      price: '₹50,000',
      period: 'per year',
      features: ['Conceptual Learning', 'Olympiad Prep', 'Testing', 'Tracking']
    }
  ]

  const testimonials = [
    {
      name: 'Rahul Kumar',
      course: 'JEE Main 2024',
      achievement: 'AIR 156',
      institution: 'IIT Delhi',
      quote: 'The structured approach and dedicated faculty at Inspire Academy helped me secure admission to IIT Delhi.'
    },
    {
      name: 'Priya Sharma',
      course: 'NEET 2024',
      achievement: 'AIR 892',
      institution: 'AIIMS',
      quote: 'Comprehensive study materials and expert mentorship prepared me thoroughly for the examination.'
    },
    {
      name: 'Amit Singh',
      course: 'EAMCET 2024',
      achievement: 'State Rank 89',
      institution: 'JNTU Kakinada',
      quote: 'Small batch sizes ensured individual attention from experienced faculty members.'
    }
  ]

  const features = [
    {
      icon: FaChalkboardTeacher,
      title: 'Expert Faculty',
      description: 'Highly qualified educators with extensive experience in competitive examination coaching'
    },
    {
      icon: FaLaptopCode,
      title: 'Hybrid Learning',
      description: 'Seamless integration of traditional instruction with modern digital resources'
    },
    {
      icon: FaTrophy,
      title: 'Proven Results',
      description: 'Consistent track record of excellence with 85% success rate annually'
    },
    {
      icon: FaCertificate,
      title: 'Resources',
      description: 'Comprehensive study materials and extensive practice test series'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Exam Banner - positioned below fixed navbar */}
      <div className="pt-20">
        <ExamBanner />
      </div>

      {/* Hero Section - Ultra Premium */}
      <section className="relative bg-black text-white overflow-hidden min-h-[85vh] sm:min-h-screen flex items-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-20 sm:py-32 lg:py-48 relative z-10 w-full">
          <div className="max-w-5xl">
            {/* Premium Tag */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 sm:gap-3 border border-white/20 px-4 sm:px-6 py-2 sm:py-3 mb-8 sm:mb-12"
            >
              <FaMinus className="text-[8px] sm:text-xs" />
              <span className="text-[10px] sm:text-xs font-light tracking-[0.15em] sm:tracking-[0.2em] uppercase">Premium Education</span>
            </motion.div>
            
            {/* Hero Heading */}
              <motion.h1 
              initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light mb-6 sm:mb-8 leading-[1.15] sm:leading-[1.1] tracking-tight"
              >
              Excellence in
                <br />
              <span className="font-semibold">Academic Preparation</span>
              </motion.h1>
              
            {/* Subheading */}
              <motion.p 
              initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base sm:text-lg lg:text-xl text-white/70 mb-10 sm:mb-16 leading-relaxed max-w-2xl font-light tracking-normal sm:tracking-wide"
              >
              Inspire Academy delivers world-class coaching for NEET, JEE, and EAMCET with proven methodologies and expert faculty.
              </motion.p>

            {/* CTA Buttons */}
              <motion.div 
              initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6"
            >
              <Link 
                to="/admissions"
                className="group inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-black px-8 sm:px-12 py-4 sm:py-6 font-medium text-xs sm:text-sm tracking-[0.1em] uppercase hover:bg-gray-100 transition-all duration-500"
              >
                Enroll Now
                <FaArrowRight className="text-[10px] sm:text-xs group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              
                <Link 
                  to="/courses" 
                className="inline-flex items-center justify-center gap-2 sm:gap-3 border border-white/30 text-white px-8 sm:px-12 py-4 sm:py-6 font-medium text-xs sm:text-sm tracking-[0.1em] uppercase hover:bg-white hover:text-black transition-all duration-500"
              >
                View Programs
              </Link>
            </motion.div>
                </div>

          {/* Premium Stats */}
                  <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="hidden lg:block absolute bottom-12 right-6 lg:right-16 xl:right-24"
          >
            <div className="grid grid-cols-2 gap-8 text-right">
              {stats.map((stat, index) => (
                <div key={index} className="border-t border-white/20 pt-4">
                  <div className="text-4xl font-light mb-1">{stat.number}</div>
                  <div className="text-white/50 text-xs tracking-[0.15em] uppercase">{stat.label}</div>
                </div>
              ))}
              </div>
            </motion.div>
            
            {/* Mobile Stats - Below Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="lg:hidden mt-16 pt-12 border-t border-white/10"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl sm:text-4xl font-light mb-2">{stat.number}</div>
                    <div className="text-white/50 text-[10px] sm:text-xs tracking-[0.15em] uppercase">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Features Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-24">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Our Strengths</span>
              <FaMinus className="text-xs" />
          </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-light text-black mb-6 tracking-tight"
            >
              Why Choose <span className="font-semibold">Inspire Academy</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group"
              >
                <div className="mb-8">
                  <feature.icon className="text-4xl text-black" />
                </div>
                <h3 className="text-xl font-medium text-black mb-4 tracking-tight uppercase">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
                <div className="w-12 h-px bg-black mt-6 group-hover:w-full transition-all duration-700"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Courses Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Programs</span>
              <FaMinus className="text-xs" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-light text-black mb-12 tracking-tight"
            >
              Academic <span className="font-semibold">Programs</span>
            </motion.h2>

            {/* Premium Category Filter */}
            <div className="flex flex-wrap justify-center gap-6">
              {[
                { value: 'all', label: 'All' },
                { value: 'medical', label: 'Medical' },
                { value: 'engineering', label: 'Engineering' },
                { value: 'foundation', label: 'Foundation' }
              ].map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
                    activeCategory === category.value
                      ? 'bg-black text-white'
                      : 'bg-white border border-gray-300 text-gray-700 hover:border-black'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {courses
              .filter(course => activeCategory === 'all' || course.category === activeCategory)
              .map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="bg-white border border-gray-200 hover:border-black transition-all duration-700 group overflow-hidden"
                >
                  <div className="p-10 border-b border-gray-200">
                    <div className="text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">{course.subtitle}</div>
                    <h3 className="text-2xl font-medium text-black mb-2 tracking-tight">{course.title}</h3>
                    <div className="flex items-baseline gap-2 mt-8">
                      <span className="text-4xl font-light">{course.price}</span>
                      <span className="text-xs text-gray-500 tracking-wider">{course.period}</span>
                    </div>
                  </div>
                  
                  <div className="p-10">
                    <div className="space-y-4 mb-10">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaMinus className="text-xs mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-600 font-light">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-xs text-gray-500 mb-4 tracking-wider">{course.duration} • {course.students}</div>

                    <Link 
                      to="/admissions"
                      className="block w-full bg-black text-white text-center py-4 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-all duration-500"
                    >
                      Enroll Now
                    </Link>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Testimonials Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-24">
          <motion.div 
              initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
          >
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Success Stories</span>
              <FaMinus className="text-xs" />
          </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl sm:text-6xl font-light text-black tracking-tight"
            >
              Student <span className="font-semibold">Achievements</span>
            </motion.h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="bg-gray-50 p-12 border border-gray-200"
              >
                <FaQuoteLeft className="text-2xl text-gray-300 mb-8" />
                
                <p className="text-gray-700 leading-relaxed mb-10 font-light">
                  {testimonial.quote}
                </p>
                
                <div className="pt-8 border-t border-gray-200">
                  <div className="font-medium text-black tracking-tight mb-1">{testimonial.name}</div>
                  <div className="text-xs text-gray-500 tracking-wider uppercase mb-2">{testimonial.course}</div>
                  <div className="text-sm font-medium text-black">{testimonial.achievement}</div>
                  <div className="text-xs text-gray-500 mt-1">{testimonial.institution}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-4xl mx-auto text-center">
          <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-12"
            >
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Get Started</span>
              <FaMinus className="text-xs" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-5xl sm:text-6xl font-light mb-8 tracking-tight leading-tight"
            >
              Begin Your
              <br />
              <span className="font-semibold">Academic Journey</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/70 mb-16 font-light leading-relaxed"
            >
              Join thousands of successful students who achieved their academic goals with our proven methodology and expert guidance.
            </motion.p>
            
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                to="/admissions"
                className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 font-medium text-xs tracking-[0.15em] uppercase hover:bg-gray-100 transition-all duration-500"
              >
                Enroll Now
                <FaArrowRight className="text-xs" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center border border-white/30 text-white px-12 py-6 font-medium text-xs tracking-[0.15em] uppercase hover:bg-white hover:text-black transition-all duration-500"
              >
                Contact Us
                </Link>
              </motion.div>
            </div>
        </div>
      </section>
    </div>
  )
}
