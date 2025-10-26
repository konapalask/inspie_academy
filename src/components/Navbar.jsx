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
          isScrolled ? 'bg-white/95 border-b border-blue-200 shadow-sm' : 'bg-white/90 backdrop-blur-md'
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
                <div className="text-xl font-semibold tracking-tight text-slate-900">Inspire Academy</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-slate-500">Education Excellence</div>
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
                        ? 'text-slate-900'
                        : 'text-slate-500 hover:text-slate-900'
                    }`
                  }
                >
                  {item.label}
                </RouterNavLink>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://wa.me/919848628863?text=Hi%2C%20I%20want%20to%20enroll%20for%20admission%20at%20Inspire%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 text-xs tracking-[0.15em] uppercase font-medium hover:from-blue-700 hover:to-indigo-700 transition-all duration-500 rounded-lg"
              >
                Enroll Now
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-slate-900 hover:bg-slate-100 transition-colors rounded-lg"
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
                        `block px-6 py-6 text-2xl font-light tracking-tight border-b border-slate-100 transition-all duration-300 ${
                          isActive ? 'text-slate-900' : 'text-slate-500'
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
                <a
                  href="https://wa.me/919848628863?text=Hi%2C%20I%20want%20to%20enroll%20for%20admission%20at%20Inspire%20Academy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center px-8 py-6 text-sm tracking-[0.15em] uppercase font-medium rounded-lg"
                >
                  Enroll Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
