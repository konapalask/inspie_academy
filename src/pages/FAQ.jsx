import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  FaQuestionCircle, 
  FaChevronDown, 
  FaChevronUp, 
  FaGraduationCap, 
  FaBookOpen, 
  FaTrophy, 
  FaUsers, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaSearch,
  FaTag
} from 'react-icons/fa'

const FAQItem = ({ faq, index, isOpen, onToggle }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    viewport={{ once: true }}
  >
    <button
      onClick={onToggle}
      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <FaQuestionCircle className="text-sm" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
          <div className="flex flex-wrap gap-2">
            {faq.tags.map((tag, idx) => (
              <span 
                key={idx}
                className="bg-primary-50 text-primary-600 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1"
              >
                <FaTag className="text-xs" />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <motion.div
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {isOpen ? <FaChevronUp className="text-primary-600" /> : <FaChevronDown className="text-primary-600" />}
      </motion.div>
    </button>
    
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 border-t border-gray-100">
            <div className="pt-4">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              {faq.details && (
                <div className="mt-4 space-y-2">
                  {faq.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
)

const CategoryCard = ({ category, icon: Icon, count, color, onClick, isActive }) => (
  <motion.button
    onClick={onClick}
    className={`p-6 rounded-2xl transition-all duration-300 ${
      isActive 
        ? 'bg-primary-600 text-white shadow-xl' 
        : 'bg-white text-gray-700 hover:bg-primary-50 hover:text-primary-600 shadow-lg hover:shadow-xl'
    }`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <div className="text-center">
      <div className={`w-16 h-16 ${color} rounded-full flex items-center justify-center mx-auto mb-4 ${
        isActive ? 'bg-white text-primary-600' : ''
      }`}>
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-semibold mb-2">{category}</h3>
      <p className="text-sm opacity-80">{count} Questions</p>
    </div>
  </motion.button>
)

export default function FAQ(){
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [openFAQ, setOpenFAQ] = useState(null)
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: 'All Questions', icon: FaQuestionCircle, count: 25, color: 'bg-gray-600' },
    { id: 'admissions', name: 'Admissions', icon: FaGraduationCap, count: 8, color: 'bg-blue-600' },
    { id: 'courses', name: 'Courses', icon: FaBookOpen, count: 6, color: 'bg-green-600' },
    { id: 'fees', name: 'Fees & Payment', icon: FaTrophy, count: 4, color: 'bg-purple-600' },
    { id: 'facilities', name: 'Facilities', icon: FaQuestionCircle, count: 4, color: 'bg-red-600' }
  ]

  const faqs = [
    {
      id: 1,
      question: "What courses do you offer?",
      answer: "We offer comprehensive coaching for NEET, JEE Mains, EAMCET, and Intermediate (Class 11-12). Our courses include both long-term programs and crash courses.",
      details: [
        "NEET Preparation - 2 years program",
        "JEE Mains Coaching - 1-2 years program", 
        "EAMCET Preparation - 1 year program",
        "Intermediate Tuitions - 2 years program",
        "Crash Courses - 3-6 months program"
      ],
      category: "courses",
      tags: ["Courses", "Programs", "Duration"]
    },
    {
      id: 2,
      question: "What is the admission process?",
      answer: "Our admission process is simple and student-friendly. You can apply online or visit our campus for counseling.",
      details: [
        "Free counseling session",
        "Fill out the admission form",
        "Submit required documents",
        "Pay the course fees",
        "Attend orientation session"
      ],
      category: "admissions",
      tags: ["Admission", "Process", "Documents"]
    },
    {
      id: 3,
      question: "What are the course fees?",
      answer: "Our fees are competitive and transparent. We also offer scholarships and financial aid for deserving students.",
      details: [
        "Intermediate Tuitions: ₹8,000/month",
        "JEE Mains Coaching: ₹12,000/month",
        "EAMCET Preparation: ₹10,000/month",
        "Scholarships available for meritorious students",
        "Flexible payment options"
      ],
      category: "fees",
      tags: ["Fees", "Payment", "Scholarships"]
    },
    {
      id: 5,
      question: "What facilities do you provide?",
      answer: "We provide state-of-the-art facilities including modern classrooms, well-equipped laboratories, library, and study rooms.",
      details: [
        "Air-conditioned classrooms",
        "Physics, Chemistry, Biology labs",
        "Computer lab with latest technology",
        "Library with extensive book collection",
        "Study rooms and discussion halls"
      ],
      category: "facilities",
      tags: ["Facilities", "Infrastructure", "Labs"]
    },
    {
      id: 6,
      question: "What is the batch size?",
      answer: "We maintain small batch sizes to ensure personalized attention. Maximum 25 students per batch for optimal learning.",
      details: [
        "Maximum 25 students per batch",
        "Personalized attention",
        "Regular doubt clearing sessions",
        "Individual progress tracking",
        "Parent-teacher meetings"
      ],
      category: "courses",
      tags: ["Batch Size", "Personal Attention", "Learning"]
    },
    {
      id: 7,
      question: "Do you provide study materials?",
      answer: "Yes, we provide comprehensive study materials including textbooks, practice papers, mock tests, and digital resources.",
      details: [
        "Subject-wise textbooks",
        "Practice question banks",
        "Previous year papers",
        "Mock test series",
        "Digital learning resources"
      ],
      category: "courses",
      tags: ["Study Material", "Resources", "Practice"]
    },
    {
      id: 8,
      question: "What is your success rate?",
      answer: "We maintain a 90% success rate with our students securing admissions in top colleges and universities across India.",
      details: [
        "90% overall success rate",
        "200+ IIT admissions",
        "500+ top ranks in various exams",
        "1000+ successful students",
        "Consistent track record"
      ],
      category: "faculty",
      tags: ["Success Rate", "Results", "Achievements"]
    },
    {
      id: 9,
      question: "Do you offer online classes?",
      answer: "Yes, we offer both online and offline classes. Students can choose the mode that suits them best.",
      details: [
        "Live online classes",
        "Recorded video lectures",
        "Online doubt clearing",
        "Digital assignments",
        "Hybrid learning options"
      ],
      category: "courses",
      tags: ["Online Classes", "Digital Learning", "Flexibility"]
    },
    {
      id: 10,
      question: "What are the class timings?",
      answer: "We offer flexible class timings to accommodate different schedules. Classes are available in morning, afternoon, and evening batches.",
      details: [
        "Morning batch: 7:00 AM - 12:00 PM",
        "Afternoon batch: 2:00 PM - 6:00 PM",
        "Evening batch: 6:00 PM - 9:00 PM",
        "Weekend classes available",
        "Flexible timing options"
      ],
      category: "courses",
      tags: ["Timings", "Schedule", "Flexibility"]
    }
  ]

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleFAQToggle = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Best Institute for Intermediate Students - FAQ</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
              Best institute for intermediate students - With 13+ years of experience and 10,000+ students trained, find answers to common questions about our Class 11 & 12 coaching programs, admissions, fees, and more. 
              Can't find what you're looking for? Contact us directly.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaQuestionCircle className="inline mr-2" />
                Quick Answers
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaSearch className="inline mr-2" />
                Search Questions
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaPhone className="inline mr-2" />
                Contact Support
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            className="relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for questions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse by Category</h2>
            <p className="text-lg text-gray-600">Find answers organized by topic</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <CategoryCard
                key={category.id}
                category={category.name}
                icon={category.icon}
                count={category.count}
                color={category.color}
                onClick={() => setSelectedCategory(category.id)}
                isActive={selectedCategory === category.id}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Common Questions</h2>
            <p className="text-xl text-gray-600">Get answers to frequently asked questions</p>
          </motion.div>

          <div className="space-y-6">
            {filteredFAQs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                faq={faq}
                index={index}
                isOpen={openFAQ === faq.id}
                onToggle={() => handleFAQToggle(faq.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-blue-100">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Still Have Questions?</h2>
            <p className="text-xl text-gray-600">Contact our support team for personalized assistance</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FaPhone size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Call Us</h3>
              <p className="text-gray-600 mb-4">Speak directly with our counselors</p>
              <a 
                href="tel:9848628863"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                +91 9848628863
              </a>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FaWhatsapp size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4">Quick responses via WhatsApp</p>
              <a 
                href="https://wa.me/919848628863"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Chat Now
              </a>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl shadow-lg p-6 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                <FaEnvelope size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us your detailed queries</p>
              <a 
                href="mailto:info@andhrainspire.com"
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                info@andhrainspire.com
              </a>
            </motion.div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Have more questions? Book a free counseling session with our experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Book Free Counseling
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
