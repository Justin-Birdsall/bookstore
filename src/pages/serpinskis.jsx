import { Canvas } from '@react-three/fiber'
import { OrbitControls, Tetrahedron } from '@react-three/drei'
import * as THREE from 'three'
import Layout from '../components/Layout'
import React from "react";

import { Link } from "react-router-dom";

const straightenMatrix = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, -1).normalize(), Math.atan(Math.sqrt(2)))
const straighten = new THREE.Euler().setFromRotationMatrix(straightenMatrix)

function SierpinskiTetrahedron({ i = 0, ...props }) {
  if (i === 0) {
    return (
      <Tetrahedron {...props}>
        <meshStandardMaterial color="red" />
      </Tetrahedron>
    )
  } else {
    const a = 1 / 2 // scaling factor
    const b = Math.sqrt(1 / 3) / 2 // Tetrahedron has radius 1, so solve for point that's distance 0.5 from center
    return (
      <group {...props}>
        <SierpinskiTetrahedron i={i - 1} scale={a} position={[b, b, b]} />
        <SierpinskiTetrahedron i={i - 1} scale={a} position={[-b, -b, b]} />
        <SierpinskiTetrahedron i={i - 1} scale={a} position={[b, -b, -b]} />
        <SierpinskiTetrahedron i={i - 1} scale={a} position={[-b, b, -b]} />
      </group>
    )
  }
}

export default function App() {
  return (
    <>
      <Navbar  breadcrumbs={breadcrumbs}/>
      <main>{children}</main>
      <Footer />
 <div className="flex justify-center items-center h-screen">

    <Canvas orthographic camera={{ zoom: 300, position: [5, 5, 5] }}>
      <OrbitControls autoRotate />
      <SierpinskiTetrahedron i={5} rotation={straighten} />
      <ambientLight intensity={0.5} />
    </Canvas>
    </div>
    <div className='button rounded-lg'>
hello
    </div>
</>
  )
}
