import React, {  useRef, useState, useEffect } from 'react'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SpiralWavePattern from "./Sketch";

const P5example= () => {

  return (
    
    <>
    <Navbar>
      <h1>PixiJS Embeded Sandbox</h1>
    </Navbar>
     <main>
  
       <SpiralWavePattern/> 

      
      </main> 
      <Footer></Footer>
    </>
  );
};

export default P5example;