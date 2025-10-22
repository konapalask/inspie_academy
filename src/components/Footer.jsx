import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaWhatsapp,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaGraduationCap,
  FaBookOpen,
  FaTrophy,
  FaUsers,
  FaRocket,
  FaArrowUp
} from 'react-icons/fa'

const FooterLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
  >
    {children}
  </Link>
)

const SocialIcon = ({ icon: Icon, href, color }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`w-10 h-10 ${color} rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all duration-300`}
    whileHover={{ scale: 1.1, y: -2 }}
    whileTap={{ scale: 0.95 }}
  >
    <Icon size={16} />
  </motion.a>
)

export default function Footer(){
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { to: '/', label: 'Home' },
    { to: '/courses', label: 'Courses' },
    { to: '/about', label: 'About Us' },
    { to: '/blog', label: 'Blog' },
    { to: '/contact', label: 'Contact' }
  ]

  const courses = [
    { to: '/courses', label: 'Intermediate Tuitions' },
    { to: '/courses', label: 'JEE Mains Coaching' },
    { to: '/courses', label: 'EAMCET Preparation' },
    { to: '/courses', label: 'Long-term Programs' },
    { to: '/courses', label: 'Crash Course' }
  ]

  const resources = [
    { to: '/blog', label: 'Study Tips' },
    { to: '/blog', label: 'Exam Strategies' },
    { to: '/blog', label: 'Success Stories' },
    { to: '/about', label: 'Faculty Profiles' },
    { to: '/contact', label: 'Admission Process' }
  ]

  const socialLinks = [
    { icon: FaFacebook, href: '#', color: 'bg-blue-600 hover:bg-blue-700' },
    { icon: FaTwitter, href: '#', color: 'bg-blue-400 hover:bg-blue-500' },
    { icon: FaInstagram, href: '#', color: 'bg-pink-500 hover:bg-pink-600' },
    { icon: FaLinkedin, href: '#', color: 'bg-blue-700 hover:bg-blue-800' },
    { icon: FaYoutube, href: '#', color: 'bg-red-600 hover:bg-red-700' }
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <div className="h-12 sm:h-14 md:h-16 overflow-hidden">
                <img 
                  src="/images/logo.png" 
                  alt="Andhra Inspire Academy Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              We are dedicated to providing world-class education and mentorship to students preparing 
              for Intermediate, JEE Mains, and EAMCET. Join us in your journey to academic excellence.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <FaPhone className="text-primary-500" />
                <span className="text-sm">+91 9848628863</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaEnvelope className="text-primary-500" />
                <span className="text-sm">info@andhrainspire.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FaMapMarkerAlt className="text-primary-500" />
                <span className="text-sm">16.50632, 80.64574, Vijayawada, AP</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FaRocket className="text-primary-500" />
              Quick Links
            </h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index}>
                  <FooterLink to={link.to}>{link.label}</FooterLink>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FaBookOpen className="text-primary-500" />
              Our Courses
            </h3>
            <div className="space-y-3">
              {courses.map((course, index) => (
                <div key={index}>
                  <FooterLink to={course.to}>{course.label}</FooterLink>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Resources & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <FaTrophy className="text-primary-500" />
              Resources
            </h3>
            <div className="space-y-3 mb-8">
              {resources.map((resource, index) => (
                <div key={index}>
                  <FooterLink to={resource.to}>{resource.label}</FooterLink>
                </div>
              ))}
            </div>
            
            <div>
              <h4 className="text-sm font-semibold mb-4 text-gray-300">Follow Us</h4>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <SocialIcon key={index} {...social} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Stay Updated</h3>
            <p className="text-gray-400 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Subscribe to our newsletter for the latest updates on courses, exam tips, and success stories.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <motion.button
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Andhra Inspire Academy. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <Link to="/privacy" className="hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/refund" className="hover:text-primary-500 transition-colors">
                Refund Policy
              </Link>
            </div>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors duration-300"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaArrowUp />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
