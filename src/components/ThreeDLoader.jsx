import React from 'react'
import { motion } from 'framer-motion'
import { FaMinus } from 'react-icons/fa'

export function ThreeDLoadingScreen({ isLoading, progress = 0, onComplete }) {
  if (!isLoading) return null

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-16 bg-white flex items-center justify-center">
              <span className="text-black font-bold text-3xl">I</span>
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-light text-white mb-4 tracking-tight">
            <span className="font-semibold">Inspire</span> Academy
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <FaMinus className="text-xs text-white/50" />
            <p className="text-xs tracking-[0.3em] uppercase text-white/50">
              Education Excellence
            </p>
            <FaMinus className="text-xs text-white/50" />
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="w-80 max-w-[90vw] mx-auto"
        >
          {/* Progress Track */}
          <div className="h-px bg-white/20 relative overflow-hidden mb-4">
            <motion.div
              className="absolute inset-y-0 left-0 bg-white"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Progress Text */}
          <div className="text-white/50 text-xs tracking-[0.2em] font-light">
            LOADING {Math.round(progress)}%
          </div>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-2 mt-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-1 h-1 bg-white"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ThreeDLoadingScreen
