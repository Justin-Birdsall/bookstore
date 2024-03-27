import React, {useState} from "react";
import Layout from "../components/Layout";
import book1 from "../assets/book-1.webp";
import mexico from "../assets/mexico.jpeg";
import robot from "../assets/robot.jpeg";
import film from "../assets/filmphoto.jpeg";
import cat from "../assets/cat.jpeg";
import Graphics from "../components/Book";
import rats from '../assets/rats.webp';
import dog from '../assets/dog.jpg'; // Import the PNG imagimport dog from '../assets/dog.jpg'; // Import the PNG image
import tires from "../assets/tirework.jpeg"
import kayack from "../assets/kayack.jpeg";
import scenic from "../assets/kayackseceneryfishing.jpeg";
import salmon from "../assets/salmon.jpeg";
import football from "../assets/football.jpeg"
import family from "../assets/family.jpeg"
import boston from "../assets/boston.jpeg"
import babyphoto from "../assets/watering_grass.jpeg"
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  const library = [
    {
      id: 1,
      image: book1,
      title: "The Shadow Sister",
      category: "Health",
      price: "$40",
    },
    { id: 6,
      image: rats,
      title: "Serpinski Gasket",
      category: "WebGL",
      price: "place holder \"price\" ",
    },
  ];
  const [selectedTab, setSelectedTab] = useState(null);

  const handleCategoryChange = (category) => {
    setSelectedTab(category);
  };

  return (
    <>
    <Navbar>
          <a className="btn btn-ghost text-xl">Justin Birdsall's Webpage!</a>
    </Navbar>
    <main>
<div className="hero py-32 bg-gray-700">
        <div className="hero-content grid md:grid-cols-2 gap-36">
          <div>
            <h1 className="text-5xl font-bold leading-normal text-white">
              Welcome to my webpage!
            </h1>
            <p className="text-lg font-medium py-6 text-gray-300">
              My name is Justin Birdsall and I am a currently a Senior at Grand Valley State University.
            </p>
            <button className="btn btn-primary mt-4">Explore Some of my works</button>
        </div>
          <div className="carousel carousel-center max-w-md p-3 space-x-3 bg-neutral rounded-box">
          <div className="carousel-item"> <img src={mexico} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={film} className="rounded-box" style={{ width: '350px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={family} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={football} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={boston} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={babyphoto} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={dog} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={robot} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={kayack} className="rounded-box" style={{ width: '325px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={salmon} className="rounded-box" style={{ width: '450px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={scenic} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={tires} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
          <div className="carousel-item"> <img src={cat} className="rounded-box" style={{ width: '300px', height: '400px' }} /> </div>
        </div>
        </div>
        </div>
        <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_1" role="tab" id = "webgl-tab" className="tab [--tab-bg:orange] [--tab-border-color:orange] text-secondary" aria-label="WebGL" onChange={() => handleCategoryChange("WebGL")}
          checked={selectedTab === "WebGL"} />
        <input type="radio" name="my_tabs_1" role="tab" className="tab [--tab-bg:orange] [--tab-border-color:orange] text-primary" aria-label="Three.JS" />
        <input type="radio" name="my_tabs_1" role="tab" className="tab [--tab-bg:orange] [--tab-border-color:orange] text-primary" aria-label="Blender" />
        <input type="radio" name="my_tabs_1" role="tab" className="tab [--tab-bg:orange] [--tab-border-color:orange] text-primary" aria-label="WebGPU" />
</div>
      <div className="py-20 max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {library
            .filter((example) => !selectedTab || example.category === selectedTab)
            .map((example) => (
            <Graphics 
              key={example.id}
              image={example.image}
              title={example.title}
              category={example.category}
              price={example.subtile}
              />
              ))}
        </div>
      </div>
      </main>
      <Footer>
      </Footer>
    </>
  );
}
