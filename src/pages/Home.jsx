import React, {useState, useRef} from "react";
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
import ttoicon from "../assets/tictactoeicon.png"
import gasket from "../assets/rat_to_gasket.png"
export default function Home() {
  const works = useRef(null);
  const handleClick = (ref) => {
  ref.current.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'end' });
};
  const library = [
    { id: 6,
      image: gasket,
      title: "Serpinski Gasket",
      author: "book-details",
      category: "WebGL",
    },
    {id: 1,
      image:rats,
      author: "rat",
      title: "Rat Game",
      category: "Three.js"
    },
      {
    id: 2,
      image:ttoicon,
      title: "Tic-Tac-Toe",
      author:"Game",
      category: "Three.js"
    }
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
    <main className="content-container">
<div className="hero py-32 min-height: 100vh">
        <div className="hero-content grid md:grid-cols-2 gap-36 bg-base-100">
          <div>
            <h1 className="text-5xl font-bold leading-normal bg-base-100">
              Welcome to my webpage!
            </h1>
            <p className="text-lg font-medium py-6p">
              My name is Justin Birdsall and I am a currently a Senior at Grand Valley State University.
            </p>
            <button onClick={() => handleClick(works)} className="btn btn-primary mt-4">Explore Some of my works</button>
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
          </main>

        <div role="tablist" ref={works} className="tabs tabs-lifted bg-neutral rounded">
        <input type="radio" name="my_tabs_1" role="tab" id = "webgl-tab" className="tab [--tab-bg:accent] [--tab-border-color:accent] text-secondary" aria-label="WebGL" onChange={() => handleCategoryChange("WebGL")}
          checked={selectedTab === "WebGL"} />
        <input type="radio" name="my_tabs_1" role="tab" id = "three-tab" className="tab [--tab-bg:error] [--tab-border-color:error] text-error" aria-label="Three.JS" onChange={() => handleCategoryChange("Three.js")}
          checked={selectedTab === "Three.js"} />
        <input type="radio" name="my_tabs_1" role="tab" id = "blender-tab" className="tab [--tab-bg:primary] [--tab-border-color:primary] text-primary" aria-label="Blender" onChange={() => handleCategoryChange("Blender")}
          checked={selectedTab === "blender"} />
        <input type="radio" name="my_tabs_1" role="tab" id = "gpu-tab" className="tab [--tab-bg:info] [--tab-border-color:info] text-info" aria-label="WebGPU" onChange={() => handleCategoryChange("WebGPU")}
          checked={selectedTab === "gpu"} />
</div>
<div className="content-container bg-base-200" >
      <div className="py-20 max-w-7xl mx-auto" >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {library
            .filter((example) => !selectedTab || example.category === selectedTab)
            .map((example) => (
              <Graphics 
              key={example.id}
              image={example.image}
              title={example.title}
              author={example.author}
              category={example.category}
              price={example.subtile}
              />
              ))}
        </div>
      </div>
    </div>
  <Footer/>
    </>
  );
}
