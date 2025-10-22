import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, Box, Torus, Stars, Float, MeshWobbleMaterial, MeshDistortMaterial, Text, Environment } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced Cinematic Particle System with Advanced Effects
function CinematicParticles() {
  const pointsRef = useRef()
  
  const particles = useMemo(() => {
    const positions = new Float32Array(2000 * 3)
    const colors = new Float32Array(2000 * 3)
    const sizes = new Float32Array(2000)
    const velocities = new Float32Array(2000 * 3)
    
    for (let i = 0; i < 2000; i++) {
      const i3 = i * 3
      
      // Create multiple spiral formations
      const radius = Math.random() * 15 + 5
      const angle = (i / 2000) * Math.PI * 6
      const height = (Math.random() - 0.5) * 12
      
      positions[i3] = Math.cos(angle) * radius
      positions[i3 + 1] = height
      positions[i3 + 2] = Math.sin(angle) * radius
      
      // Enhanced dynamic colors with more variety
      const hue = (i / 2000) * 0.5 + 0.4 // Expanded color range
      colors[i3] = hue
      colors[i3 + 1] = 0.8 + Math.random() * 0.2
      colors[i3 + 2] = 0.9 + Math.random() * 0.1
      
      sizes[i] = Math.random() * 0.08 + 0.02
      
      // Add velocity for more dynamic movement
      velocities[i3] = (Math.random() - 0.5) * 0.01
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.01
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.01
    }
    
    return { positions, colors, sizes, velocities }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime
      
      // Enhanced rotation with multiple axes
      pointsRef.current.rotation.y += 0.0015
      pointsRef.current.rotation.x += 0.0008
      pointsRef.current.rotation.z += 0.0003
      
      // Animate individual particles with more complex movement
      const positions = pointsRef.current.geometry.attributes.position.array
      const colors = pointsRef.current.geometry.attributes.color.array
      
      for (let i = 0; i < 2000; i++) {
        const i3 = i * 3
        
        // Multi-layered spiral movement
        const radius = Math.sqrt(positions[i3] ** 2 + positions[i3 + 2] ** 2)
        const angle = Math.atan2(positions[i3 + 2], positions[i3]) + time * 0.15
        
        positions[i3] = Math.cos(angle) * radius
        positions[i3 + 2] = Math.sin(angle) * radius
        positions[i3 + 1] += Math.sin(time * 0.8 + i * 0.01) * 0.003
        
        // Add secondary wave motion
        positions[i3] += Math.sin(time * 0.3 + i * 0.02) * 0.001
        positions[i3 + 2] += Math.cos(time * 0.4 + i * 0.02) * 0.001
        
        // Enhanced color animation with more dynamic changes
        const hue = (colors[i3] + time * 0.15) % 1
        colors[i3] = hue
        colors[i3 + 1] = 0.8 + Math.sin(time * 0.5 + i * 0.1) * 0.3
        colors[i3 + 2] = 0.9 + Math.cos(time * 0.6 + i * 0.1) * 0.2
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
          count={2000}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={2000}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={2000}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.03} 
        transparent 
        opacity={0.9}
        vertexColors
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

// Floating Educational Icons with Cinematic Movement
function FloatingIcon({ position, children, speed = 1, animationType = "float" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      
      if (animationType === "float") {
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.5
        meshRef.current.rotation.y += 0.01 * speed
      } else if (animationType === "orbit") {
        meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.3) * 1
        meshRef.current.position.z = position[2] + Math.sin(time * speed * 0.3) * 1
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.4) * 0.3
        meshRef.current.rotation.y += 0.02 * speed
      } else if (animationType === "pulse") {
        const scale = 1 + Math.sin(time * speed * 0.8) * 0.2
        meshRef.current.scale.setScalar(scale)
        meshRef.current.rotation.y += 0.01 * speed
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.6) * 0.4
      }
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {children}
    </group>
  )
}

// Educational 3D Objects
function MathSymbol({ position }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(time * 0.6) * 0.2
      
      // Dynamic color changes
      const children = meshRef.current.children
      if (children[0]) {
        children[0].material.color.setHSL(0.6 + Math.sin(time * 0.5) * 0.1, 0.8, 0.6)
      }
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Box args={[0.1, 0.3, 0.1]} position={[-0.1, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Sphere args={[0.08]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
      <Box args={[0.1, 0.3, 0.1]} position={[0.1, 0, 0]}>
        <meshStandardMaterial color="#f59e0b" />
      </Box>
    </group>
  )
}

function ScienceIcon({ position }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y += 0.02
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.3
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Sphere args={[0.15]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#ef4444" />
      </Sphere>
      <Torus args={[0.25, 0.03, 8, 16]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Torus>
      <Torus args={[0.25, 0.03, 8, 16]} rotation={[0, Math.PI / 2, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Torus>
    </group>
  )
}

// Enhanced Cinematic Scene with Advanced 3D Effects
function CinematicScene() {
  return (
    <>
      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade />
      
      {/* Enhanced Lighting System */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[10, -10, 10]} intensity={0.6} color="#ff6b6b" />
      <pointLight position={[0, 10, 0]} intensity={0.4} color="#10b981" />
      
      {/* Enhanced Cinematic Particles */}
      <CinematicParticles />
      
      {/* Advanced Floating Educational Icons */}
      <FloatingIcon position={[-3, 1, -2]} speed={0.6} animationType="orbit">
        <MathSymbol position={[0, 0, 0]} />
      </FloatingIcon>
      
      <FloatingIcon position={[3, 1, -3]} speed={0.8} animationType="pulse">
        <ScienceIcon position={[0, 0, 0]} />
      </FloatingIcon>
      
      <FloatingIcon position={[0, 2, -4]} speed={0.5} animationType="float">
        <Sphere args={[0.2]}>
          <MeshDistortMaterial color="#8b5cf6" speed={1.5} distort={0.3} />
        </Sphere>
      </FloatingIcon>
      
      <FloatingIcon position={[-2, 0, -1]} speed={0.7} animationType="orbit">
        <Torus args={[0.3, 0.05, 8, 16]}>
          <MeshWobbleMaterial color="#f59e0b" speed={1.2} factor={0.4} />
        </Torus>
      </FloatingIcon>
      
      {/* Additional Advanced 3D Elements */}
      <FloatingIcon position={[2, 3, -5]} speed={0.9} animationType="spiral">
        <Box args={[0.15, 0.15, 0.15]}>
          <MeshWobbleMaterial color="#ef4444" speed={1.8} factor={0.3} />
        </Box>
      </FloatingIcon>
      
      <FloatingIcon position={[-1, -1, -2]} speed={0.4} animationType="pulse">
        <Sphere args={[0.12]}>
          <MeshDistortMaterial color="#10b981" speed={1.6} distort={0.4} />
        </Sphere>
      </FloatingIcon>
      
      {/* Holographic Text Elements */}
      <Text
        position={[0, 4, -6]}
        fontSize={0.6}
        color="#00ffff"
        anchorX="center"
        anchorY="middle"
      >
        INSPIRE
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.8}
          emissive="#004444"
          emissiveIntensity={0.3}
        />
      </Text>
      
      <Text
        position={[3, 2, -4]}
        fontSize={0.4}
        color="#ff6b6b"
        anchorX="center"
        anchorY="middle"
      >
        SUCCESS
        <meshStandardMaterial
          color="#ff6b6b"
          transparent
          opacity={0.7}
          emissive="#440000"
          emissiveIntensity={0.2}
        />
      </Text>
    </>
  )
}

// Enhanced Main Component with Mobile Performance Optimizations
export default function CinematicParticlesComponent({ className = "" }) {
  const [isMobile, setIsMobile] = React.useState(false)
  
  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows={!isMobile}
        gl={{ 
          antialias: !isMobile, 
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <CinematicScene />
        </Suspense>
      </Canvas>
    </div>
  )
}
