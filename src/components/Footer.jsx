const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-[#363636] text-base-content rounded">
      <nav className="grid grid-flow-col gap-4">
        <a className="link link-hover text-white font-[Poppins] opacity-70">
          About me
        </a>
        <a className="link link-hover text-white font-[Poppins] opacity-70">
          Contact
        </a>
        <a className="link link-hover text-white font-[Poppins] opacity-70">
          Projects
        </a>
      </nav>
      <p className="font-[Poppins] text-white opacity-70">
        Copyright © 2023 - Dillon Arnolds Portfolio
      </p>
    </footer>
  );
};

export default Footer;
