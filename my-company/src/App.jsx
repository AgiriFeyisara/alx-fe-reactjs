import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Services from "./components/Services";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Contact />
      </BrowserRouter>
    </div>
  );
}

export default App;
