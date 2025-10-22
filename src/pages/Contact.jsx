import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp, 
  FaClock, 
  FaUser, 
  FaGraduationCap,
  FaPaperPlane,
  FaCheckCircle,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube
} from 'react-icons/fa'

const ContactInfo = ({ icon: Icon, title, details, color }) => (
  <motion.div
    className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 card-hover"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.05 }}
  >
    <div className={`w-12 h-12 ${color} rounded-full flex items-center justify-center mb-4 text-white`}>
      <Icon size={20} />
    </div>
    <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
    <div className="space-y-1">
      {details.map((detail, index) => (
        <p key={index} className="text-gray-600 text-sm">{detail}</p>
      ))}
    </div>
  </motion.div>
)

const SocialButton = ({ icon: Icon, label, color, href }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`${color} text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-3`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon />
    {label}
  </motion.a>
)

export default function Contact(){
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    message: ''
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: "Phone Numbers",
      details: ["+91 9848628863", "+91 9848628863"],
      color: "bg-green-600"
    },
    {
      icon: FaEnvelope,
      title: "Email Address",
      details: ["info@andhrainspire.com", "admissions@andhrainspire.com"],
      color: "bg-blue-600"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Address",
      details: ["16.50632, 80.64574", "Vijayawada, Andhra Pradesh", "India - 520001"],
      color: "bg-red-600"
    },
    {
      icon: FaClock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 7:00 PM", "Saturday: 9:00 AM - 5:00 PM", "Sunday: Closed"],
      color: "bg-purple-600"
    }
  ]

  const courses = [
    "Intermediate Tuitions",
    "JEE Mains Coaching",
    "EAMCET Preparation",
    "Long-term Programs",
    "Crash Course",
    "Doubt Clearing Sessions"
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
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">Best Institute for Intermediate Students - Contact Inspire Academy Vijayawada</h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-blue-100 max-w-3xl mx-auto mb-6 sm:mb-8">
          Best institute for intermediate students in Andhra Pradesh. With 13+ years of experience and 10,000+ students trained, we're here to help Class 11 & 12 students plan their academic journey. Reach our center for free counseling, demo classes, or admissions guidance. Ready to start your intermediate coaching? Get in touch with us for admissions, course information, or any queries.
        </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaPhone className="inline mr-2" />
                Call Now
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaWhatsapp className="inline mr-2" />
                WhatsApp
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3">
                <FaEnvelope className="inline mr-2" />
                Email Us
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600">Multiple ways to reach us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <ContactInfo key={index} {...info} />
            ))}
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Visit our institute for counseling, admissions, or any queries. We're easily accessible from all parts of Vijayawada.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Google Maps Embed */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.123456789!2d80.64574!3d16.50632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35f8a8b8b8b8b8%3A0x2f2f2f2f2f2f2f2f!2sInspire%20Academy%20Vijayawada!5e0!3m2!1sen!2sin!4v1633072800000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Inspire Academy Location"
                className="w-full"
              ></iframe>
            </div>
            
            {/* Location Details and Directions */}
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-4">📍 Our Location</h3>
                <div className="space-y-2">
                  <p className="text-blue-100">Coordinates: 16.50632, 80.64574</p>
                  <p className="text-blue-100">Vijayawada, Andhra Pradesh</p>
                  <p className="text-blue-100">India - 520001</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <motion.a
                  href="https://www.google.com/maps/dir/?api=1&destination=16.50632,80.64574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaMapMarkerAlt />
                  Get Directions
                </motion.a>
                
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=16.50632,80.64574"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaMapMarkerAlt />
                  View on Maps
                </motion.a>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h4 className="font-semibold text-gray-800 mb-3">🚗 How to Reach Us</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• <strong>By Road:</strong> Easily accessible from all parts of Vijayawada</li>
                  <li>• <strong>Public Transport:</strong> Well connected by buses and autos</li>
                  <li>• <strong>Parking:</strong> Ample parking space available</li>
                  <li>• <strong>Landmark:</strong> Near major commercial areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
              
              {isSubmitted ? (
                <motion.div
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Message Sent Successfully!</h4>
                  <p className="text-gray-600">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your full name"
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
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Interested Course
                      </label>
                      <select
                        name="course"
                        value={formData.course}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="">Select a course</option>
                        {courses.map((course, index) => (
                          <option key={index} value={course}>{course}</option>
                        ))}
                      </select>
                    </div>
                  </div>

        <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your requirements or any questions you have..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full bg-primary-600 text-white py-4 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <FaPaperPlane />
                    Send Message
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Map & Quick Actions */}
            <div className="space-y-8">
              {/* Map */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="h-64 bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <FaMapMarkerAlt className="text-4xl text-primary-600 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">123 Education Street, Vijayawada</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-gray-800 mb-2">Our Location</h4>
                  <p className="text-gray-600 text-sm">
                    We are located in the heart of Vijayawada, easily accessible by public transport 
                    and with ample parking space for students and parents.
                  </p>
                </div>
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="font-semibold text-gray-800 mb-4">Quick Actions</h4>
                <div className="space-y-3">
                  <SocialButton
                    icon={FaWhatsapp}
                    label="WhatsApp Us"
                    color="bg-green-500 hover:bg-green-600"
                    href="https://wa.me/919848628863"
                  />
                  <SocialButton
                    icon={FaPhone}
                    label="Call Now"
                    color="bg-blue-600 hover:bg-blue-700"
                    href="tel:9848628863"
                  />
                  <SocialButton
                    icon={FaEnvelope}
                    label="Email Us"
                    color="bg-red-600 hover:bg-red-700"
                    href="mailto:info@andhrainspire.com"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Follow Us</h2>
            <p className="text-xl text-gray-600">Stay connected for updates and insights</p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebook />
              Facebook
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-blue-400 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-500 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaTwitter />
              Twitter
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram />
              Instagram
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaLinkedin />
              LinkedIn
            </motion.a>
            <motion.a
              href="#"
              className="flex items-center gap-3 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaYoutube />
              YouTube
            </motion.a>
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
              Don't wait! Contact us today and take the first step towards your academic success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="tel:9848628863"
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaPhone />
                Call Now
              </motion.a>
              <motion.a
                href="https://wa.me/919848628863"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300 flex items-center justify-center gap-3"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FaWhatsapp />
                WhatsApp
              </motion.a>
            </div>
          </motion.div>
        </div>
    </section>
    </div>
  )
}
