import { Route, Routes } from "react-router-dom";
import BookDetails from "./pages/BookDetails";
import Home from "./pages/Home";
import HW1 from "./pages/hw1";
import gasket from "./pages/gasket"
import GasketPoints from "./pages/gasket";
import Bg from "./pages/Sketch"
import Game from "./pages/Game";
import EmbeddedIframe from "./pages/ratgame";
import dndmini from "./pages/dndmini";
import DNDMINI from "./pages/dndmini";
import Viewer from "./pages/dndmini";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/book-details" element={<BookDetails />} />
      <Route path="/homework1" element={<HW1 />}/>
      <Route path="/gasket"element={<GasketPoints/>} />
      <Route path="/Bg" element={<Bg/>}/>
       <Route path="/Game" element={<Game/>}/>
       <Route path="/ratgame"element = {<EmbeddedIframe/>}/>
       <Route path="/dndmini"element = {<Viewer/>}/>
    </Routes>
  );
}

export default App;
