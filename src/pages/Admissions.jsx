import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaMinus, FaCheckCircle, FaArrowRight, FaCalendar, FaFileAlt, FaCreditCard } from 'react-icons/fa'

export default function Admissions() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    class: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const message = `👋 *New Admission Enquiry*

📋 *Student Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Course: ${formData.course}
• Current Class: ${formData.class}

💬 *Message:*
${formData.message || 'No additional message'}

Please provide admission details and guidance.`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919848628863&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const admissionProcess = [
    {
      step: '01',
      title: 'Application Submission',
      description: 'Complete the online application form with accurate student information and course preference'
    },
    {
      step: '02',
      title: 'Document Verification',
      description: 'Submit required academic documents and previous examination certificates for verification'
    },
    {
      step: '03',
      title: 'Counseling Session',
      description: 'Attend personalized counseling to understand program structure and academic requirements'
    },
    {
      step: '04',
      title: 'Fee Payment',
      description: 'Complete fee payment process and receive confirmation of enrollment'
    },
    {
      step: '05',
      title: 'Orientation',
      description: 'Participate in orientation program to familiarize with faculty, curriculum, and facilities'
    }
  ]

  const documents = [
    'Recent passport-size photographs',
    'Previous academic transcripts and certificates',
    'Transfer certificate from previous institution',
    'Identity proof (Aadhar Card/Passport)',
    'Parent/Guardian identification documents',
    'Address proof documentation'
  ]

  const fees = [
    {
      course: 'NEET Preparation',
      duration: '24 Months',
      annualFee: '₹75,000',
      installments: 'Available',
      includes: 'Study materials, Mock tests, Mentorship'
    },
    {
      course: 'JEE Main & Advanced',
      duration: '24 Months',
      annualFee: '₹80,000',
      installments: 'Available',
      includes: 'Study materials, Mock tests, Mentorship'
    },
    {
      course: 'EAMCET Coaching',
      duration: '12 Months',
      annualFee: '₹60,000',
      installments: 'Available',
      includes: 'Study materials, Test series, Analytics'
    },
    {
      course: 'Foundation Program',
      duration: '12 Months',
      annualFee: '₹50,000',
      installments: 'Available',
      includes: 'Study materials, Testing, Tracking'
    }
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
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Admissions</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Begin Your <span className="font-semibold">Journey</span>
              <br />
              to Excellence
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              Join Inspire Academy and embark on a transformative educational experience designed to achieve academic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Process</span>
              <FaMinus className="text-xs" />
            </div>
            
            <h2 className="text-5xl font-light text-black tracking-tight mb-6">
              Admission <span className="font-semibold">Process</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {admissionProcess.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-12 items-start"
              >
                <div className="text-6xl font-light text-gray-200 min-w-[100px]">
                  {item.step}
                </div>
                <div className="flex-1 pt-4">
                  <h3 className="text-2xl font-medium text-black mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed font-light">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Application Form */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-8">
                <FaMinus className="text-xs" />
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Application</span>
                <FaMinus className="text-xs" />
              </div>
              
              <h2 className="text-5xl font-light text-black tracking-tight mb-6">
                Apply <span className="font-semibold">Now</span>
              </h2>
              
              <p className="text-gray-600 font-light">
                Complete the form below to begin your admission process
              </p>
            </div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 p-12"
            >
              <div className="space-y-8">
                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-6 py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                      placeholder="+91 98486 28863"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                      Select Course *
                    </label>
                    <select
                      name="course"
                      required
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                    >
                      <option value="">Choose a course</option>
                      <option value="NEET">NEET Preparation</option>
                      <option value="JEE">JEE Main & Advanced</option>
                      <option value="EAMCET">EAMCET Coaching</option>
                      <option value="Foundation">Foundation Program</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                      Current Class *
                    </label>
                    <select
                      name="class"
                      required
                      value={formData.class}
                      onChange={handleChange}
                      className="w-full px-6 py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                    >
                      <option value="">Select class</option>
                      <option value="9">Class 9</option>
                      <option value="10">Class 10</option>
                      <option value="11">Class 11</option>
                      <option value="12">Class 12</option>
                      <option value="Dropper">Dropper</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Additional Information
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-6 py-4 border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light resize-none"
                    placeholder="Any specific questions or requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-10 py-5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Submit Application
                  <FaArrowRight className="text-xs" />
                </button>
              </div>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Fee Structure */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 mb-8">
              <FaMinus className="text-xs" />
              <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Investment</span>
              <FaMinus className="text-xs" />
            </div>
            
            <h2 className="text-5xl font-light text-black tracking-tight mb-6">
              Fee <span className="font-semibold">Structure</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {fees.map((fee, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 p-10 hover:border-black transition-all duration-700"
              >
                <h3 className="text-2xl font-medium text-black mb-2 tracking-tight">{fee.course}</h3>
                <div className="text-sm text-gray-500 mb-8">{fee.duration}</div>

                <div className="flex items-baseline gap-2 mb-8">
                  <span className="text-5xl font-light">{fee.annualFee}</span>
                  <span className="text-sm text-gray-500 tracking-wider">per year</span>
                </div>

                <div className="space-y-3 mb-8 pb-8 border-b border-gray-200">
                  <div className="flex items-center gap-2 text-sm">
                    <FaCreditCard className="text-xs" />
                    <span className="text-gray-600 font-light">Installments {fee.installments}</span>
                  </div>
                </div>

                <div className="text-xs tracking-wider uppercase text-gray-500 mb-4">Includes</div>
                <p className="text-sm text-gray-600 font-light">{fee.includes}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Required Documents */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-8">
                <FaMinus className="text-xs" />
                <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Requirements</span>
                <FaMinus className="text-xs" />
              </div>
              
              <h2 className="text-5xl font-light text-black tracking-tight mb-6">
                Required <span className="font-semibold">Documents</span>
              </h2>
            </div>

            <div className="bg-white border border-gray-200 p-12">
              <div className="space-y-4">
                {documents.map((doc, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 py-4 border-b border-gray-100 last:border-0"
                  >
                    <FaMinus className="text-xs mt-2 flex-shrink-0" />
                    <span className="text-gray-700 font-light">{doc}</span>
                  </motion.div>
                ))}
              </div>
            </div>
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
              Questions? <span className="font-semibold">We're Here</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 font-light">
              Contact our admissions team for personalized guidance and support
            </p>
            
            <a
              href="https://api.whatsapp.com/send?phone=919848628863"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 font-medium text-xs tracking-[0.15em] uppercase hover:bg-gray-100 transition-all duration-500"
            >
              Contact Admissions
              <FaArrowRight className="text-xs" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
