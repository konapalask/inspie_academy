import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere, Torus } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import * as THREE from 'three'

// Animated 3D Number
function AnimatedNumber({ value, position, color = "#3b82f6", inView }) {
  const meshRef = useRef()
  const [displayValue, setDisplayValue] = useState(0)
  
  useEffect(() => {
    if (inView) {
      const duration = 2000 // 2 seconds
      const startTime = Date.now()
      const startValue = 0
      const endValue = value
      
      const animate = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutCubic = 1 - Math.pow(1 - progress, 3)
        const currentValue = Math.floor(startValue + (endValue - startValue) * easeOutCubic)
        
        setDisplayValue(currentValue)
        
        if (progress < 1) {
          requestAnimationFrame(animate)
        }
      }
      
      animate()
    }
  }, [value, inView])
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.1
    }
  })

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.8}
      height={0.1}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      position={position}
    >
      {displayValue}
      <meshStandardMaterial color={color} />
    </Text3D>
  )
}

// Floating 3D Icon
function FloatingIcon({ position, children, inView, delay = 0 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.02
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + delay) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {children}
    </group>
  )
}

// Educational 3D Objects for Stats
function EducationalIcon({ position, children, inView, delay = 0 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.x += 0.005
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + delay) * 0.15
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {children}
    </group>
  )
}

// Molecular Structure (Chemistry)
function Molecule({ position, inView }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Sphere args={[0.1]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>
      <Sphere args={[0.08]} position={[0.2, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
      <Sphere args={[0.08]} position={[-0.2, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Sphere>
    </group>
  )
}

// Mathematical Equation (3D)
function MathEquation({ position, inView }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.y += 0.008
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.12
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Box args={[0.1, 0.2, 0.1]} position={[-0.1, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Sphere args={[0.05]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
      <Box args={[0.1, 0.2, 0.1]} position={[0.1, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
    </group>
  )
}

// 3D Scene for Stats
function StatsScene({ inView }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {/* Educational Icons */}
      <EducationalIcon position={[-3, 1, 0]} inView={inView} delay={0}>
        <Molecule position={[0, 0, 0]} inView={inView} />
      </EducationalIcon>
      
      <EducationalIcon position={[3, 1, 0]} inView={inView} delay={1}>
        <MathEquation position={[0, 0, 0]} inView={inView} />
      </EducationalIcon>
      
      <EducationalIcon position={[0, 2, -1]} inView={inView} delay={2}>
        <Torus args={[0.2, 0.05, 8, 16]}>
          <meshStandardMaterial color="#f59e0b" />
        </Torus>
      </EducationalIcon>
    </>
  )
}

// Main Animated Stats Component
export default function AnimatedStats({ stats, className = "" }) {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  })

  return (
    <div ref={ref} className={`relative ${className}`}>
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
        >
          <StatsScene inView={inView} />
        </Canvas>
      </div>
      <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl lg:text-5xl font-bold text-primary-600 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
