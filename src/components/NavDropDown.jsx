import { Link } from "react-scroll";

const NavDropDown = ({ openModal }) => {
  return (
    <div className="dropdown dropdown-bottom md:hidden">
      <button
        tabIndex={0}
        className="bg-Menu w-[30px] h-[30px] mt-[10px]"
      ></button>
      <ul
        tabIndex={0}
        className="dropdown-content right-0 z-[1] menu p-2 shadow bg-white rounded-box m-1 w-[100px]"
      >
        <li>
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={100}
            className="font-[Poppins] text-black"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={100}
            duration={500}
            className="font-[Poppins] text-black"
          >
            About
          </Link>
        </li>
        <li>
          <a onClick={openModal} className="font-[Poppins] text-black">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default NavDropDown;
