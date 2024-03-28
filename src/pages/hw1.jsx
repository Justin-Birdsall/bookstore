import { Canvas } from '@react-three/fiber'
import { OrbitControls, Tetrahedron } from '@react-three/drei'
import * as THREE from 'three'
import { Sketch} from 'react-p5'
import Bg from "./Sketch"
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useEffect } from 'react'
const straightenMatrix = new THREE.Matrix4().makeRotationAxis(new THREE.Vector3(1, 0, -1).normalize(), Math.atan(Math.sqrt(2)))
const straighten = new THREE.Euler().setFromRotationMatrix(straightenMatrix)
function SierpinskiTetrahedron({ i = 0, ...props }) {
  useEffect(() => {
  window.scrollTo(0,0);
}, )
  if (i === 0) {
    return (
      <Tetrahedron {...props}>
        <meshStandardMaterial  color="blue" />
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
    <Navbar>
    <div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/book-details">Sierpinski Gasket</Link>
          </li>
          <li>
            <a>3D Model</a>
            </li>

        </ul>
      </div>
    </Navbar>
  <main>
 <div className="flex justify-center items-center h-screen">
    <div>
      {/*<Bg/>*/}
    </div>

    <Canvas orthographic camera={{ zoom: 300, position: [5, 5, 5] }}>
      <OrbitControls autoRotate />
      <SierpinskiTetrahedron i={5} rotation={straighten} />
      <ambientLight intensity={0.5} />
    </Canvas>
    
    </div>
</main>  
<Footer>

</Footer>
</>
)}