import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaGraduationCap, 
  FaUsers, 
  FaTrophy, 
  FaLightbulb, 
  FaHeart, 
  FaStar,
  FaAward,
  FaBookOpen,
  FaRocket,
  FaBullseye,
  FaHandshake,
} from 'react-icons/fa'
import ScrollAnimation from '../components/ScrollAnimation'

const StatCard = ({ icon: Icon, number, label, color }) => (
  <motion.div
    className="text-center p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 hover:shadow-xl transition-all duration-300 card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
      <Icon size={24} />
    </div>
    <div className="text-3xl font-bold text-gray-800 mb-2">{number}</div>
    <div className="text-gray-600">{label}</div>
  </motion.div>
)

export default function About(){
  const [activeTab, setActiveTab] = useState('mission')

  const tabs = [
    { id: 'mission', label: 'Mission', icon: FaBullseye },
    { id: 'vision', label: 'Vision', icon: FaRocket },
    { id: 'values', label: 'Values', icon: FaHeart }
  ]

  const content = {
    mission: {
      title: "Our Mission",
      description: "To provide world-class education and mentorship that empowers students to achieve their academic dreams and build successful careers.",
      points: [
        "Deliver high-quality, affordable education for all aspirants",
        "Provide personalized attention and mentorship to every student",
        "Create an environment that fosters learning and growth",
        "Equip students with skills for competitive exams and life"
      ]
    },
    vision: {
      title: "Our Vision",
      description: "To be the leading educational institution that transforms students into confident, well-prepared individuals ready for top colleges and successful careers.",
      points: [
        "Become the most trusted coaching institute in the region",
        "Achieve 100% success rate in competitive exams",
        "Create a network of successful alumni across top institutions",
        "Innovate continuously in teaching methodologies"
      ]
    },
    values: {
      title: "Our Values",
      description: "We are guided by core values that shape our approach to education and student development.",
      points: [
        "Excellence in teaching and student outcomes",
        "Integrity and transparency in all our dealings",
        "Innovation in teaching methods and technology",
        "Commitment to student success and well-being"
      ]
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* Header Logo */}
              <motion.div 
                className="mb-8 flex justify-center lg:justify-start"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-white/30">
                  <img 
                    src="/images/aia logo.png" 
                    alt="Andhra Inspire Academy Logo" 
                    className="h-24 sm:h-32 md:h-40 w-auto object-contain filter brightness-110 contrast-110"
                  />
                </div>
              </motion.div>
              
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">About Inspire Academy - Best Institute for Intermediate Students in Andhra Pradesh</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto lg:mx-0 mb-6 sm:mb-8">
          Founded with the vision of nurturing intermediate students, Inspire Academy is the best institute for Class 11 & 12 students in Andhra Pradesh. With 13+ years of experience and 10,000+ students trained, our results-driven curriculum, personalized mentorship, and constant motivation make us the top choice for intermediate students. With expert faculty and advanced digital infrastructure, we prepare every intermediate student to achieve success in NEET, JEE, and EAMCET through consistency, doubt clearance, and comprehensive guidance.
        </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <FaGraduationCap className="inline mr-2" />
                  Quality Education
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <FaUsers className="inline mr-2" />
                  Expert Faculty
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                  <FaTrophy className="inline mr-2" />
                  Proven Results
                </div>
              </div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-white/20 rounded-2xl transform rotate-3"></div>
                <motion.div
                  className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-4 shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src="/images/Screenshot 2025-10-19 170157.png" 
                    alt="Andhra Inspire Academy" 
                    className="w-full max-w-md h-64 object-cover rounded-xl shadow-lg"
                  />
                  <div className="absolute bottom-4 left-4 right-4 bg-black/70 backdrop-blur-sm rounded-lg p-3">
                    <p className="text-white text-sm font-semibold">
                      "Education is the foundation upon which we build our dreams and achieve excellence."
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col items-center justify-center">
              {/* Large Logo */}
              <motion.div 
                className="mb-8"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-gradient-to-br from-primary-50 to-blue-100 rounded-3xl p-8 shadow-2xl border border-primary-100">
                  <img 
                    src="/images/aia logo.png" 
                    alt="Andhra Inspire Academy Logo" 
                    className="h-32 sm:h-40 md:h-48 w-auto object-contain mx-auto"
                  />
                </div>
              </motion.div>
              
              {/* Academy Name */}
              <motion.div
                className="text-center max-w-4xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                  Andhra Inspire Academy
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-primary-800 mx-auto mb-6"></div>
                <p className="text-xl sm:text-2xl text-gray-600 font-medium">
                  Empowering Dreams • Building Futures • Creating Success
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Foundation</h2>
            <p className="text-xl text-gray-600">The principles that guide our educational approach</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab, index) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <tab.icon />
                {tab.label}
              </motion.button>
            ))}
          </div>

          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-xl p-8 lg:p-12"
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">{content[activeTab].title}</h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content[activeTab].description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {content[activeTab].points.map((point, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 bg-primary-50 rounded-lg"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <FaLightbulb className="text-primary-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600">Numbers that speak for our success</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard 
              icon={FaUsers} 
              number="500+" 
              label="Students Trained" 
              color="bg-primary-600" 
            />
            <StatCard 
              icon={FaTrophy} 
              number="90%" 
              label="Success Rate" 
              color="bg-green-600" 
            />
            <StatCard 
              icon={FaBookOpen} 
              number="1000+" 
              label="Study Materials" 
              color="bg-purple-600" 
            />
            <StatCard 
              icon={FaAward} 
              number="5+" 
              label="Years Experience" 
              color="bg-orange-600" 
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600">What makes us different from other coaching institutes</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: FaUsers, 
                title: "Small Batch Sizes", 
                desc: "Maximum 25 students per batch ensuring personalized attention for every student" 
              },
              { 
                icon: FaBookOpen, 
                title: "Comprehensive Study Material", 
                desc: "Well-researched study materials, practice papers, and mock tests for effective preparation" 
              },
              { 
                icon: FaTrophy, 
                title: "Proven Track Record", 
                desc: "Consistent 90% success rate with students securing admissions in top colleges" 
              },
              { 
                icon: FaHandshake, 
                title: "Personal Mentorship", 
                desc: "Individual guidance and support to help students overcome challenges and excel" 
              },
              { 
                icon: FaRocket, 
                title: "Modern Teaching Methods", 
                desc: "Innovative teaching techniques using technology and interactive learning methods" 
              },
              { 
                icon: FaGraduationCap, 
                title: "Quality Education", 
                desc: "World-class coaching and mentorship for competitive exam preparation" 
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="text-center p-6 rounded-2xl bg-white hover:shadow-xl transition-all duration-300 card-hover"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                  <feature.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Our Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Become part of our community of successful students and achieve your academic dreams.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Enroll Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}