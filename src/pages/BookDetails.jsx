import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import triforce from "../assets/triforce.png";
import Navbar from './../components/Navbar';
import Footer from './../components/Footer';
import one from "../assets/screenshotshw1/1.png"
import two from "../assets/screenshotshw1/2.png"
import three from "../assets/screenshotshw1/3.png"
import four from "../assets/screenshotshw1/4.png"
const BookDetails = () => {
useEffect(() => {
  window.scrollTo(0,0);
}, )
const slide1Ref = useRef(null);
const slide2Ref = useRef(null);
const slide3Ref = useRef(null);
const slide4Ref = useRef(null);
const slide5Ref = useRef(null);
const handleClick = (ref) => {
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
};
return (<>
<Navbar>
<div className="text-sm breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <a>Sierpinski Gasket</a>
          </li>
        </ul>
      </div>
</Navbar>
<main className ="content-container bg-neutral">
<div className="hero py-8 bg-neutral"> 
  <div className="max-w-7xl mx-auto px-4">
  <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-shrink-0 place-items-center">
  <div alt = "image carousel for left"className="carousel max-w-[475px] h-[475px]">
  <div className="carousel w-full rounded-box">
  <div id="slide1" ref={slide1Ref} className="carousel-item relative w-full">
    <img src={one} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
  </div> 
  <div id="slide2" ref={slide2Ref} className="carousel-item relative w-full">
    <img src={two} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
  </div> 
  <div id="slide3"ref={slide3Ref} className="carousel-item relative w-full">
    <img src={three} className="w-full" />
  </div> 
  <div id="slide4"ref={slide4Ref} className="carousel-item relative w-full">
    <img src={four} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    </div>
  </div>
</div>
  </div>
    <div className="flex justify-center w-full py-0 gap-1">
      <button onClick={() => handleClick(slide1Ref)} className="btn btn-sm">1</button>
      <button onClick={() => handleClick(slide2Ref)} className="btn btn-sm">2</button>
      <button onClick={() => handleClick(slide3Ref)} className="btn btn-sm">3</button>
      <button onClick={() => handleClick(slide4Ref)} className="btn btn-sm">4</button>
    </div>
  </div>
  <div className="divider divider-horizontal divider-accent h-[350px] mx-auto-max my-16"></div>
 {/*divder for the title card and carousel pictures*/}
    <div className="flex flex-col space-y-5">
      <div className="card w-96 base-content shadow-xl">
        <div className="card-title justify-center rounded-md bg-base-300"><h1>Sierpinski Gasket</h1></div>
        <div className="card-body rounded-md bg-base-100">
          <h2><div className="badge bg-secondary badge-ghost badge-sm">WebGL</div><div className="badge badge-outline badge-accent badge-sm">Homework</div></h2>
          <p>One of the basics of Graphics is drawing ra triangle, once you can draw a triangle you can draw anything or create 3D objects. Serpinskis 
          Triangle asks what if you took a triangle find the midpoints and take out the middle making one triangle 3 triangles. Think of the Tri Force from the Zelda Games.
          </p>
          <div className="grid flex-grow place-items-center space-y-5"><img src={triforce}  alt="Shoes" class="grid size-32 grid-cols-1 place-content-center" /> </div>
          <p className="mb-4">Serpinkis recursive function asks what if we kept taking out a triangle from one the 3 that we have now. You can view, play with the examples,or download and modify the code to learn more.</p>
          <Link to="/homework1" className="btn btn-primary" >View 3D Modle</Link>
          <div className="card-actions justify-end flex-grow space-y-1"> </div>
      </div>
      </div>
  </div>
  </div>
  </div>
</div>
</main>
<Footer></Footer>
</>); };
export default BookDetails;
