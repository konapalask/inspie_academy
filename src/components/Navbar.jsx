import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { FaBars, FaTimes, FaPhone, FaWhatsapp, FaGraduationCap, FaRobot } from 'react-icons/fa'
import AIChatbot from './AIChatbot'

const NavLink = ({to, children, onClick}) => {
  const loc = useLocation()
  const active = loc.pathname === to
  const ref = useRef(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-100, 100], [15, -15]) // Reduced rotation for mobile
  const rotateY = useTransform(x, [-100, 100], [-15, 15])

  const handleMouseMove = (event) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    const distanceX = event.clientX - centerX
    const distanceY = event.clientY - centerY
    x.set(distanceX)
    y.set(distanceY)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <Link 
      ref={ref}
      to={to} 
      onClick={onClick}
      className={`relative px-2 xl:px-3 py-1 xl:py-1.5 rounded-lg transition-all duration-300 text-xs xl:text-sm ${
        active 
          ? 'text-primary-600 font-semibold bg-primary-50' 
          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
      }`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: rotateX,
        rotateY: rotateY,
      }}
    >
      <motion.div
        className="relative z-10"
        style={{
          transform: 'translateZ(10px)', // Reduced for mobile
        }}
      >
        {children}
      </motion.div>
      {active && (
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-600"
          layoutId="activeTab"
          initial={false}
          transition={{ type: "spring", stiffness: 500, damping: 30 }}
        />
      )}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-lg opacity-0"
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </Link>
  )
}

export default function Navbar(){
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/courses', label: 'Courses' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/results', label: 'Results' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/blog', label: 'Blog' },
    { to: '/faq', label: 'FAQ' },
    { to: '/student-login', label: 'Student Login' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <motion.header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'header-bg shadow-lg backdrop-blur-md' 
          : 'bg-white/90 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-2 sm:py-3 flex items-center justify-between relative">
        {/* Enhanced Logo with Text - Much Larger and More Visible */}
        <Link to="/" className="group flex items-center gap-2 sm:gap-3 flex-1 lg:flex-none">
          <motion.div 
            className="h-16 w-auto sm:h-18 md:h-20 lg:h-22 xl:h-24 shadow-xl overflow-hidden relative bg-white rounded-lg px-4 sm:px-5 py-2 logo-container flex-1 lg:flex-none"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              rotateX: 5,
            }}
            whileTap={{ scale: 0.95 }}
            style={{
              transformStyle: 'preserve-3d',
            }}
          >
            <motion.div
              className="relative z-10 w-full h-full flex items-center"
              whileHover={{
                rotateY: 10,
                rotateX: 5,
              }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/logo.png" 
                alt="Andhra Inspire Academy Logo" 
                className="h-full w-auto object-contain"
              />
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-xl opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 sm:-inset-2 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-xl blur-sm opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
          
          {/* Academy Name - Visible on Mobile */}
          <div className="flex flex-col lg:hidden mobile-logo-text">
            <h1 className="text-lg font-bold text-primary-600 leading-tight">
              Andhra Inspire Academy
            </h1>
            <p className="text-xs text-gray-600 leading-tight">
              Best Institute for Intermediate Students
            </p>
          </div>
        </Link>

        {/* Desktop Navigation - Improved Spacing */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop CTA Buttons with 3D Effects - Mobile Responsive */}
        <div className="hidden lg:flex items-center gap-2 xl:gap-4">
          <motion.a 
            href="tel:9848628863" 
            className="flex items-center gap-1 xl:gap-2 text-primary-600 hover:text-primary-700 transition-colors relative group px-2 py-1 rounded-lg"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative z-10 flex items-center gap-1 xl:gap-2"
              whileHover={{ rotateY: 10 }}
              transition={{ duration: 0.3 }}
            >
              <FaPhone className="text-xs xl:text-sm" />
              <span className="text-xs xl:text-sm font-medium hidden xl:inline">Call Now</span>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-lg opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.a>
          
          <motion.button
            onClick={() => setIsChatbotOpen(true)}
            className="flex items-center gap-1 xl:gap-2 bg-primary-600 text-white px-2 xl:px-4 py-1 xl:py-2 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 hover:shadow-lg relative group text-xs xl:text-sm"
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
              y: -2,
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <motion.div
              className="relative z-10 flex items-center gap-1 xl:gap-2"
              whileHover={{ rotateY: 10 }}
              transition={{ duration: 0.3 }}
            >
              <FaRobot className="text-xs xl:text-sm" />
              <span className="hidden xl:inline">Chatbot</span>
              <span className="xl:hidden">Chatbot</span>
            </motion.div>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-primary-500/30 rounded-lg opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-blue-400/20 to-primary-400/20 rounded-lg blur-sm opacity-0"
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
        </div>

        {/* Mobile Menu Button - Improved Touch Target */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-4 rounded-lg text-gray-700 hover:text-primary-600 hover:bg-primary-50 transition-colors touch-manipulation min-w-[56px] min-h-[56px] flex items-center justify-center"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu - Enhanced Mobile Experience */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white z-50 shadow-lg border-t border-gray-200 mobile-menu"
          >
            <div className="px-4 py-6 space-y-3">
              {/* Navigation Links */}
              {navItems.map((item, index) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <NavLink 
                    to={item.to} 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 px-4 text-lg font-semibold rounded-lg hover:bg-primary-50 transition-colors min-h-[56px] flex items-center"
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
              
              {/* Contact Buttons */}
              <div className="pt-4 border-t border-gray-200 space-y-3">
                <a 
                  href="tel:9848628863" 
                  className="flex items-center gap-3 text-primary-600 hover:text-primary-700 transition-colors w-full py-3 px-4 text-lg font-semibold rounded-lg hover:bg-primary-50 min-h-[56px]"
                >
                  <FaPhone className="text-lg" />
                  <span>Call Now</span>
                </a>
                <button
                  onClick={() => {
                    setIsChatbotOpen(true)
                    setIsMobileMenuOpen(false)
                  }}
                  className="flex items-center gap-3 bg-primary-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-all duration-300 w-full justify-center text-lg min-h-[56px]"
                >
                  <FaRobot className="text-lg" />
                  Chatbot
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* AI Chatbot */}
      <AIChatbot 
        isOpen={isChatbotOpen} 
        onClose={() => setIsChatbotOpen(false)} 
      />
    </motion.header>
  )
}
