import React, { useRef, useEffect, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box, Sphere, Torus, Text, Float, MeshWobbleMaterial, MeshDistortMaterial } from '@react-three/drei'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Animated 3D Text
function AnimatedText({ text, position, color = "#3b82f6", inView }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.2
    }
  })

  return (
    <Text3D
      ref={meshRef}
      font="/fonts/helvetiker_regular.typeface.json"
      size={0.5}
      height={0.1}
      curveSegments={12}
      bevelEnabled
      bevelThickness={0.02}
      bevelSize={0.02}
      bevelOffset={0}
      bevelSegments={5}
      position={position}
    >
      {text}
      <meshStandardMaterial color={color} />
    </Text3D>
  )
}

// Enhanced Floating 3D Icons with Advanced Animations
function FloatingIcon({ position, children, inView, delay = 0, animationType = "float" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      const time = state.clock.elapsedTime
      
      if (animationType === "float") {
        meshRef.current.rotation.x += 0.01
        meshRef.current.rotation.y += 0.02
        meshRef.current.position.y = position[1] + Math.sin(time * 0.6 + delay) * 0.3
      } else if (animationType === "orbit") {
        meshRef.current.rotation.y += 0.02
        meshRef.current.position.x = position[0] + Math.cos(time * 0.3 + delay) * 0.5
        meshRef.current.position.z = position[2] + Math.sin(time * 0.3 + delay) * 0.5
        meshRef.current.position.y = position[1] + Math.sin(time * 0.4 + delay) * 0.2
      } else if (animationType === "pulse") {
        const scale = 1 + Math.sin(time * 0.8 + delay) * 0.1
        meshRef.current.scale.setScalar(scale)
        meshRef.current.rotation.y += 0.01
        meshRef.current.position.y = position[1] + Math.sin(time * 0.6 + delay) * 0.25
      } else if (animationType === "spiral") {
        const radius = 1 + Math.sin(time * 0.3 + delay) * 0.3
        const angle = time * 0.2 + delay
        meshRef.current.position.x = position[0] + Math.cos(angle) * radius
        meshRef.current.position.z = position[2] + Math.sin(angle) * radius
        meshRef.current.position.y = position[1] + Math.sin(time * 0.5 + delay) * 0.3
        meshRef.current.rotation.y += 0.03
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {children}
      </group>
    </Float>
  )
}

// Enhanced Periodic Table Element with Advanced Materials
function PeriodicElement({ position, inView }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Box args={[0.3, 0.3, 0.1]} position={[0, 0, 0]}>
        <MeshWobbleMaterial color="#3b82f6" speed={1.5} factor={0.3} />
      </Box>
      <Box args={[0.25, 0.25, 0.05]} position={[0, 0, 0.05]}>
        <MeshDistortMaterial color="#1e40af" speed={1.2} distort={0.2} />
      </Box>
    </group>
  )
}

// Physics Pendulum
function Pendulum({ position, inView }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.8) * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6) * 0.15
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Pendulum string */}
      <Box args={[0.02, 0.4, 0.02]} position={[0, -0.2, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>
      {/* Pendulum bob */}
      <Sphere args={[0.08]} position={[0, -0.4, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Sphere>
    </group>
  )
}

// Mathematical Graph (3D)
function MathGraph({ position, inView }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current && inView) {
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.4) * 0.1
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Graph axes */}
      <Box args={[0.4, 0.02, 0.02]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>
      <Box args={[0.02, 0.4, 0.02]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>
      {/* Graph points */}
      <Sphere args={[0.03]} position={[-0.1, 0.1, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Sphere>
      <Sphere args={[0.03]} position={[0, 0.2, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
      <Sphere args={[0.03]} position={[0.1, 0.1, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Sphere>
    </group>
  )
}

// Enhanced 3D Scene for Scroll Animation
function ScrollScene({ inView }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[10, -10, 10]} intensity={0.6} color="#ff6b6b" />
      
      {/* Enhanced Educational Icons with Different Animation Types */}
      <FloatingIcon position={[-2, 1, 0]} inView={inView} delay={0} animationType="orbit">
        <PeriodicElement position={[0, 0, 0]} inView={inView} />
      </FloatingIcon>
      
      <FloatingIcon position={[2, 1, 0]} inView={inView} delay={1} animationType="pulse">
        <Pendulum position={[0, 0, 0]} inView={inView} />
      </FloatingIcon>
      
      <FloatingIcon position={[0, 2, -1]} inView={inView} delay={2} animationType="spiral">
        <MathGraph position={[0, 0, 0]} inView={inView} />
      </FloatingIcon>
      
      <FloatingIcon position={[-1, 0, 1]} inView={inView} delay={0.5} animationType="float">
        <Sphere args={[0.2]}>
          <MeshDistortMaterial color="#10b981" speed={1.5} distort={0.3} />
        </Sphere>
      </FloatingIcon>
      
      <FloatingIcon position={[1, 0, 1]} inView={inView} delay={1.5} animationType="orbit">
        <Torus args={[0.2, 0.05, 8, 16]}>
          <MeshWobbleMaterial color="#8b5cf6" speed={1.2} factor={0.4} />
        </Torus>
      </FloatingIcon>
      
      {/* Additional 3D Elements */}
      <FloatingIcon position={[-3, -1, 0]} inView={inView} delay={0.8} animationType="pulse">
        <Box args={[0.15, 0.15, 0.15]}>
          <MeshWobbleMaterial color="#f59e0b" speed={1.8} factor={0.3} />
        </Box>
      </FloatingIcon>
      
      <FloatingIcon position={[3, -1, 0]} inView={inView} delay={1.2} animationType="spiral">
        <Sphere args={[0.12]}>
          <MeshDistortMaterial color="#ef4444" speed={1.6} distort={0.4} />
        </Sphere>
      </FloatingIcon>
      
      {/* Holographic Text Elements */}
      {inView && (
        <Text
          position={[0, 3, -2]}
          fontSize={0.3}
          color="#00ffff"
          anchorX="center"
          anchorY="middle"
        >
          EDUCATION
          <meshStandardMaterial
            color="#00ffff"
            transparent
            opacity={0.8}
            emissive="#004444"
            emissiveIntensity={0.3}
          />
        </Text>
      )}
    </>
  )
}

// Enhanced Scroll Animation Component with 3D Transforms
export default function ScrollAnimation({ children, className = "" }) {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false
  })

  return (
    <motion.div 
      ref={ref} 
      className={`relative ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px',
      }}
      whileInView={{
        rotateX: 0,
        rotateY: 0,
        scale: 1,
      }}
      initial={{
        rotateX: 5,
        rotateY: 5,
        scale: 0.95,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut"
      }}
    >
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          style={{ background: 'transparent' }}
          shadows
          gl={{ antialias: true, alpha: true }}
        >
          <ScrollScene inView={inView} />
        </Canvas>
      </div>
      <motion.div 
        className="relative z-10"
        style={{
          transformStyle: 'preserve-3d',
        }}
        whileInView={{
          translateZ: 0,
        }}
        initial={{
          translateZ: -50,
        }}
        transition={{
          duration: 0.6,
          delay: 0.2,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}
