import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FaMinus, FaCheckCircle, FaArrowRight, FaClock, FaUsers, FaBook } from 'react-icons/fa'
import Card3D from '../components/Card3D'
import AnimatedSection from '../components/AnimatedSection'
import { PrimaryButton, OutlineButton } from '../components/Button'

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
      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
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
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="flex flex-wrap justify-center gap-6">
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => setSelectedCategory(category.value)}
                  className={`px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-500 rounded-lg ${
                    selectedCategory === category.value
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white'
                      : 'bg-white border border-blue-300 text-blue-700 hover:border-blue-600'
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
          <div className="space-y-20 three-d-container">
            {filteredCourses.map((course, index) => (
              <AnimatedSection key={course.id} delay={index * 0.1}>
                <Card3D className="grid lg:grid-cols-2 gap-16 p-12 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-200 card-3d gradient-overlay min-h-[600px]">
                  {/* Left Column - Info */}
                  <div>
                  <div className="inline-flex items-center gap-3 mb-6">
                    <FaMinus className="text-xs" />
                    <span className="text-xs tracking-[0.2em] uppercase text-slate-500">{course.subtitle}</span>
                  </div>

                  <h2 className="text-4xl sm:text-5xl font-light mb-6 tracking-tight">
                    {course.title}
                  </h2>

                  <p className="text-slate-600 leading-relaxed font-light mb-8">
                    {course.description}
                  </p>

                  {/* Course Details */}
                  <div className="grid grid-cols-3 gap-6 mb-12 py-8 border-y border-slate-200">
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <FaClock className="text-xs" />
                        <span className="text-xs tracking-wider uppercase">Duration</span>
                      </div>
                      <div className="font-medium text-slate-900">{course.duration}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <FaUsers className="text-xs" />
                        <span className="text-xs tracking-wider uppercase">Batch Size</span>
                      </div>
                      <div className="font-medium text-slate-900">{course.batchSize}</div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 text-slate-500 mb-2">
                        <FaBook className="text-xs" />
                        <span className="text-xs tracking-wider uppercase">Sessions</span>
                      </div>
                      <div className="font-medium text-slate-900">{course.sessions}</div>
                    </div>
                  </div>

                  <PrimaryButton to="/admissions">
                    Enroll Now
                  </PrimaryButton>
                </div>

                {/* Right Column - Features */}
                <div>
                  <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-10 h-full rounded-xl border border-blue-100 shadow-inner">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-slate-500 mb-8">Program Features</h3>
                    
                    <div className="space-y-4 mb-12">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors duration-300">
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-md flex items-center justify-center flex-shrink-0">
                            <FaCheckCircle className="text-white text-xs" />
                          </div>
                          <span className="text-sm text-slate-700 font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-8 border-t border-blue-200">
                      <h3 className="text-xs tracking-[0.2em] uppercase text-blue-600 mb-6 font-bold">Key Highlights</h3>
                      <div className="space-y-3">
                        {course.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-sm text-slate-700 font-medium">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Card3D>
            </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 text-white">
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
              <PrimaryButton to="/admissions">
                Enroll Now
              </PrimaryButton>
              <OutlineButton to="/contact">
                Contact Us
              </OutlineButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
