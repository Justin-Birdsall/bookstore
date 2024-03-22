import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";
import book1 from "../assets/book-1.webp";
import triforce from "../assets/triforce.png";
const BookDetails = () => {
return (<Layout>
<div className="hero py-8 bg-gray-700"> 
  <div className="max-w-7xl mx-auto px-4">
  <div className="flex flex-col w-full lg:flex-row">
  <div className="grid flex-shrink-0 place-items-center">
  <div alt = "image carousel for left"className="carousel max-w-[375px] h-[475px]">
    {/* These are your carousel items copy and paste to add a new one or delete to remove */} 
    <div className="carousel w-full rounded-box">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  </div>
  {/*dont forget to add / delete items to match carousel*/}
    <div className="flex justify-center w-full mt-3 py-2 gap-2">
        <a href="#slide1" className="btn btn-xs"> 1 </a>
        <a href="#slide2" className="btn btn-xs"> 2 </a>
        <a href="#slide2" className="btn btn-xs"> 3 </a>
        <a href="#slide2" className="btn btn-xs"> 4 </a>
        <a href="#slide2" className="btn btn-xs"> 5 </a>
    </div>
  </div>
  <div className="divider divider-horizontal divider-accent h-[350px] mx-auto-max my-16"></div>
 {/*divder for the title card and carousel pictures*/}
    <div className="flex flex-col space-y-5">
      <div className="card w-96 bg-base-100 shadow-xl">
        <button className="btn text-lg">Serpinskis Gasket</button>
        <div className="card-body">
          <h2><div className="badge badge-secondary badge-lg">WebGL</div><div className="badge badge-outline badge-accent badge-lg">Homework</div></h2>
          <p>One of the basics of Graphics is drawing a triangle, once you can draw a triangle you can draw anything or create 3D objects. Serpinskis 
          Triangle asks what if you took a triangle find the midpoints and take out the middle making one triangle 3 triangles. Think of the Tri Force from the Zelda Games.
          </p>
          <div className="grid flex-grow place-items-center space-y-5"><img src={triforce}  alt="Shoes" class="grid size-32 grid-cols-1 place-content-center" /> </div>
          <div className="card-actions justify-end flex-grow space-y-5"> 
          <p className="mb-4">Serpinkis recursive function asks what if we kept taking out a triangle from one the 3 that we have now. You can view, play with the examples,
             or download and modify the code to learn more.</p>
          </div>
      </div>
      </div>
  </div>
  </div>
  </div>
</div>
</Layout>); };
export default BookDetails;
