//* Component imports
import Nav from "../Nav/Nav.jsx";
import Hero from "../Hero/Hero.jsx";
import Projects from "../Projects/Projects.jsx";
import Background from "../Background/Background.jsx";
import ContactModal from "../ContactModal/ContactModal.jsx";
import Footer from "../Footer/Footer.jsx";
import ContactButton from "../ContactButton/ContactButton.jsx";
import Testimonials from "../Testimonials/Testimonials.jsx";
import ResumeConfirmModal from "../ResumeConfirmModal/ResumeConfirmModal.jsx";

//* React imports
import { useState } from "react";

function App() {
  const [modal, setModal] = useState("");
  const [confirmModal, setConfirmModal] = useState("");

  const openModal = () => {
    setModal("create");
  };

  const closeModal = () => {
    setModal();
  };

  const handleOpenConfirmModal = () => {
    setConfirmModal("create");
  };

  const handleCloseConfirmModal = () => {
    setConfirmModal("");
  };

  return (
    <div className="bg-[#2b2b2b] w-full m-auto">
      <Nav openModal={openModal} />
      <Hero />
      <Projects />
      <Background handleOpenConfirmModal={handleOpenConfirmModal} />
      <Testimonials openModal={openModal} />
      <Footer />
      <ContactButton openModal={openModal} />
      {modal === "create" && <ContactModal closeModal={closeModal} />}
      {confirmModal === "create" && (
        <ResumeConfirmModal handleCloseConfirmModal={handleCloseConfirmModal} />
      )}
    </div>
  );
}
export default App;
