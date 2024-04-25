import React, { Suspense } from "react"
import { Canvas } from '@react-three/fiber';
import { Environment, useGLTF } from "@react-three/drei"
import "../assets/Master_swordsman"
function Shoe() {
  const { scene } = useGLTF("Master_swordsaman.glb")
  return <primitive object={scene} />
}

export default function DNDMINI() {
  return (
    <Canvas concurrent pixelRatio={[1, 1.5]} camera={{ position: [0, 0.2, 0.4] }}>
      <ambientLight intensity={0.5} />
      <spotLight intensity={0.3} angle={0.3} penumbra={1} position={[5, 25, 20]} shadow-bias={-0.0001} />
      <Suspense fallback={null}>
        <Shoe />
        
      </Suspense>
    </Canvas>
  )
}
