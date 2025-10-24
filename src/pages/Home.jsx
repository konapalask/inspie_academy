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
  FaMinus,
  FaClock
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

      {/* Hero Section - Premium Education */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-2xl animate-pulse delay-2000"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-16 xl:px-24 py-20 sm:py-32 lg:py-48 relative z-10 w-full">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <div>
                {/* Premium Badge */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8"
                >
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium tracking-wide uppercase">Trusted by 10,000+ Students</span>
                </motion.div>
                
                {/* Hero Heading */}
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] tracking-tight"
                >
                  Transform Your
                  <br />
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Academic Future
                  </span>
                </motion.h1>
                
                {/* Subheading */}
                <motion.p 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="text-xl lg:text-2xl text-white/80 mb-12 leading-relaxed max-w-2xl font-light"
                >
                  Join India's premier coaching institute for NEET, JEE, and EAMCET. 
                  <span className="text-blue-400 font-semibold"> 85% success rate</span> with expert faculty and proven methodologies.
                </motion.p>

                {/* Key Stats */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="grid grid-cols-3 gap-8 mb-12"
                >
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">10K+</div>
                    <div className="text-sm text-white/60 uppercase tracking-wide">Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-green-400 mb-2">85%</div>
                    <div className="text-sm text-white/60 uppercase tracking-wide">Success Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-purple-400 mb-2">13+</div>
                    <div className="text-sm text-white/60 uppercase tracking-wide">Years</div>
                  </div>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-6"
                >
                  <Link 
                    to="/admissions"
                    className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Start Your Journey
                    <FaArrowRight className="text-sm group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                  
                  <Link 
                    to="/courses" 
                    className="inline-flex items-center justify-center gap-3 border-2 border-white/30 text-white px-8 py-4 font-semibold text-sm tracking-wide hover:bg-white hover:text-slate-900 transition-all duration-300 rounded-xl backdrop-blur-sm"
                  >
                    Explore Programs
                  </Link>
                </motion.div>
              </div>

              {/* Right Content - Visual Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative"
              >
                {/* Floating Cards */}
                <div className="relative">
                  {/* Main Card */}
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <FaGraduationCap className="text-2xl text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">NEET 2024</h3>
                      <p className="text-white/70 text-sm mb-4">Medical Entrance Preparation</p>
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">Success Rate</span>
                        <span className="text-green-400 font-bold">92%</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                  >
                    Top Rankers
                  </motion.div>

                  <motion.div
                    animate={{ y: [10, -10, 10] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-lg"
                  >
                    Expert Faculty
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* Comprehensive Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Transforming lives through education with measurable results and consistent excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Students Trained', icon: '👨‍🎓', color: 'from-blue-500 to-cyan-500' },
              { number: '85%', label: 'Success Rate', icon: '🏆', color: 'from-green-500 to-emerald-500' },
              { number: '500+', label: 'Top Rankers', icon: '🥇', color: 'from-yellow-500 to-orange-500' },
              { number: '13+', label: 'Years Experience', icon: '📚', color: 'from-purple-500 to-pink-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className={`w-20 h-20 bg-gradient-to-r ${stat.color} rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide uppercase text-blue-600">Our Strengths</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8"
            >
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Inspire Academy</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-3xl mx-auto"
            >
              We combine traditional teaching excellence with modern technology to deliver unparalleled results
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                <div className="mt-6 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Courses Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide uppercase text-green-600">Our Programs</span>
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8"
            >
              Academic <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Excellence</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-slate-600 max-w-3xl mx-auto mb-12"
            >
              Comprehensive programs designed to maximize your potential and achieve your academic goals
            </motion.p>

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
                  className={`px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 rounded-lg ${
                    activeCategory === category.value
                      ? 'bg-slate-900 text-white'
                      : 'bg-white border border-slate-300 text-slate-700 hover:border-slate-900'
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
                  className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border border-slate-100"
                >
                  {/* Course Header */}
                  <div className="relative p-8 bg-gradient-to-br from-slate-50 to-blue-50">
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                    <div className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-wide">{course.subtitle}</div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{course.title}</h3>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-4xl font-bold text-slate-900">{course.price}</span>
                      <span className="text-sm text-slate-500">{course.period}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-slate-600">
                      <div className="flex items-center gap-2">
                        <FaClock className="text-blue-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaUsers className="text-green-500" />
                        <span>{course.students}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Course Features */}
                  <div className="p-8">
                    <h4 className="font-semibold text-slate-900 mb-4">What's Included:</h4>
                    <div className="space-y-3 mb-8">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-slate-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Link 
                      to="/admissions"
                      className="block w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white text-center py-4 font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
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
      <section className="py-32 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide uppercase text-yellow-400">Success Stories</span>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold mb-8"
            >
              Student <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Achievements</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-white/80 max-w-3xl mx-auto"
            >
              Real stories from our successful students who achieved their dreams with Inspire Academy
            </motion.p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-white/60">{testimonial.course}</div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <div className="text-2xl font-bold text-yellow-400 mb-1">{testimonial.achievement}</div>
                  <div className="text-sm text-white/70">{testimonial.institution}</div>
                </div>
                
                <p className="text-white/80 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                
                <div className="mt-6 flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FaTrophy key={i} className="text-sm" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">Stay Updated</h2>
            <p className="text-xl text-white/80 mb-12">
              Get the latest updates on admissions, exam dates, and success stories
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-blue-600 px-8 py-4 font-semibold rounded-xl hover:bg-slate-100 transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium tracking-wide uppercase">Ready to Start?</span>
              </div>
              
              <h2 className="text-5xl lg:text-6xl font-bold mb-8">
                Begin Your <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Academic Journey</span>
              </h2>
              
              <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
                Join thousands of successful students who achieved their academic goals with our proven methodology and expert guidance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-6 justify-center"
            >
              <Link 
                to="/admissions"
                className="group inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-12 py-6 font-semibold text-lg rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:-translate-y-1"
              >
                Start Your Journey
                <FaArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center border-2 border-white/30 text-white px-12 py-6 font-semibold text-lg rounded-xl hover:bg-white hover:text-slate-900 transition-all duration-300 backdrop-blur-sm"
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
