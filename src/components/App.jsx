import Nav from "../components/Nav.jsx";
import Hero from "./Hero.jsx";
import Projects from "./Projects/Projects.jsx";

function App() {
  return (
    <div className="bg-black max-w-[2000px] m-auto">
      <Nav />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
