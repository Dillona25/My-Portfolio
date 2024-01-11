//* Component imports
import Nav from "../Nav/Nav.jsx";
import Hero from "../Hero/Hero.jsx";
import Projects from "../Projects/Projects.jsx";
import Background from "../Background/Background.jsx";
import Contact from "../Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import ContactButton from "../ContactButton/ContactButton.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";

//* React imports
import { useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom/cjs/react-router-dom.min.js";

function App() {
  const [modal, setModal] = useState("");

  const openModal = () => {
    setModal("create");
  };

  const closeModal = () => {
    setModal();
  };

  return (
    <BrowserRouter>
      <div className="bg-[#2b2b2b] w-full m-auto">
        <Route exact path="/">
          <Nav />
          <Hero />
          <Projects />
          <Background />
          <Testimonials />
          <Footer />
          <ContactButton />
        </Route>
        <Switch>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
``;
export default App;
