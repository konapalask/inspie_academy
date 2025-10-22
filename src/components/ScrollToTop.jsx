import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
  const { pathname } = useLocation()
  const [isVisible, setIsVisible] = useState(false)

  // Handle route changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  // Handle scroll visibility
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    // Add scroll listener
    window.addEventListener('scroll', toggleVisibility)

    // Cleanup
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  // Smooth scroll to top with mobile support
  const scrollToTop = () => {
    // Check if smooth scroll is supported
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    } else {
      // Fallback for older browsers
      const scrollStep = -window.scrollY / (500 / 15)
      const scrollInterval = setInterval(() => {
        if (window.scrollY !== 0) {
          window.scrollBy(0, scrollStep)
        } else {
          clearInterval(scrollInterval)
        }
      }, 15)
    }
  }

  return (
    <>
      {/* Scroll to top button */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={scrollToTop}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-primary-600 hover:bg-primary-700 text-white p-3 sm:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 touch-manipulation min-w-[48px] min-h-[48px] flex items-center justify-center scroll-to-top-btn"
            aria-label="Scroll to top"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaArrowUp className="text-sm sm:text-base" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

export default ScrollToTop
