import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Box, Torus, Float, MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Loading Animation Component
function LoadingAnimation({ progress = 0 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y += 0.02
      meshRef.current.rotation.x += 0.01
      meshRef.current.position.y = Math.sin(time * 0.8) * 0.2
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group ref={meshRef}>
        {/* Main Loading Sphere */}
        <Sphere args={[0.5]}>
          <MeshDistortMaterial 
            color="#3b82f6" 
            speed={2} 
            distort={0.3}
            transparent
            opacity={0.8}
          />
        </Sphere>
        
        {/* Progress Ring */}
        <Torus args={[0.8, 0.05, 8, 16]} rotation={[Math.PI / 2, 0, 0]}>
          <MeshWobbleMaterial 
            color="#10b981" 
            speed={1.5} 
            factor={0.2}
            transparent
            opacity={0.6}
          />
        </Torus>
        
        {/* Progress Indicator */}
        <Torus 
          args={[0.8, 0.08, 8, 16]} 
          rotation={[Math.PI / 2, 0, 0]}
          scale={[progress, 1, 1]}
        >
          <meshStandardMaterial 
            color="#f59e0b" 
            transparent
            opacity={0.9}
            emissive="#f59e0b"
            emissiveIntensity={0.3}
          />
        </Torus>
      </group>
    </Float>
  )
}

// Performance Monitor Component
function PerformanceMonitor({ onPerformanceChange }) {
  const frameCount = useRef(0)
  const lastTime = useRef(performance.now())
  
  useFrame(() => {
    frameCount.current++
    const currentTime = performance.now()
    
    if (currentTime - lastTime.current >= 1000) {
      const fps = Math.round((frameCount.current * 1000) / (currentTime - lastTime.current))
      onPerformanceChange(fps)
      frameCount.current = 0
      lastTime.current = currentTime
    }
  })
  
  return null
}

// Adaptive Quality Component
function AdaptiveQuality({ children, targetFPS = 60 }) {
  const [quality, setQuality] = React.useState('high')
  const [fps, setFps] = React.useState(60)
  
  React.useEffect(() => {
    if (fps < targetFPS * 0.8) {
      setQuality('medium')
    } else if (fps < targetFPS * 0.6) {
      setQuality('low')
    } else if (fps > targetFPS * 0.9) {
      setQuality('high')
    }
  }, [fps, targetFPS])
  
  const qualitySettings = {
    high: { particles: 2000, stars: 5000, shadows: true },
    medium: { particles: 1000, stars: 3000, shadows: true },
    low: { particles: 500, stars: 1500, shadows: false }
  }
  
  const settings = qualitySettings[quality]
  
  return (
    <>
      <PerformanceMonitor onPerformanceChange={setFps} />
      {React.cloneElement(children, { qualitySettings: settings })}
    </>
  )
}

// Loading Screen Component
export function ThreeDLoadingScreen({ isLoading, progress = 0, onComplete }) {
  React.useEffect(() => {
    if (progress >= 100 && onComplete) {
      setTimeout(onComplete, 500)
    }
  }, [progress, onComplete])

  if (!isLoading) return null

  return (
    <motion.div
      className="fixed inset-0 z-50 bg-gradient-to-br from-primary-900 via-blue-900 to-purple-900 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative w-full h-full">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00ffff" />
          
          <LoadingAnimation progress={progress / 100} />
        </Canvas>
        
        {/* Loading Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-4xl font-bold mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Andhra Inspire Academy
            </motion.h2>
            <motion.p 
              className="text-xl mb-8"
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Loading Amazing Educational Experience...
            </motion.p>
            
            {/* Progress Bar */}
            <div className="w-64 h-2 bg-white/20 rounded-full overflow-hidden mx-auto">
              <motion.div
                className="h-full bg-gradient-to-r from-primary-500 to-blue-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
            
            <motion.p 
              className="text-sm mt-4"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              {Math.round(progress)}% Complete
            </motion.p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// Performance Optimized Canvas Wrapper
export function OptimizedCanvas({ children, className = "", fallback = null }) {
  const [isLoaded, setIsLoaded] = React.useState(false)
  const [error, setError] = React.useState(null)
  
  React.useEffect(() => {
    // Simulate loading time for 3D assets
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    
    return () => clearTimeout(timer)
  }, [])
  
  if (error) {
    return fallback || <div className={className}>3D content unavailable</div>
  }
  
  if (!isLoaded) {
    return (
      <div className={`${className} flex items-center justify-center bg-gray-100`}>
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
      </div>
    )
  }
  
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance",
          precision: "mediump"
        }}
        onError={setError}
      >
        <AdaptiveQuality>
          {children}
        </AdaptiveQuality>
      </Canvas>
    </div>
  )
}

// Memory Management Hook
export function useThreeDMemoryManagement() {
  const [memoryUsage, setMemoryUsage] = React.useState(0)
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      if (performance.memory) {
        setMemoryUsage(performance.memory.usedJSHeapSize / 1024 / 1024) // MB
      }
    }, 1000)
    
    return () => clearInterval(interval)
  }, [])
  
  return memoryUsage
}

export default ThreeDLoadingScreen
