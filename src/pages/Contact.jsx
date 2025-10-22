import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  FaMinus, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaClock,
  FaArrowRight,
  FaWhatsapp
} from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    
    const message = `👋 *New Contact Enquiry*

📋 *Details:*
• Name: ${formData.name}
• Email: ${formData.email}
• Phone: ${formData.phone}
• Subject: ${formData.subject}

💬 *Message:*
${formData.message}

Please respond at the earliest.`

    const whatsappUrl = `https://api.whatsapp.com/send?phone=919848628863&text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  const contactInfo = [
    {
      icon: FaPhone,
      title: 'Phone',
      details: ['+91 98486 28863'],
      action: 'tel:+919848628863'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      details: ['+91 98486 28863'],
      action: 'https://api.whatsapp.com/send?phone=919848628863'
    },
    {
      icon: FaEnvelope,
      title: 'Email',
      details: ['info@inspireacademy.in'],
      action: 'mailto:info@inspireacademy.in'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      details: ['Near Benz Circle', 'Vijayawada, Andhra Pradesh'],
      action: `https://www.google.com/maps/dir/?api=1&destination=16.50632,80.64574`
    }
  ]

  const officeHours = [
    { day: 'Monday - Friday', time: '8:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '8:00 AM - 6:00 PM' },
    { day: 'Sunday', time: '9:00 AM - 2:00 PM' }
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
              <span className="text-xs tracking-[0.2em] uppercase text-white/50">Contact</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 tracking-tight leading-tight">
              Get in <span className="font-semibold">Touch</span>
            </h1>
            
            <p className="text-lg text-white/70 leading-relaxed font-light max-w-2xl">
              We're here to answer your questions and provide personalized guidance for your academic journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                target={info.title === 'WhatsApp' || info.title === 'Location' ? '_blank' : undefined}
                rel={info.title === 'WhatsApp' || info.title === 'Location' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group text-center block"
              >
                <div className="w-16 h-16 bg-black text-white flex items-center justify-center mx-auto mb-6 group-hover:bg-gray-800 transition-colors duration-500">
                  <info.icon className="text-2xl" />
                </div>
                <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500 mb-4">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <div key={idx} className="text-gray-900 font-light">{detail}</div>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Luxury Divider */}
      <div className="luxury-divider"></div>

      {/* Contact Form & Map */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="mb-12">
                <div className="inline-flex items-center gap-3 mb-6">
                  <FaMinus className="text-xs" />
                  <span className="text-xs tracking-[0.2em] uppercase text-gray-500">Send Message</span>
                </div>
                
                <h2 className="text-4xl font-light text-black tracking-tight mb-4">
                  Contact <span className="font-semibold">Form</span>
                </h2>
                
                <p className="text-gray-600 font-light">
                  Fill out the form below and we'll respond promptly
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    className="w-full px-6 py-4 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                      Phone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-6 py-4 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                      placeholder="+91 98486 28863"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light"
                    placeholder="What can we help you with?"
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-[0.15em] uppercase text-gray-500 mb-3">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-6 py-4 bg-white border border-gray-300 focus:border-black focus:outline-none transition-colors duration-300 font-light resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-black text-white px-10 py-5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-all duration-500 flex items-center justify-center gap-3"
                >
                  Send Message
                  <FaArrowRight className="text-xs" />
                </button>
              </form>
            </motion.div>

            {/* Map & Office Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Google Map */}
              <div className="bg-gray-200 h-96 mb-12">
                <iframe
                  src="https://www.google.com/maps?q=16.50632,80.64574&hl=es;z=14&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Inspire Academy Location"
                ></iframe>
              </div>

              {/* Office Hours */}
              <div className="bg-white border border-gray-200 p-10">
                <div className="flex items-center gap-3 mb-8">
                  <FaClock className="text-xl" />
                  <h3 className="text-xs tracking-[0.2em] uppercase text-gray-500">Office Hours</h3>
                </div>

                <div className="space-y-4">
                  {officeHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center py-4 border-b border-gray-100 last:border-0">
                      <span className="text-gray-900 font-light">{schedule.day}</span>
                      <span className="text-gray-600 font-light">{schedule.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direction Button */}
              <a
                href={`https://www.google.com/maps/dir/?api=1&destination=16.50632,80.64574`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-black text-white text-center px-10 py-5 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-all duration-500 mt-6"
              >
                Get Directions
              </a>
            </motion.div>
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
              Visit Our <span className="font-semibold">Campus</span>
            </h2>
            
            <p className="text-lg text-white/70 mb-12 font-light">
              Schedule a campus tour to experience our facilities and meet our faculty
            </p>
            
            <a
              href="https://api.whatsapp.com/send?phone=919848628863&text=I%20would%20like%20to%20schedule%20a%20campus%20visit"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-white text-black px-12 py-6 font-medium text-xs tracking-[0.15em] uppercase hover:bg-gray-100 transition-all duration-500"
            >
              Schedule Visit
              <FaArrowRight className="text-xs" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
