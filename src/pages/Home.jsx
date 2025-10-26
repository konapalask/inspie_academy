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
  FaClock,
  FaBook
} from 'react-icons/fa'
import ExamBanner from '../components/ExamBanner'
import Card3D from '../components/Card3D'
import AnimatedSection from '../components/AnimatedSection'
import ScrollingBanner from '../components/ScrollingBanner'
import { PrimaryButton, OutlineButton } from '../components/Button'
import { IconCard } from '../components/ProfessionalCard'

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all')

  // Banner images from public/banners folder
  const bannerImages = [
    '/banners/IMG_7603.PNG',
    '/banners/IMG_7605.PNG',
    '/banners/IMG_7606.PNG',
    '/banners/IMG_7607.PNG',
    '/banners/IMG_7612.PNG',
    '/banners/IMG_7615.PNG',
    '/banners/IMG_7616.PNG'
  ]

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
      features: ['Live Interactive Classes', 'Study Material', 'Mock Tests', 'Personal Mentorship'],
      whatsappMsg: 'NEET Preparation - 24 Months - 2,500+ Enrolled - Live Interactive Classes, Study Material, Mock Tests, Personal Mentorship'
    },
    {
      id: 2,
      title: 'JEE Main & Advanced',
      category: 'engineering',
      subtitle: 'Engineering Entrance',
      duration: '24 Months',
      students: '3,200+ Enrolled',
      features: ['Expert Faculty', 'Problem Sets', 'Assessments', 'Doubt Clearing'],
      whatsappMsg: 'JEE Main & Advanced - 24 Months - 3,200+ Enrolled - Expert Faculty, Problem Sets, Assessments, Doubt Clearing'
    },
    {
      id: 3,
      title: 'EAMCET Coaching',
      category: 'engineering',
      subtitle: 'State Level',
      duration: '12 Months',
      students: '1,800+ Enrolled',
      features: ['Board Alignment', 'Previous Papers', 'Test Series', 'Analytics'],
      whatsappMsg: 'EAMCET Coaching - 12 Months - 1,800+ Enrolled - Board Alignment, Previous Papers, Test Series, Analytics'
    },
    {
      id: 4,
      title: 'Foundation',
      category: 'foundation',
      subtitle: 'Class 9-10',
      duration: '12 Months',
      students: '2,100+ Enrolled',
      features: ['Conceptual Learning', 'Olympiad Prep', 'Testing', 'Tracking'],
      whatsappMsg: 'Foundation Program - 12 Months - 2,100+ Enrolled - Conceptual Learning, Olympiad Prep, Testing, Tracking'
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

      {/* Scrolling Banner */}
      <ScrollingBanner images={bannerImages} speed={40} />

      {/* Hero Section - Professional Blue Theme */}
      <section className="relative bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
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
                  className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md border border-white/30 px-8 py-4 rounded-full mb-10 shadow-xl"
                >
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                  <span className="text-sm font-bold tracking-widest uppercase text-white">Trusted by 10,000+ Students Since 2011</span>
                </motion.div>
                
                {/* Hero Heading */}
                <motion.h1 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-10 leading-[1.05] tracking-tight"
                >
                  <span className="text-white">Shape Your</span>
                  <br />
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-2xl">
                    Medical & Engineering
                  </span>
                  <br />
                  <span className="text-white">Career Today</span>
                </motion.h1>
                
                {/* Subheading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="mb-12"
                >
                  <p className="text-xl lg:text-2xl text-white/90 mb-6 leading-relaxed max-w-2xl font-medium">
                    India's Leading Coaching Institute for NEET, JEE & EAMCET Preparation
                  </p>
                  <div className="flex flex-wrap gap-4 items-center">
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl">
                      <span className="text-3xl font-bold text-cyan-400">85%</span>
                      <span className="text-sm text-white/80 font-semibold">Success Rate</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl">
                      <span className="text-3xl font-bold text-blue-400">500+</span>
                      <span className="text-sm text-white/80 font-semibold">Top Rankers</span>
                    </div>
                    <div className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-xl">
                      <span className="text-3xl font-bold text-indigo-400">13+</span>
                      <span className="text-sm text-white/80 font-semibold">Years Excellence</span>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Buttons with WhatsApp and Blog */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="flex flex-col gap-6"
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <PrimaryButton to="/admissions">
                      Start Your Journey
                    </PrimaryButton>
                    
                    <OutlineButton to="/courses">
                      Explore Programs
                    </OutlineButton>
                  </div>

                  {/* WhatsApp and Blog Banners */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* WhatsApp Banner */}
                    <motion.a 
                      href="https://wa.me/919848628863"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                      className="group relative overflow-hidden bg-gradient-to-br from-green-500 via-emerald-600 to-green-600 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-green-400/30"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="flex items-center gap-3 relative z-10">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <FaUsers className="text-2xl text-white" />
                          </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-base uppercase tracking-wide mb-1">Want to Join?</h3>
                          <p className="text-sm text-white/90 font-medium">Chat with us on WhatsApp</p>
                        </div>
                        <FaArrowRight className="text-lg group-hover:translate-x-2 transition-transform duration-300" />
                      </div>
                    </motion.a>

                    {/* Blog Banner */}
                    <motion.div
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Link 
                        to="/blog"
                        className="group relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-blue-400/30 block"
                      >
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                        <div className="flex items-center gap-3 relative z-10">
                          <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                            <FaBook className="text-2xl text-white" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-base uppercase tracking-wide mb-1">Latest Information</h3>
                            <p className="text-sm text-white/90 font-medium">Read our Blog</p>
                          </div>
                          <FaArrowRight className="text-lg group-hover:translate-x-2 transition-transform duration-300" />
                        </div>
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              {/* Right Content - Visual Elements */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="relative three-d-container"
              >
                {/* Floating Cards */}
                <div className="relative card-3d">
                  {/* Main Card */}
                  <div className="bg-white/10 backdrop-blur-md border border-white/30 rounded-2xl p-10 shadow-2xl transform hover:scale-105 transition-all duration-500">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-blue-500 via-cyan-500 to-indigo-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl transform hover:rotate-12 transition-all duration-500">
                        <FaGraduationCap className="text-4xl text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-3">NEET 2025</h3>
                      <p className="text-white/80 text-base mb-6">Medical Entrance Preparation</p>
                      <div className="flex justify-between text-base p-4 bg-white/5 rounded-xl backdrop-blur-sm">
                        <span className="text-white/70 font-medium">Success Rate</span>
                        <span className="text-cyan-400 font-bold text-xl">85%</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [-15, 15, -15], rotate: [0, 5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-6 -right-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border border-blue-400/30 flex items-center gap-2"
                  >
                    <FaTrophy className="text-sm" />
                    Top Rankers
                  </motion.div>

                  <motion.div
                    animate={{ y: [15, -15, 15], rotate: [0, -5, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute -bottom-6 -left-6 bg-gradient-to-br from-indigo-600 via-blue-600 to-indigo-700 text-white px-6 py-3 rounded-xl text-sm font-bold shadow-2xl border border-indigo-400/30 flex items-center gap-2"
                  >
                    <FaChalkboardTeacher className="text-sm" />
                    Expert Faculty
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

      </section>

      {/* Comprehensive Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
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

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 three-d-container">
            {[
              { number: '10,000+', label: 'Students Trained', color: 'from-blue-500 to-cyan-500', icon: FaUsers },
              { number: '85%', label: 'Success Rate', color: 'from-cyan-500 to-blue-500', icon: FaTrophy },
              { number: '500+', label: 'Top Rankers', color: 'from-indigo-500 to-blue-500', icon: FaGraduationCap },
              { number: '13+', label: 'Years Experience', color: 'from-sky-500 to-blue-500', icon: FaBookOpen }
            ].map((stat, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card3D className="text-center group">
                  <div className="relative p-8 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl card-3d">
                    <div className={`w-20 h-20 bg-gradient-to-br ${stat.color} rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 layer-3`}>
                      <stat.icon className="text-3xl text-white" />
                    </div>
                    <div className="text-5xl lg:text-6xl font-bold mb-3 layer-2">{stat.number}</div>
                    <div className="text-white/90 font-semibold text-sm uppercase tracking-wider layer-1">{stat.label}</div>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
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
              Why Choose <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Inspire Academy</span>
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

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 three-d-container">
            {features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <IconCard 
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  className="group"
                />
              </AnimatedSection>
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
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide uppercase text-blue-600">Our Programs</span>
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold text-slate-900 mb-8"
            >
              Academic <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Excellence</span>
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
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'bg-white border border-blue-300 text-blue-700 hover:border-blue-600'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 three-d-container">
            {courses
              .filter(course => activeCategory === 'all' || course.category === activeCategory)
              .map((course, index) => (
                <AnimatedSection key={course.id} delay={index * 0.1}>
                  <div className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-200 gradient-overlay h-full flex flex-col">
                    {/* Course Header */}
                    <div className="relative p-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 flex-shrink-0">
                      <div className="absolute top-4 right-4">
                        <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full animate-pulse shadow-lg"></div>
                      </div>
                      <div className="text-xs font-bold text-blue-600 mb-3 uppercase tracking-widest layer-1">{course.subtitle}</div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-6 layer-2">{course.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-slate-600 mb-4 layer-1">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                            <FaClock className="text-blue-600 text-sm" />
                          </div>
                          <span className="font-medium">{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
                            <FaUsers className="text-indigo-600 text-sm" />
                          </div>
                          <span className="font-medium">{course.students}</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Course Features */}
                    <div className="p-8 bg-white flex-1 flex flex-col">
                      <h4 className="font-bold text-slate-900 mb-6 text-sm uppercase tracking-wider">What's Included:</h4>
                      <div className="space-y-3 mb-auto">
                        {course.features.map((feature, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className="w-4 h-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded flex items-center justify-center flex-shrink-0 mt-1">
                              <FaCheckCircle className="text-white text-[10px]" />
                            </div>
                            <span className="text-sm text-slate-700 leading-snug">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-6 pt-6 border-t border-blue-100">
                        <a
                          href={`https://wa.me/919848628863?text=Hi%2C%20I%20want%20to%20enroll%20in%20${encodeURIComponent(course.title)}.%20Details:%20${encodeURIComponent(course.whatsappMsg)}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-8 py-4 text-xs tracking-wider uppercase font-bold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center gap-2"
                        >
                          <span>ENROLL NOW</span>
                          <FaArrowRight className="text-xs" />
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Testimonials Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 to-indigo-900 text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 mb-8"
            >
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wide uppercase text-cyan-400">Success Stories</span>
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-6xl font-bold mb-8"
            >
              Student <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Achievements</span>
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

          <div className="grid md:grid-cols-3 gap-8 three-d-container">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <Card3D className="group bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 card-3d gradient-overlay">
                  <div className="relative p-8">
                    <div className="flex items-center gap-4 mb-6 layer-2">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 rounded-2xl flex items-center justify-center text-white font-bold text-2xl shadow-xl transform group-hover:scale-110 transition-all duration-500">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-slate-900 text-lg">{testimonial.name}</div>
                        <div className="text-sm text-blue-600 font-semibold">{testimonial.course}</div>
                      </div>
                    </div>
                    
                    <div className="mb-6 p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200 layer-1">
                      <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">{testimonial.achievement}</div>
                      <div className="text-sm text-slate-700 font-semibold">{testimonial.institution}</div>
                    </div>
                    
                    <p className="text-slate-600 leading-relaxed text-sm mb-6 font-medium">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex gap-2 pt-4 border-t border-blue-200">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FaTrophy className="text-blue-600 text-sm" />
                      </div>
                      <div className="flex-1">
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Verified Achievement</div>
                        <div className="text-sm text-slate-700 font-bold">Success Story 2024</div>
                      </div>
                    </div>
                  </div>
                </Card3D>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
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
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-5 rounded-xl text-slate-900 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 border-2 border-white/20 font-medium"
              />
              <PrimaryButton onClick={() => {}} icon={false} className="whitespace-nowrap">
                Subscribe
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
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
              <PrimaryButton to="/admissions">
                Start Your Journey
              </PrimaryButton>
              <OutlineButton to="/contact">
                Contact Us
              </OutlineButton>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
