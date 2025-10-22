import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaMinus, FaCheckCircle, FaArrowRight, FaClock, FaUsers, FaBook } from 'react-icons/fa'

export default function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const courses = [
    {
      id: 1,
      title: 'NEET Preparation',
      category: 'medical',
      subtitle: 'Medical Entrance Excellence',
      duration: '24 Months',
      batchSize: '25 Students',
      sessions: '6 Days/Week',
      price: '₹75,000',
      period: 'per year',
      description: 'Comprehensive program designed for students aspiring to pursue medical education through rigorous preparation and expert guidance.',
      features: [
        'Complete syllabus coverage for Physics, Chemistry, and Biology',
        'Daily practice sessions with experienced faculty members',
        'Weekly mock tests following the latest examination pattern',
        'Personal mentorship and performance tracking',
        'Comprehensive study materials and practice papers',
        'Doubt clearing sessions and revision classes'
      ],
      highlights: [
        '85% success rate in NEET examinations',
        'Top rankers in previous batches',
        'Updated curriculum as per latest guidelines'
      ]
    },
    {
      id: 2,
      title: 'JEE Main & Advanced',
      category: 'engineering',
      subtitle: 'Engineering Entrance Mastery',
      duration: '24 Months',
      batchSize: '25 Students',
      sessions: '6 Days/Week',
      price: '₹80,000',
      period: 'per year',
      description: 'Intensive coaching program for IIT-JEE aspirants focusing on conceptual clarity and advanced problem-solving techniques.',
      features: [
        'In-depth coverage of Mathematics, Physics, and Chemistry',
        'Advanced problem-solving methodologies',
        'Regular assessments and performance analysis',
        'IIT alumni mentorship program',
        'Extensive question banks and practice materials',
        'Crash courses for final preparation'
      ],
      highlights: [
        'Consistent top ranks in JEE examinations',
        'Expert faculty from premier institutions',
        'Proven track record of IIT admissions'
      ]
    },
    {
      id: 3,
      title: 'EAMCET Coaching',
      category: 'engineering',
      subtitle: 'State Level Engineering',
      duration: '12 Months',
      batchSize: '25 Students',
      sessions: '6 Days/Week',
      price: '₹60,000',
      period: 'per year',
      description: 'Specialized program for EAMCET preparation aligned with state board curriculum and examination requirements.',
      features: [
        'State board curriculum integrated preparation',
        'Extensive previous year question papers',
        'Regular mock test series and analysis',
        'Comprehensive study materials',
        'Performance tracking and improvement plans',
        'Exam strategy and time management training'
      ],
      highlights: [
        'High success rate in EAMCET examinations',
        'Board-aligned teaching methodology',
        'Focus on state-level examination patterns'
      ]
    },
    {
      id: 4,
      title: 'Foundation Program',
      category: 'foundation',
      subtitle: 'Class 9-10 Excellence',
      duration: '12 Months',
      batchSize: '20 Students',
      sessions: '5 Days/Week',
      price: '₹50,000',
      period: 'per year',
      description: 'Building strong conceptual foundation for students in classes 9 and 10 to excel in board examinations and competitive preparation.',
      features: [
        'Conceptual clarity in core subjects',
        'Olympiad and competitive exam preparation',
        'Regular testing and assessment',
        'Interactive learning methodologies',
        'Individual attention and guidance',
        'Foundation for advanced competitive preparation'
      ],
      highlights: [
        'Strong foundation for future success',
        'Board examination excellence',
        'Early preparation for competitive exams'
      ]
    }
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === selectedCategory)

  const categories = [
    { value: 'all', label: 'All Programs' },
    { value: 'medical', label: 'Medical' },
    { value: 'engineering', label: 'Engineering' },
    { value: 'foundation', label: 'Foundation' }
  ]

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
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Programs</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Academic <span className="font-semibold">Excellence</span>
              <br />
              Programs
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Comprehensive coaching programs designed to maximize student potential through expert instruction, 
              rigorous preparation, and personalized attention.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-16 bg-gray-50 border-y border-gray-200">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                className={`px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 ${
                  selectedCategory === category.value
                    ? 'bg-black text-white'
                    : 'bg-white border border-gray-300 text-gray-700 hover:border-black'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses List */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="space-y-20">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="grid lg:grid-cols-2 gap-16 border-b border-gray-200 pb-20 last:border-0"
              >
                {/* Left Column - Info */}
                <div>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <FaMinus className="text-xs" />
                    <span className="text-xs tracking-[0.2em] uppercase text-gray-500">{course.subtitle}</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">
                    {course.title}
                  </h2>

                  <p className="text-gray-600 leading-relaxed font-light mb-8">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-gray-200">
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <FaClock className="text-xs" />
                        <span className="text-xs tracking-wider uppercase">Duration</span>
                      </div>
                      <div className="font-medium text-black">{course.duration}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <FaUsers className="text-xs" />
                        <span className="text-xs tracking-wider uppercase">Batch Size</span>
                      </div>
                      <div className="font-medium text-black">{course.batchSize}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-gray-500 mb-2">
                        <FaBook className="text-xs" />
                        <span className="text-xs tracking-wider uppercase">Sessions</span>
                      </div>
                      <div className="font-medium text-black">{course.sessions}</div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-5xl font-light">{course.price}</span>
                      <span className="text-sm text-gray-500 tracking-wider">{course.period}</span>
                    </div>
                  </div>

                  <Link
                    to="/admissions"
                    className="inline-flex items-center gap-3 bg-black text-white px-10 py-5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-all duration-500"
                  >
                    Enroll Now
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>

                {/* Right Column - Features */}
                <div>
                  <div className="bg-gray-50 p-10 h-full">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-8">Program Features</h3>
                    
                    <div className="space-y-4 mb-12">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <FaMinus className="text-xs mt-2 flex-shrink-0" />
                          <span className="text-sm text-gray-700 font-light leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-gray-200">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-6">Key Highlights</h3>
                      <div className="space-y-3">
                        {course.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3">
                            <FaCheckCircle className="text-black mt-1 flex-shrink-0" />
                            <span className="text-sm text-gray-700 font-light">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl font-light mb-8 tracking-tight leading-tight">
              Ready to <span className="font-semibold">Excel?</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 font-light">
              Begin your journey towards academic excellence with our proven coaching programs
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
