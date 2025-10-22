import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaUser, 
  FaEnvelope, 
  FaPhone, 
  FaGraduationCap, 
  FaCalendarAlt, 
  FaFileAlt, 
  FaCheckCircle, 
  FaRocket, 
  FaAward, 
  FaUsers, 
  FaBookOpen, 
  FaClock, 
  FaMoneyBillWave, 
  FaDownload, 
  FaUpload, 
  FaPaperPlane,
  FaWhatsapp,
  FaStar,
  FaTrophy,
  FaHandshake
} from 'react-icons/fa'

const ProcessStep = ({ step, title, description, icon: Icon, isActive, isCompleted }) => (
  <motion.div
    className={`relative p-6 rounded-2xl transition-all duration-300 ${
      isActive ? 'bg-primary-600 text-white shadow-xl' : 
      isCompleted ? 'bg-green-50 text-green-800' : 'bg-white text-gray-700'
    }`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02 }}
  >
    <div className="flex items-start gap-4">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
        isActive ? 'bg-white text-primary-600' : 
        isCompleted ? 'bg-green-600 text-white' : 'bg-primary-100 text-primary-600'
      }`}>
        {isCompleted ? <FaCheckCircle /> : <Icon />}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-sm font-semibold">Step {step}</span>
          {isCompleted && <FaCheckCircle className="text-green-600" />}
        </div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  </motion.div>
)

const FeeCard = ({ course, duration, fee, features, popular = false }) => (
  <motion.div
    className={`relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
      popular ? 'bg-primary-600 text-white' : 'bg-white text-gray-700'
    }`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    {popular && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">
        Most Popular
      </div>
    )}
    
    <div className="text-center mb-6">
      <h3 className="text-2xl font-bold mb-2">{course}</h3>
      <p className="text-sm opacity-80 mb-4">{duration}</p>
      <div className="text-4xl font-bold mb-2">₹{fee}</div>
      <p className="text-sm opacity-80">per month</p>
    </div>
    
    <div className="space-y-3 mb-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500 flex-shrink-0" />
          <span className="text-sm">{feature}</span>
        </div>
      ))}
    </div>
    
    <a 
      href={`https://api.whatsapp.com/send?phone=919848628863&text=Hi! I'm interested in enrolling for ${course}. Please provide more details about admission process.`}
      target="_blank"
      rel="noopener noreferrer"
      className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 block text-center ${
        popular 
          ? 'bg-white text-primary-600 hover:bg-gray-100' 
          : 'bg-primary-600 text-white hover:bg-primary-700'
      }`}
    >
      Enquiry
    </a>
  </motion.div>
)

const ScholarshipCard = ({ title, description, amount, eligibility, icon: Icon }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className="flex items-start gap-4">
      <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center">
        <Icon />
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <div className="text-2xl font-bold text-primary-600 mb-2">{amount}</div>
        <p className="text-sm text-gray-500">Eligibility: {eligibility}</p>
      </div>
    </div>
  </motion.div>
)

export default function Admissions(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    class: '',
    parentName: '',
    parentPhone: '',
    address: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Show success message
    setIsSubmitted(true)
    
    // Create WhatsApp message with form data
    const message = `🎓 *New Admission Application*

*Student Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Course: ${formData.course}
• Class: ${formData.class}

*Parent/Guardian:*
• Name: ${formData.parentName}
• Phone: ${formData.parentPhone}

*Address:* ${formData.address}

*Additional Info:* ${formData.message}

Please contact us for further admission process.`

    // Open WhatsApp with pre-filled message
    const whatsappUrl = `https://api.whatsapp.com/send?phone=919848628863&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        class: '',
        parentName: '',
        parentPhone: '',
        address: '',
        message: ''
      })
    }, 5000)
  }

  const admissionSteps = [
    {
      step: 1,
      title: "Inquiry & Counseling",
      description: "Contact us for free counseling session to understand your requirements and choose the right course.",
      icon: FaPhone
    },
    {
      step: 2,
      title: "Application Form",
      description: "Fill out the admission form with your details and academic information.",
      icon: FaFileAlt
    },
    {
      step: 3,
      title: "Document Verification",
      description: "Submit required documents like mark sheets, ID proof, and photographs.",
      icon: FaCheckCircle
    },
    {
      step: 4,
      title: "Fee Payment",
      description: "Complete the admission process by paying the course fees.",
      icon: FaMoneyBillWave
    },
    {
      step: 5,
      title: "Orientation",
      description: "Attend the orientation session to understand the course structure and academy rules.",
      icon: FaUsers
    }
  ]

  const courses = [
    {
      course: "Intermediate Tuitions",
      duration: "2 Years Program",
      fee: "8,000",
      features: [
        "Subject-wise expert faculty",
        "Regular assessments & tests",
        "Doubt clearing sessions",
        "Study material & notes",
        "Parent-teacher meetings"
      ]
    },
    {
      course: "JEE Mains Coaching",
      duration: "1-2 Years Program",
      fee: "12,000",
      features: [
        "Physics, Chemistry, Mathematics",
        "Daily practice problems",
        "Weekly mock tests",
        "Previous year papers",
        "Personalized study plans"
      ],
      popular: true
    },
    {
      course: "EAMCET Preparation",
      duration: "1 Year Program",
      fee: "10,000",
      features: [
        "Physics, Chemistry, Mathematics",
        "Topic-wise preparation",
        "Previous year analysis",
        "Speed & accuracy training",
        "Rank improvement strategies"
      ]
    }
  ]

  const scholarships = [
    {
      title: "Merit Scholarship",
      description: "For students with excellent academic performance",
      amount: "50% Off",
      eligibility: "90%+ in previous class",
      icon: FaTrophy
    },
    {
      title: "Financial Aid",
      description: "For economically disadvantaged students",
      amount: "30% Off",
      eligibility: "Income below ₹3 Lakhs",
      icon: FaHandshake
    },
    {
      title: "Sibling Discount",
      description: "For families with multiple students",
      amount: "20% Off",
      eligibility: "Second child or more",
      icon: FaUsers
    }
  ]

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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Best Institute for Intermediate Students - Admissions for Class 11 & 12</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
          Best institute for intermediate students in Andhra Pradesh. With 13+ years of experience and 10,000+ students trained, start your journey toward top medical and engineering colleges with our Class 11 & 12 coaching programs. Inspire Academy offers multiple flexible batches—Morning, Evening, Weekend, and Rapid Revision—to match your learning pace and board exams schedule. Submit your details below to reserve your seat. Seats are limited and filled on a "first-come, first-serve" basis.
        </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaRocket className="inline mr-2" />
                Free Counseling
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaAward className="inline mr-2" />
                Scholarship Available
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaUsers className="inline mr-2" />
                Limited Seats
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Admission Process</h2>
            <p className="text-xl text-gray-600">Simple steps to join our academy</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {admissionSteps.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                title={step.title}
                description={step.description}
                icon={step.icon}
                isActive={currentStep === step.step}
                isCompleted={currentStep > step.step}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Course Fees */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Course Fees</h2>
            <p className="text-xl text-gray-600">Transparent pricing for quality education</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <FeeCard key={index} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Scholarships */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Scholarships & Financial Aid</h2>
            <p className="text-xl text-gray-600">We believe in making quality education accessible to all</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {scholarships.map((scholarship, index) => (
              <ScholarshipCard key={index} {...scholarship} />
            ))}
          </div>
        </div>
      </section>

      {/* Admission Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Apply for Admission</h2>
            <p className="text-xl text-gray-600">Fill out the form below to start your application</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Admission Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Admission Form</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Application Submitted!</h4>
                  <p className="text-gray-600">We'll contact you within 24 hours for counseling.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Student Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested Course *
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a course</option>
                        <option value="Intermediate Tuitions">Intermediate Tuitions</option>
                        <option value="JEE Mains Coaching">JEE Mains Coaching</option>
                        <option value="EAMCET Preparation">EAMCET Preparation</option>
                        <option value="Long-term Programs">Long-term Programs</option>
                        <option value="Crash Course">Crash Course</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Current Class
                      </label>
                      <select
                        name="class"
                        value={formData.class}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select class</option>
                        <option value="Class 9">Class 9</option>
                        <option value="Class 10">Class 10</option>
                        <option value="Class 11">Class 11</option>
                        <option value="Class 12">Class 12</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Parent/Guardian Name
                      </label>
                      <input
                        type="text"
                        name="parentName"
                        value={formData.parentName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter parent name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Enter your address"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Additional Information
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Any additional information or questions..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    Submit Application
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Contact Information */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <FaPhone className="text-primary-600" />
                    <span>+91 9848628863</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaEnvelope className="text-primary-600" />
                    <span>info@andhrainspire.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="text-primary-600" />
                    <span>Mon-Fri: 9:00 AM - 7:00 PM</span>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <a 
                    href="https://wa.me/919848628863"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors"
                  >
                    <FaWhatsapp />
                    WhatsApp Us
                  </a>
                  <a 
                    href="tel:9848628863"
                    className="flex items-center gap-3 bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <FaPhone />
                    Call Now
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4">Required Documents</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-primary-600" />
                    <span>Previous year mark sheets</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-primary-600" />
                    <span>ID proof (Aadhar card)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-primary-600" />
                    <span>Passport size photographs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaFileAlt className="text-primary-600" />
                    <span>Address proof</span>
                  </div>
                </div>
              </div>
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
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Journey?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Don't wait! Limited seats available. Apply now and secure your place in our academy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                Apply Now
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
