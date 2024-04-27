
import React, { Suspense, useRef } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from '../components/Model'
import Navbar from '../components/Navbar'
export default function Viewer() {
  return (<>
<Navbar>

</Navbar>
 <div className="flex justify-center items-center h-screen">


<Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
      <Suspense fallback={null}>
        <Stage  preset="rembrandt" intensity={1}  environment="city">
        false
          <Model />
        false
        </Stage>
      </Suspense>
      <OrbitControls  autoRotate />
    </Canvas>
     </div>
    </>
  )
}





