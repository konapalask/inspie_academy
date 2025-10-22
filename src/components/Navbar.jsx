import React, { useState, useEffect } from 'react'
import { Link, useLocation, NavLink as RouterNavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaMinus } from 'react-icons/fa'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [isMobileMenuOpen])

  const navItems = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/courses', label: 'Programs' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/results', label: 'Results' },
    { to: '/contact', label: 'Contact' }
  ]

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-white border-b border-gray-200' : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-6 lg:px-16 xl:px-24">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img 
                src="/images/aia logo.png" 
                alt="Inspire Academy Logo" 
                className="h-12 w-auto object-contain"
              />
              <div className="hidden sm:block">
                <div className="text-xl font-semibold tracking-tight text-black">Inspire Academy</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-gray-500">Education Excellence</div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <RouterNavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-6 py-2 text-xs tracking-[0.1em] uppercase font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-black'
                        : 'text-gray-500 hover:text-black'
                    }`
                  }
                >
                  {item.label}
                </RouterNavLink>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <Link
                to="/admissions"
                className="bg-black text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:bg-gray-900 transition-all duration-500"
              >
                Enroll Now
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-black hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white z-40 lg:hidden"
            style={{ paddingTop: '80px' }}
          >
            <div className="container mx-auto px-6 py-12">
              <nav className="flex flex-col gap-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <RouterNavLink
                      to={item.to}
                      className={({ isActive }) =>
                        `block px-6 py-6 text-2xl font-light tracking-tight border-b border-gray-100 transition-all duration-300 ${
                          isActive ? 'text-black' : 'text-gray-500'
                        }`
                      }
                    >
                      {item.label}
                    </RouterNavLink>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12"
              >
                <Link
                  to="/admissions"
                  className="block w-full bg-black text-white text-center px-8 py-6 text-sm tracking-[0.15em] uppercase font-medium"
                >
                  Enroll Now
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
