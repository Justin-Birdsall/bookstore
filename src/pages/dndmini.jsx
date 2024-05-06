import React, { Suspense, useRef, useState, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import { Model } from '../components/Model'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

export default function Viewer() {

    const [isNavbarInView, setIsNavbarInView] = useState(true);
    const observer = useRef(null);
  
    useEffect(() => {
      observer.current = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNavbarInView(false);
          } else {
            setIsNavbarInView(true);
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

    useEffect(() => {
        if (isNavbarInView) {
            document.querySelector('.navbar').scrollIntoView();
        }
    }, [isNavbarInView]);

    return (
        <>
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

            <main>

                <Canvas shadows dpr={[1, 2]} camera={{ fov: 50 }}>
                    <Suspense fallback={null}>
                        <Stage  preset="rembrandt" intensity={1}  environment="city">
                            <Model />
                        </Stage>
                    </Suspense>
                    <OrbitControls  autoRotate />
                </Canvas>
            </main>
            <Footer></Footer>
        </>
    )
}





