import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import Loyality from "./pages/Loyality.js";
import Brand from "./pages/Brand.js";
import Contact from "./pages/Contact.js";
import Lepalais from "./pages/Lepalais.js";
import PalaisSnack from "./pages/PalaisSnack.js";
import CircleDePalais from "./pages/CircleDePalais.js";
import RoyalBurger from "./pages/RoyalBurger.js";

function App() {
  // const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/loyality" element={<Loyality />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/lepalais" element={<Lepalais />} />
        <Route path="/palaissnack" element={<PalaisSnack />} />
        <Route path="/circledepalais" element={<CircleDePalais />} />
        <Route path="/royalburger" element={<RoyalBurger />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
