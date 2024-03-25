import { Canvas } from '@react-three/fiber'
import { OrbitControls, Tetrahedron } from '@react-three/drei'
import * as THREE from 'three'

const straightenMatrix = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, -1).normalize(), Math.atan(Math.sqrt(2)))
const straighten = new THREE.Euler().setFromRotationMatrix(straightenMatrix)

function SierpinskiTetrahedron({ i = 0, ...props }) {
  if (i === 0) {
    return (
      <Tetrahedron {...props}>
        <meshStandardMaterial color="orange" />
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
    <Canvas orthographic camera={{ zoom: 200, position: [5, 5, 5] }}>
      <OrbitControls autoRotate />
      <SierpinskiTetrahedron i={5} rotation={straighten} />
      <ambientLight intensity={0.5} />
      <directionalLight position={[1, 2, 3]} />
    </Canvas>
  )
}
