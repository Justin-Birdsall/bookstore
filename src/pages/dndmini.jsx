
import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from '../components/Model'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

export default function Viewer() {

    const [isNavbarInView, setIsNavbarInView] = useState(false);
    const observer = useRef(null);
  
    useEffect(() => {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNavbarInView(true);
          } else {
            setIsNavbarInView(false);
          }
        });
      });
  
      observer.current.observe(document.querySelector('.navbar'));
  
      return () => {
        if (observer.current) {
          observer.current.disconnect();
        }
      };
    }, []);

  return (<>

<Navbar>
<div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Dungeons & Dragons Mini</a>
          </li>
        </ul>
      </div>
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





