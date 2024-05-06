import { Route, Routes } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";
import HW1 from "./pages/hw1";
import gasket from "./pages/gasket"
import GasketPoints from "./pages/gasket";
import SpiralWavePattern from "./pages/Sketch"
import Game from "./pages/Game";
import EmbeddedIframe from "./pages/ratgame";
import dndmini from "./pages/dndmini";
import DNDMINI from "./pages/dndmini";
import Viewer from "./pages/dndmini";
import P5example from "./pages/p5example";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-details" element={<BookDetails />} />
      <Route path="/homework1" element={<HW1 />}/>
      <Route path="/gasket"element={<GasketPoints/>} />
      <Route path="/SpiralWavePattern" element={<SpiralWavePattern/>}/>
       <Route path="/Game" element={<Game/>}/>
       <Route path="/ratgame"element = {<EmbeddedIframe/>}/>
       <Route path="/dndmini"element = {<Viewer/>}/>
       
       <Route path="/p5example"element = {<P5example/>}/>
    </Routes>
  );
}

export default App;
