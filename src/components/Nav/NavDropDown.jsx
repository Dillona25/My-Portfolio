import { Link } from "react-scroll";
import "../App/App.css";
import { motion } from "framer-motion";

const NavDropDown = ({ handleOpenDropdown }) => {
  return (
    <>
      <motion.div
        animate={{ y: 0, opacity: 1 }}
        initial={{ y: -100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="flex flex-col bg-white w-[100%] position: absolute"
      >
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={100}
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">Projects</button>
        </Link>
        <Link
          to="about"
          spy={true}
          smooth={true}
          offset={100}
          key={about}
          className="border-black border-b-[1px] p-[10px] text-center"
          onClick={handleOpenDropdown}
        >
          <button className="text-black font-[Poppins]">About</button>
        </Link>
      </motion.div>
    </>
  );
};

export default NavDropDown;
