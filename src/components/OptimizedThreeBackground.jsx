import React, { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Stars, Float } from '@react-three/drei'
import * as THREE from 'three'

// Simplified floating objects for better performance
function SimpleFloatingObject({ position, speed = 1 }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.elapsedTime
      meshRef.current.rotation.y += 0.01 * speed
      meshRef.current.position.y = position[1] + Math.sin(time * speed * 0.5) * 0.2
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.3} floatIntensity={0.3}>
      <Sphere ref={meshRef} position={position} args={[0.3, 16, 16]}>
        <meshStandardMaterial 
          color="#3b82f6" 
          transparent 
          opacity={0.3}
          roughness={0.3}
          metalness={0.1}
        />
      </Sphere>
    </Float>
  )
}

export default function OptimizedThreeBackground({ className = "" }) {
  const floatingObjects = useMemo(() => [
    { position: [2, 1, -2], speed: 0.5 },
    { position: [-2, 0.5, -1], speed: 0.7 },
    { position: [1, 1.5, -3], speed: 0.3 },
    { position: [-1, 0.8, -2.5], speed: 0.6 },
  ], [])

  return (
    <div className={`absolute inset-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ background: 'transparent' }}
        performance={{ min: 0.5 }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[10, 10, 5]} intensity={0.6} />
        
        <Stars 
          radius={100} 
          depth={50} 
          count={200} 
          factor={4} 
          saturation={0} 
          fade 
        />
        
        {floatingObjects.map((obj, index) => (
          <SimpleFloatingObject 
            key={index}
            position={obj.position}
            speed={obj.speed}
          />
        ))}
      </Canvas>
    </div>
  )
}
