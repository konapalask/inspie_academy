"use client";
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
      className="fixed inset-0 z-[9999] bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="text-center relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12"
        >
          {/* Logo Image */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex items-center justify-center mb-8"
          >
            <div className="w-32 h-32 bg-white rounded-3xl shadow-2xl flex items-center justify-center border-4 border-blue-100">
              <img 
                src="/images/aia logo.png" 
                alt="Inspire Academy Logo" 
                className="w-24 h-24 object-contain"
              />
            </div>
          </motion.div>
          
          {/* Academy Name */}
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Inspire
            </span> Academy
          </h1>
          
          <div className="flex items-center justify-center gap-3">
            <FaMinus className="text-xs text-white/50" />
            <p className="text-xs tracking-[0.3em] uppercase text-cyan-400 font-bold">
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
          <div className="h-1.5 bg-white/10 rounded-full relative overflow-hidden mb-6 shadow-lg">
            <motion.div
              className="absolute inset-y-0 left-0 bg-gradient-to-r from-blue-500 via-cyan-400 to-indigo-500 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
              style={{
                boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)'
              }}
            />
          </div>

          {/* Progress Text */}
          <div className="text-white/80 text-sm tracking-[0.15em] font-semibold uppercase">
            Loading Excellence <span className="text-cyan-400">{Math.round(progress)}%</span>
          </div>
        </motion.div>

        {/* Animated Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex items-center justify-center gap-3 mt-12"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
              animate={{
                opacity: [0.3, 1, 0.3],
                scale: [1, 1.5, 1],
                y: [0, -8, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ThreeDLoadingScreen
