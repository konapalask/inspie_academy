import React, { useRef, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'

const ThreeDCard = ({ 
  children, 
  className = "", 
  intensity = 20, 
  scale = 1.05,
  glow = true,
  ...props 
}) => {
  const cardRef = useRef(null)
  const [isHovered, setIsHovered] = useState(false)
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const rotateX = useTransform(y, [-100, 100], [intensity, -intensity])
  const rotateY = useTransform(x, [-100, 100], [-intensity, intensity])
  
  const springX = useSpring(rotateX, { stiffness: 300, damping: 30 })
  const springY = useSpring(rotateY, { stiffness: 300, damping: 30 })
  
  const handleMouseMove = (event) => {
    if (!cardRef.current) return
    
    const rect = cardRef.current.getBoundingClientRect()
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
    setIsHovered(false)
  }
  
  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  return (
    <motion.div
      ref={cardRef}
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        rotateX: springX,
        rotateY: springY,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      whileHover={{ scale: scale }}
      transition={{ duration: 0.3 }}
      {...props}
    >
      {/* 3D Card Content */}
      <motion.div
        className="relative z-10 h-full"
        style={{
          transform: 'translateZ(20px)',
        }}
      >
        {children}
      </motion.div>
      
      {/* Glow Effect */}
      {glow && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-blue-500/20 rounded-lg opacity-0"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      {/* Back Glow */}
      <motion.div
        className="absolute -inset-2 bg-gradient-to-r from-primary-400/10 to-blue-400/10 rounded-lg blur-sm opacity-0"
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Side Glow Effects */}
      <motion.div
        className="absolute -inset-1 bg-gradient-to-r from-primary-300/5 to-blue-300/5 rounded-lg blur-md opacity-0"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

// Enhanced Feature Card with 3D Effects
export const FeatureCard = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <ThreeDCard 
      className={`p-6 rounded-2xl bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
      intensity={15}
      scale={1.02}
    >
      <div className="text-center">
        <motion.div
          className="w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4"
          whileHover={{ 
            rotateY: 180,
            scale: 1.1,
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="text-white text-2xl" />
        </motion.div>
        
        <motion.h3 
          className="text-xl font-semibold text-gray-800 mb-2"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
      </div>
    </ThreeDCard>
  )
}

// Enhanced Testimonial Card with 3D Effects
export const TestimonialCard = ({ name, course, score, quote, className = "" }) => {
  return (
    <ThreeDCard 
      className={`p-6 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
      intensity={12}
      scale={1.03}
    >
      <div className="space-y-4">
        {/* Stars */}
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="text-yellow-400 mr-1"
              whileHover={{ 
                scale: 1.2,
                rotate: 360,
              }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              ★
            </motion.div>
          ))}
        </motion.div>
        
        {/* Quote */}
        <motion.blockquote 
          className="text-gray-600 italic"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          "{quote}"
        </motion.blockquote>
        
        {/* Author Info */}
        <motion.div 
          className="border-t pt-4"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="font-semibold text-gray-800">{name}</div>
          <div className="text-primary-600 text-sm">{course} - {score}</div>
        </motion.div>
      </div>
    </ThreeDCard>
  )
}

// Enhanced Course Card with 3D Effects
export const CourseCard = ({ title, description, price, features, className = "" }) => {
  return (
    <ThreeDCard 
      className={`p-6 rounded-2xl bg-gradient-to-br from-primary-50 to-blue-50 shadow-lg hover:shadow-2xl transition-all duration-300 ${className}`}
      intensity={18}
      scale={1.04}
    >
      <div className="space-y-4">
        <motion.h3 
          className="text-2xl font-bold text-gray-800"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {description}
        </motion.p>
        
        <motion.div 
          className="space-y-2"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-center text-sm text-gray-700"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <span className="text-green-500 mr-2">✓</span>
              {feature}
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-3xl font-bold text-primary-600"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.2 }}
        >
          {price}
        </motion.div>
      </div>
    </ThreeDCard>
  )
}

// Floating Action Button with 3D Effects
export const FloatingActionButton = ({ icon: Icon, onClick, className = "" }) => {
  return (
    <motion.button
      className={`w-16 h-16 bg-gradient-to-br from-primary-500 to-blue-600 rounded-full shadow-lg hover:shadow-2xl flex items-center justify-center text-white ${className}`}
      whileHover={{ 
        scale: 1.1,
        rotateY: 180,
        rotateX: 10,
      }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-2xl" />
      </motion.div>
    </motion.button>
  )
}

export default ThreeDCard
