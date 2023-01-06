import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home.js";
import Loyality from "./pages/Loyality.js";
import Brand from "./pages/Brand.js";
import Contact from "./pages/Contact.js";

function App() {
  // const user = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/loyality" element={<Loyality />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
