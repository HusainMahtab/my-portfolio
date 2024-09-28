import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Portfolio from "./Components/Portfolio";
import Experiance from "./Components/Experiance";
import ContactMe from "./Components/ContactMe";
import { Element } from "react-scroll";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          
        </Routes>
        {/* Use Element to wrap each section for smooth scrolling */}
        <Element name="Home" className="element">
          <Home />
        </Element>
        <Element name="About" className="element">
          <About />
        </Element>
        <Element name="Portfolio" className="element">
          <Portfolio />
        </Element>
        <Element name="Experiance" className="element">
          <Experiance/>
        </Element>
        <Element name="Contact" className="element">
          <ContactMe />
        </Element>
      </div>
    </Router>
  );
}

export default App;
