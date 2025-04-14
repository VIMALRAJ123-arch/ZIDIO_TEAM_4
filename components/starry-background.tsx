"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars, Environment } from "@react-three/drei"

function MovingStars() {
  const starsRef = useRef<any>()

  useFrame(({ clock }) => {
    if (starsRef.current) {
      starsRef.current.rotation.x = clock.getElapsedTime() * 0.05
      starsRef.current.rotation.y = clock.getElapsedTime() * 0.03
    }
  })

  return <Stars ref={starsRef} radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
}

export default function StarryBackground() {
  return (
    <div className="fixed inset-0 -z-10 opacity-60">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={["#050A24"]} />
        <MovingStars />
        <Environment preset="night" />
      </Canvas>
    </div>
  )
}
