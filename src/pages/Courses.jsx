import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FaBookOpen, 
  FaGraduationCap, 
  FaRocket, 
  FaTrophy, 
  FaClock, 
  FaUsers, 
  FaCheckCircle, 
  FaStar,
  FaArrowRight,
  FaCalculator,
  FaAtom,
  FaFlask,
  FaChartLine
} from 'react-icons/fa'
import ScrollAnimation from '../components/ScrollAnimation'

const CourseCard = ({ course, index }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="relative">
      <div className={`h-48 bg-gradient-to-br ${course.gradient} flex items-center justify-center`}>
        <course.icon size={60} className="text-white" />
      </div>
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-semibold text-primary-600">
        {course.duration}
      </div>
    </div>
    
    <div className="p-6 sm:p-8">
      <div className="flex items-center justify-between mb-3 sm:mb-4">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800">{course.title}</h3>
        <div className="flex items-center text-yellow-400">
          <FaStar className="mr-1 text-sm" />
          <span className="text-xs sm:text-sm font-semibold text-gray-600">{course.rating}</span>
        </div>
      </div>
      
      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{course.description}</p>
      
      <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
        {course.features.map((feature, idx) => (
          <div key={idx} className="flex items-center text-xs sm:text-sm text-gray-600">
            <FaCheckCircle className="text-green-500 mr-2 sm:mr-3 flex-shrink-0 text-xs sm:text-sm" />
            <span>{feature}</span>
          </div>
        ))}
      </div>
      
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-0">
        <div className="text-xl sm:text-2xl font-bold text-primary-600">
          ₹{course.price}
          <span className="text-xs sm:text-sm text-gray-500 font-normal">/month</span>
        </div>
        <a 
          href="https://api.whatsapp.com/send?phone=919848628863"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
        >
          Enquiry
          <FaArrowRight className="text-xs sm:text-sm" />
        </a>
    </div>
  </div>
  </motion.div>
)

export default function Courses(){
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: 'All Courses', icon: FaBookOpen },
    { id: 'intermediate', name: 'Intermediate', icon: FaGraduationCap },
    { id: 'jee', name: 'JEE Mains', icon: FaRocket },
    { id: 'eamcet', name: 'EAMCET', icon: FaTrophy }
  ]

  const courses = [
    {
      id: 'intermediate',
      title: 'NEET Coaching for Intermediate Students - Class 11 & 12',
      description: 'Best NEET coaching for intermediate students in Class 11 & 12. Comprehensive course designed to strengthen Biology, Chemistry, and Physics concepts for intermediate students. Includes live video sessions, HD-quality recorded lectures, and daily MCQ practice with AI-driven test analytics.',
      icon: FaGraduationCap,
      gradient: 'from-blue-500 to-blue-700',
      duration: '2 Years',
      rating: '4.9',
      price: '8,000',
      features: [
        'Biology, Chemistry, Physics expert faculty',
        'Live interactive classes & recorded lectures',
        'Daily MCQ practice with AI analytics',
        'Comprehensive study material & notes',
        'Regular mock tests & doubt clearing'
      ]
    },
    {
      id: 'jee',
      title: 'JEE Coaching for Intermediate Students - Class 11 & 12',
      description: 'Best JEE coaching for intermediate students in Class 11 & 12. Our course emphasizes concept mastery, problem-solving speed, and question-based learning for intermediate students. Ideal for both Mains and Advanced aspirants. Includes doubt clearing sessions and performance-based mentoring.',
      icon: FaRocket,
      gradient: 'from-purple-500 to-purple-700',
      duration: '1-2 Years',
      rating: '4.8',
      price: '12,000',
      features: [
        'Physics, Chemistry, Mathematics expert faculty',
        'Concept mastery & problem-solving speed',
        'Weekly mock tests & performance analytics',
        'Previous year papers & doubt clearing',
        'Personalized mentoring & study plans'
      ]
    },
    {
      id: 'eamcet',
      title: 'EAMCET Coaching for Intermediate Students - Class 11 & 12',
      description: 'Best EAMCET coaching for intermediate students in Class 11 & 12. For engineering aspirants in Andhra Pradesh, our EAMCET program integrates classroom sessions, adaptive tests, and short-cut solving techniques to boost accuracy and confidence for intermediate students.',
      icon: FaTrophy,
      gradient: 'from-green-500 to-green-700',
      duration: '1 Year',
      rating: '4.9',
      price: '10,000',
      features: [
        'Physics, Chemistry, Mathematics expert faculty',
        'Classroom sessions & adaptive tests',
        'Short-cut solving techniques',
        'Speed & accuracy training',
        'Rank improvement strategies'
      ]
    },
    {
      id: 'longterm',
      title: 'Long-term Programs',
      description: 'Structured multi-year preparation with mentorship, career guidance, and comprehensive support.',
      icon: FaChartLine,
      gradient: 'from-orange-500 to-orange-700',
      duration: '3+ Years',
      rating: '4.7',
      price: '15,000',
      features: [
        'Multi-year curriculum',
        'Mentorship program',
        'Career guidance',
        'Regular progress tracking',
        'Alumni network access'
      ]
    },
    {
      id: 'crash',
      title: 'Crash Course',
      description: 'Intensive short-term preparation for last-minute revision and quick concept reinforcement.',
      icon: FaClock,
      gradient: 'from-red-500 to-red-700',
      duration: '3 Months',
      rating: '4.6',
      price: '6,000',
      features: [
        'Quick revision sessions',
        'Important topics focus',
        'Mock test series',
        'Doubt clearing',
        'Exam strategies'
      ]
    },
    {
      id: 'doubt',
      title: 'Doubt Clearing Sessions',
      description: 'Individual and group doubt clearing sessions for all subjects with expert faculty.',
      icon: FaUsers,
      gradient: 'from-indigo-500 to-indigo-700',
      duration: 'Ongoing',
      rating: '4.8',
      price: '2,000',
      features: [
        'One-on-one sessions',
        'Group discussions',
        'Subject experts',
        'Flexible timings',
        'Online & offline'
      ]
    }
  ]

  const filteredCourses = selectedCategory === 'all' 
    ? courses 
    : courses.filter(course => course.id === selectedCategory)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Best Coaching for Intermediate Students - Class 11 & 12 Coaching Classes</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8 px-2">
          Best institute for intermediate students with comprehensive Class 11 & 12 coaching programs. Our expert faculty provides personalized guidance for intermediate students preparing for NEET, JEE, and EAMCET. With 10,000+ students trained and 85% success rate, our structured programs guarantee success for every intermediate student with live interactive classes and proven results.
        </p>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                <FaUsers className="inline mr-2" />
                10,000+ Students
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                <FaTrophy className="inline mr-2" />
                90% Success Rate
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base">
                <FaStar className="inline mr-2" />
                Expert Faculty
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-8 sm:mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Course Categories</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">Select a category to explore our courses</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <category.icon className="text-sm sm:text-base" />
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <ScrollAnimation className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
            layout
          >
            {filteredCourses.map((course, index) => (
              <CourseCard key={course.id} course={course} index={index} />
            ))}
          </motion.div>
        </div>
      </ScrollAnimation>

      {/* Why Choose Us */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Why Choose Our Courses?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">We provide the best educational experience</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: FaUsers, title: "Small Batch Sizes", desc: "Maximum 25 students per batch for personalized attention" },
              { icon: FaTrophy, title: "Proven Results", desc: "90% success rate with consistent track record" },
              { icon: FaClock, title: "Flexible Timings", desc: "Multiple batches to suit your schedule" },
              { icon: FaStar, title: "Expert Faculty", desc: "Experienced teachers with subject expertise" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-4 sm:p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 hover:shadow-xl transition-all duration-300 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 text-white">
                  <feature.icon size={20} className="sm:w-6 sm:h-6" />
            </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-sm sm:text-base text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4">Ready to Start Your Journey?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-2">
              Join thousands of successful students who achieved their dreams with our courses.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a 
                href="https://api.whatsapp.com/send?phone=919848628863"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 text-center"
              >
                Enroll Now
              </a>
              <Link 
                to="/about" 
                className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 text-center"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
      </div>
    </section>
    </div>
  )
}
