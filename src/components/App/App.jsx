//* Component imports
import Nav from "../Nav/Nav.jsx";
import Hero from "../Hero/Hero.jsx";
import Projects from "../Projects/Projects.jsx";
import About from "../About/About.jsx";
import ContactModal from "../ContactModal/ContactModal.jsx";
import Footer from "../Footer/Footer.jsx";

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
    <div className="bg-[#2b2b2b] max-w-[2000px] m-auto">
      <Nav openModal={openModal} />
      <Hero />
      {modal === "create" && <ContactModal closeModal={closeModal} />}
      <Projects openModal={openModal} />
      <About openModal={openModal} />
      <Footer openModal={openModal} />
      <div className="flex justify-center items-center bg-[#f5dfa1] h-[60px] w-[60px] rounded-[100%] position: fixed bottom-[30px] right-[30px] lg:hidden">
        <button
          onClick={openModal}
          className="bg-Mail h-[32px] w-[32px] rounded-[100%]"
        ></button>
      </div>
    </div>
  );
}
``;
export default App;
