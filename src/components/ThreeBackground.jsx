import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Sphere, Box, Torus, OrbitControls, Stars, Text, Environment, ContactShadows, Float, MeshWobbleMaterial, MeshDistortMaterial, Sphere as DreiSphere } from '@react-three/drei'
import * as THREE from 'three'

// Enhanced Educational 3D Objects with Cinematic Animations
function FloatingObject({ position, children, speed = 1, animationType = "float" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      
      if (animationType === "float") {
        meshRef.current.rotation.x += 0.005 * speed
        meshRef.current.rotation.y += 0.01 * speed
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.3
      } else if (animationType === "orbit") {
        meshRef.current.rotation.y += 0.02 * speed
        meshRef.current.position.x = position[0] + Math.cos(time * speed * 0.3) * 0.5
        meshRef.current.position.z = position[2] + Math.sin(time * speed * 0.3) * 0.5
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.4) * 0.2
      } else if (animationType === "pulse") {
        const scale = 1 + Math.sin(time * speed * 0.8) * 0.1
        meshRef.current.scale.setScalar(scale)
        meshRef.current.rotation.y += 0.01 * speed
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.6) * 0.25
      } else if (animationType === "wobble") {
        meshRef.current.rotation.x += 0.01 * speed
        meshRef.current.rotation.y += 0.02 * speed
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.7) * 0.4
        const wobble = Math.sin(time * speed * 1.2) * 0.1
        meshRef.current.scale.setScalar(1 + wobble)
      } else if (animationType === "spiral") {
        const radius = 2 + Math.sin(time * speed * 0.3) * 0.5
        const angle = time * speed * 0.2
        meshRef.current.position.x = position[0] + Math.cos(angle) * radius
        meshRef.current.position.z = position[2] + Math.sin(angle) * radius
        meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.3
        meshRef.current.rotation.y += 0.03 * speed
      }
    }
  })

  return (
    <Float speed={speed * 2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={meshRef} position={position}>
        {children}
      </group>
    </Float>
  )
}

// Enhanced Mathematical Formula with Dynamic Animation
function MathFormula({ position }) {
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
      if (children[1]) {
        children[1].material.color.setHSL(0.3 + Math.sin(time * 0.7) * 0.1, 0.8, 0.6)
      }
      if (children[2]) {
        children[2].material.color.setHSL(0.1 + Math.sin(time * 0.9) * 0.1, 0.8, 0.6)
      }
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Mathematical symbols as 3D objects with dynamic colors */}
      <Box args={[0.1, 0.3, 0.1]} position={[-0.2, 0, 0]}>
        <MeshWobbleMaterial color="#3b82f6" speed={2} factor={0.3} />
      </Box>
      <Sphere args={[0.1]} position={[0, 0, 0]}>
        <MeshDistortMaterial color="#10b981" speed={1.5} distort={0.2} />
      </Sphere>
      <Box args={[0.1, 0.3, 0.1]} position={[0.2, 0, 0]}>
        <MeshWobbleMaterial color="#f59e0b" speed={1.8} factor={0.4} />
      </Box>
    </group>
  )
}

// Enhanced Microscope with Cinematic Animation
function Microscope({ position }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y += 0.005
      meshRef.current.position.y = position[1] + Math.sin(time * 0.4) * 0.15
      
      // Animate microscope parts individually
      const children = meshRef.current.children
      if (children[1]) { // Microscope arm
        children[1].rotation.z = Math.sin(time * 0.3) * 0.05
      }
      if (children[2]) { // Microscope head
        children[2].rotation.x = Math.sin(time * 0.6) * 0.1
        children[2].rotation.y += 0.02
      }
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* Microscope base */}
      <Box args={[0.3, 0.1, 0.3]} position={[0, -0.1, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>
      {/* Microscope arm */}
      <Box args={[0.05, 0.4, 0.05]} position={[0, 0.1, 0]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      {/* Microscope head */}
      <Sphere args={[0.08]} position={[0, 0.3, 0]}>
        <meshStandardMaterial color="#60a5fa" />
      </Sphere>
    </group>
  )
}

// Calculator (Math Tools)
function Calculator({ position }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.5) * 0.2
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Box args={[0.4, 0.05, 0.6]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Box>
      {/* Calculator buttons */}
      <Box args={[0.05, 0.02, 0.05]} position={[-0.1, 0.03, 0.1]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Box args={[0.05, 0.02, 0.05]} position={[0, 0.03, 0.1]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
      <Box args={[0.05, 0.02, 0.05]} position={[0.1, 0.03, 0.1]}>
        <meshStandardMaterial color="#3b82f6" />
      </Box>
    </group>
  )
}

// Globe (Geography)
function Globe({ position }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.7) * 0.25
    }
  })

  return (
    <group ref={meshRef} position={position}>
      <Sphere args={[0.3]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
      {/* Globe stand */}
      <Torus args={[0.35, 0.02, 8, 16]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#1e40af" />
      </Torus>
    </group>
  )
}

// DNA Helix (Biology)
function DNAHelix({ position }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.02
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.8) * 0.3
    }
  })

  return (
    <group ref={meshRef} position={position}>
      {/* DNA strands */}
      <Torus args={[0.2, 0.02, 8, 16]} rotation={[0, 0, Math.PI / 4]}>
        <meshStandardMaterial color="#3b82f6" />
      </Torus>
      <Torus args={[0.2, 0.02, 8, 16]} rotation={[0, 0, -Math.PI / 4]}>
        <meshStandardMaterial color="#ef4444" />
      </Torus>
      <Sphere args={[0.05]} position={[0, 0, 0]}>
        <meshStandardMaterial color="#10b981" />
      </Sphere>
    </group>
  )
}

// Enhanced Knowledge Particles with Dynamic Movement
function KnowledgeParticles() {
  const pointsRef = useRef()
  
  const particles = useMemo(() => {
    const positions = new Float32Array(800 * 3)
    const velocities = new Float32Array(800 * 3)
    
    for (let i = 0; i < 800; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 20
      positions[i3 + 1] = (Math.random() - 0.5) * 20
      positions[i3 + 2] = (Math.random() - 0.5) * 20
      
      velocities[i3] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 1] = (Math.random() - 0.5) * 0.02
      velocities[i3 + 2] = (Math.random() - 0.5) * 0.02
    }
    
    return { positions, velocities }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      const time = state.clock.elapsedTime
      pointsRef.current.rotation.y += 0.0005
      pointsRef.current.rotation.x += 0.0003
      
      // Dynamic particle movement
      const positions = pointsRef.current.geometry.attributes.position.array
      for (let i = 0; i < 800; i++) {
        const i3 = i * 3
        positions[i3] += Math.sin(time * 0.5 + i * 0.1) * 0.001
        positions[i3 + 1] += Math.cos(time * 0.3 + i * 0.1) * 0.001
        positions[i3 + 2] += Math.sin(time * 0.7 + i * 0.1) * 0.001
      }
      pointsRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={800}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.6} />
    </points>
  )
}

// New Advanced 3D Components
function HolographicText({ text, position, size = 0.5 }) {
  return (
    <Text
      position={position}
      fontSize={size}
      color="#00ffff"
      anchorX="center"
      anchorY="middle"
      font="/fonts/helvetiker_regular.typeface.json"
    >
      {text}
      <meshStandardMaterial
        color="#00ffff"
        transparent
        opacity={0.8}
        emissive="#004444"
        emissiveIntensity={0.3}
      />
    </Text>
  )
}

function InteractiveCube({ position, color = "#3b82f6" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.x += 0.01
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={0.5}>
      <Box ref={meshRef} position={position} args={[0.3, 0.3, 0.3]}>
        <MeshWobbleMaterial color={color} speed={1.5} factor={0.3} />
      </Box>
    </Float>
  )
}

function EnergyOrb({ position, color = "#ff6b6b" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.y += 0.02
      meshRef.current.position.y = position[1] + Math.sin(time * 1.2) * 0.4
      
      // Pulsing effect
      const scale = 1 + Math.sin(time * 2) * 0.2
      meshRef.current.scale.setScalar(scale)
    }
  })

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={1}>
      <Sphere ref={meshRef} position={position} args={[0.2]}>
        <MeshDistortMaterial 
          color={color} 
          speed={2} 
          distort={0.4}
          transparent
          opacity={0.8}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </Sphere>
    </Float>
  )
}

function FloatingGeometry({ position, geometry, color, animationType = "float" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      
      if (animationType === "float") {
        meshRef.current.position.y = position[1] + Math.sin(time * 0.8) * 0.3
        meshRef.current.rotation.y += 0.01
      } else if (animationType === "spin") {
        meshRef.current.rotation.x += 0.02
        meshRef.current.rotation.y += 0.02
        meshRef.current.rotation.z += 0.01
        meshRef.current.position.y = position[1] + Math.sin(time * 1.2) * 0.4
      }
    }
  })

  return (
    <Float speed={1.5} rotationIntensity={0.8} floatIntensity={0.6}>
      <group ref={meshRef} position={position}>
        {geometry}
      </group>
    </Float>
  )
}

// Main Educational Scene with Enhanced Animations
function Scene() {
  return (
    <>
      <Stars radius={100} depth={60} count={4000} factor={4} saturation={0} fade />
      
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.6} />
      <directionalLight position={[10, 10, 5]} intensity={1.2} />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#00ffff" />
      <pointLight position={[10, -10, 10]} intensity={0.6} color="#ff6b6b" />
      
      {/* Educational Objects with Different Animation Types */}
      <FloatingObject position={[-4, 1, -3]} speed={0.6} animationType="orbit">
        <MathFormula position={[0, 0, 0]} />
      </FloatingObject>
      
      <FloatingObject position={[4, 1, -2]} speed={0.8} animationType="pulse">
        <Microscope position={[0, 0, 0]} />
      </FloatingObject>
      
      <FloatingObject position={[0, 2, -4]} speed={0.5} animationType="float">
        <Calculator position={[0, 0, 0]} />
      </FloatingObject>
      
      <FloatingObject position={[-2, 0, -1]} speed={0.7} animationType="orbit">
        <Globe position={[0, 0, 0]} />
      </FloatingObject>
      
      <FloatingObject position={[3, 2, -3]} speed={0.9} animationType="pulse">
        <DNAHelix position={[0, 0, 0]} />
      </FloatingObject>
      
      {/* New Advanced 3D Objects */}
      <InteractiveCube position={[-1, 3, -5]} color="#8b5cf6" />
      <EnergyOrb position={[2, -1, -2]} color="#f59e0b" />
      
      <FloatingGeometry 
        position={[1, 3, -3]} 
        geometry={
          <Torus args={[0.2, 0.05, 8, 16]}>
            <MeshWobbleMaterial color="#10b981" speed={1.2} factor={0.3} />
          </Torus>
        }
        animationType="spin"
      />
      
      <FloatingGeometry 
        position={[-3, -1, -4]} 
        geometry={
          <Box args={[0.2, 0.2, 0.2]}>
            <MeshDistortMaterial color="#ef4444" speed={1.8} distort={0.3} />
          </Box>
        }
        animationType="float"
      />
      
      {/* Holographic Text Elements */}
      <HolographicText text="EDUCATION" position={[0, 4, -6]} size={0.8} />
      <HolographicText text="SUCCESS" position={[3, 3, -5]} size={0.6} />
      <HolographicText text="FUTURE" position={[-3, 2, -4]} size={0.7} />
      
      {/* Enhanced Knowledge Particles */}
      <KnowledgeParticles />
      
      {/* Contact Shadows for depth */}
      <ContactShadows 
        position={[0, -2, 0]} 
        opacity={0.3} 
        scale={20} 
        blur={2} 
        far={4.5} 
      />
    </>
  )
}

// Main Component with Mobile Optimization
export default function ThreeBackground({ className = "" }) {
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
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        shadows={!isMobile}
        gl={{ 
          antialias: !isMobile, 
          alpha: true,
          powerPreference: isMobile ? "low-power" : "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <Scene />
          
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={isMobile ? 0.1 : 0.3}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
    </div>
  )
}
