import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const ScrollingBanner = ({ images, autoPlayInterval = 4000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, autoPlayInterval)

    return () => clearInterval(timer)
  }, [images.length, autoPlayInterval])

  const slideVariants = {
    enter: {
      x: 1000,
      opacity: 0
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: {
      zIndex: 0,
      x: -1000,
      opacity: 0
    }
  }

  const paginate = (newDirection) => {
    if (newDirection === 1) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    } else {
      setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1)
    }
  }

  return (
    <div className="w-full bg-gradient-to-r from-blue-50 to-indigo-50 py-2 sm:py-4 border-y border-blue-200 overflow-hidden">
      <div className="container mx-auto px-3 sm:px-6 lg:px-16 xl:px-24">
        <div className="relative h-[200px] sm:h-[300px] lg:h-[500px] xl:h-[600px] overflow-hidden rounded-xl lg:rounded-2xl shadow-2xl bg-white">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentIndex}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <a
                href="https://wa.me/919848628863?text=Hi%2C%20I%20want%20to%20register%20for%20admission%20at%20Inspire%20Academy"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full h-full cursor-pointer"
              >
                <img
                  src={images[currentIndex]}
                  alt={`Banner ${currentIndex + 1} - Click to Register`}
                  className="w-full h-full object-contain"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 via-transparent to-transparent pointer-events-none"></div>
              </a>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons - Hidden on small mobile, visible from sm up */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 shadow-lg hover:scale-110 active:scale-95"
            aria-label="Previous banner"
          >
            <FaChevronLeft className="text-base sm:text-lg" />
          </button>
          
          <button
            onClick={() => paginate(1)}
            className="absolute right-4 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-white/95 backdrop-blur-sm border-2 border-blue-600 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 z-10 shadow-lg hover:scale-110 active:scale-95"
            aria-label="Next banner"
          >
            <FaChevronRight className="text-base sm:text-lg" />
          </button>

          {/* Pagination Dots - Simple professional dots */}
          <div className="absolute bottom-3 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex
                    ? 'w-2.5 h-2.5 bg-blue-600 border-2 border-white shadow-md'
                    : 'w-2.5 h-2.5 bg-white/60 hover:bg-white border border-white/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollingBanner

