import React, { useRef, useMemo, useState, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { 
  Sphere, 
  Box, 
  Torus, 
  Text, 
  Float, 
  MeshWobbleMaterial, 
  MeshDistortMaterial,
  Stars,
  Environment,
  ContactShadows,
  OrbitControls,
  useTexture
} from '@react-three/drei'
import { motion } from 'framer-motion'
import * as THREE from 'three'

// Interactive 3D Logo Component
function InteractiveLogo({ position, scale = 1 }) {
  const meshRef = useRef()
  const [hovered, setHovered] = useState(false)
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.2
      
      if (hovered) {
        meshRef.current.scale.setScalar(scale * 1.1)
      } else {
        meshRef.current.scale.setScalar(scale)
      }
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <group 
        ref={meshRef} 
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Main Logo Sphere */}
        <Sphere args={[0.5]}>
          <MeshDistortMaterial 
            color="#3b82f6" 
            speed={1.5} 
            distort={0.3}
            transparent
            opacity={0.9}
            emissive="#1e40af"
            emissiveIntensity={0.2}
          />
        </Sphere>
        
        {/* Orbiting Rings */}
        <Torus args={[0.8, 0.05, 8, 16]} rotation={[Math.PI / 2, 0, 0]}>
          <MeshWobbleMaterial color="#10b981" speed={1.2} factor={0.3} />
        </Torus>
        
        <Torus args={[0.8, 0.05, 8, 16]} rotation={[0, Math.PI / 2, 0]}>
          <MeshWobbleMaterial color="#f59e0b" speed={1.8} factor={0.4} />
        </Torus>
      </group>
    </Float>
  )
}

// Floating Educational Icons
function FloatingEducationIcon({ position, icon, color, animationType = "float" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      
      if (animationType === "float") {
        meshRef.current.position.y = position[1] + Math.sin(time * 0.6) * 0.3
        meshRef.current.rotation.y += 0.01
      } else if (animationType === "orbit") {
        meshRef.current.rotation.y += 0.02
        meshRef.current.position.x = position[0] + Math.cos(time * 0.3) * 0.5
        meshRef.current.position.z = position[2] + Math.sin(time * 0.3) * 0.5
        meshRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.2
      } else if (animationType === "pulse") {
        const scale = 1 + Math.sin(time * 0.8) * 0.1
        meshRef.current.scale.setScalar(scale)
        meshRef.current.rotation.y += 0.01
        meshRef.current.position.y = position[1] + Math.sin(time * 0.6) * 0.25
      }
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
      <group ref={meshRef} position={position}>
        {icon}
      </group>
    </Float>
  )
}

// 3D Text with Advanced Effects
function ThreeDText({ text, position, size = 0.5, color = "#ffffff" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.position.y = position[1] + Math.sin(time * 0.5) * 0.1
      meshRef.current.rotation.y = Math.sin(time * 0.3) * 0.1
    }
  })

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={size}
      color={color}
      anchorX="center"
      anchorY="middle"
      font="/fonts/helvetiker_regular.typeface.json"
    >
      {text}
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.9}
        emissive={color}
        emissiveIntensity={0.3}
      />
    </Text>
  )
}

// Interactive Particle System
function InteractiveParticles({ count = 1000 }) {
  const pointsRef = useRef()
  const mouseRef = useRef({ x: 0, y: 0 })
  
  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      
      // Create a sphere of particles
      const radius = Math.random() * 20 + 5
      const theta = Math.random() * Math.PI * 2
      const phi = Math.acos(Math.random() * 2 - 1)
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta)
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      positions[i3 + 2] = radius * Math.cos(phi)
      
      // Color based on position
      const hue = (i / count) * 0.5 + 0.5
      colors[i3] = hue
      colors[i3 + 1] = 0.8
      colors[i3 + 2] = 0.9
    }
    
    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime
      
      // Rotate the particle system
      pointsRef.current.rotation.y += 0.001
      pointsRef.current.rotation.x += 0.0005
      
      // Animate particles
      const positions = pointsRef.current.geometry.attributes.position.array
      const colors = pointsRef.current.geometry.attributes.color.array
      
      for (let i = 0; i < count; i++) {
        const i3 = i * 3
        
        // Wave motion
        positions[i3 + 1] += Math.sin(time * 0.5 + i * 0.01) * 0.002
        
        // Color animation
        const hue = (colors[i3] + time * 0.1) % 1
        colors[i3] = hue
        colors[i3 + 1] = 0.8 + Math.sin(time * 0.3 + i * 0.1) * 0.2
        colors[i3 + 2] = 0.9 + Math.cos(time * 0.4 + i * 0.1) * 0.1
      }
      
      pointsRef.current.geometry.attributes.position.needsUpdate = true
      pointsRef.current.geometry.attributes.color.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.02} 
        transparent 
        opacity={0.6}
        vertexColors
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Main 3D Hero Scene
function HeroScene() {
  return (
    <>
      <Stars radius={100} depth={60} count={5000} factor={4} saturation={0} fade />
      
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[10, -10, 10]} intensity={0.6} color="#ff6b6b" />
      <pointLight position={[0, 10, 0]} intensity={0.4} color="#10b981" />
      
      {/* Interactive Logo */}
      <InteractiveLogo position={[0, 0, 0]} scale={1.5} />
      
      {/* Floating Educational Icons */}
      <FloatingEducationIcon 
        position={[-3, 2, -2]} 
        animationType="orbit"
        icon={
          <Box args={[0.3, 0.3, 0.3]}>
            <MeshWobbleMaterial color="#3b82f6" speed={1.5} factor={0.3} />
          </Box>
        }
      />
      
      <FloatingEducationIcon 
        position={[3, 2, -2]} 
        animationType="pulse"
        icon={
          <Sphere args={[0.2]}>
            <MeshDistortMaterial color="#10b981" speed={1.2} distort={0.3} />
          </Sphere>
        }
      />
      
      <FloatingEducationIcon 
        position={[0, 3, -3]} 
        animationType="float"
        icon={
          <Torus args={[0.25, 0.05, 8, 16]}>
            <MeshWobbleMaterial color="#f59e0b" speed={1.8} factor={0.4} />
          </Torus>
        }
      />
      
      {/* 3D Text Elements */}
      <ThreeDText 
        text="INSPIRE" 
        position={[0, 4, -4]} 
        size={0.8} 
        color="#00ffff" 
      />
      <ThreeDText 
        text="SUCCESS" 
        position={[2, 3, -3]} 
        size={0.6} 
        color="#ff6b6b" 
      />
      <ThreeDText 
        text="FUTURE" 
        position={[-2, 3, -3]} 
        size={0.6} 
        color="#10b981" 
      />
      
      {/* Interactive Particles */}
      <InteractiveParticles count={1500} />
      
      {/* Contact Shadows */}
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.4} 
        scale={25} 
        blur={2} 
        far={4.5} 
      />
    </>
  )
}

// Main 3D Hero Component
export default function ThreeDHero({ className = "" }) {
  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <HeroScene />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false} 
          autoRotate 
          autoRotateSpeed={0.5}
          enableDamping
          dampingFactor={0.05}
        />
      </Canvas>
    </div>
  )
}
