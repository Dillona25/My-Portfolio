import Nav from "../components/Nav.jsx";
import Hero from "./Hero.jsx";
import Projects from "./Projects/Projects.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";

function App() {
  return (
    <div className="bg-[#2b2b2b] max-w-[2000px] m-auto scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
