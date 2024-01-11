//* Component imports
import Nav from "../Nav/Nav.jsx";
import Hero from "../Hero/Hero.jsx";
import Projects from "../Projects/Projects.jsx";
import Background from "../Background/Background.jsx";
import ContactModal from "../ContactModal/ContactModal.jsx";
import Footer from "../Footer/Footer.jsx";
import ContactButton from "../ContactButton/ContactButton.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";

//* React imports
import { useState } from "react";

function App() {
  const [modal, setModal] = useState("");

  const openModal = () => {
    setModal("create");
  };

  const closeModal = () => {
    setModal();
  };

  return (
    <div className="bg-[#2b2b2b] w-full m-auto">
      <Nav openModal={openModal} />
      <Hero />
      <Projects />
      <Background />
      <Testimonials openModal={openModal} />
      <Footer />
      <ContactButton openModal={openModal} />
      {modal === "create" && <ContactModal closeModal={closeModal} />}
    </div>
  );
}
export default App;
