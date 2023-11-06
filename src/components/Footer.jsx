const Footer = () => {
  return (
    <div>
      <div className="flex max-w-[100%] gap-[60px] mx-[70px]">
        <div className="flex flex-col gap-[20px]">
          <h1 className="font-[Poppins] text-[50px] font-semibold text-white mb-[20px]">
            Logo
          </h1>
          <p className="font-[Poppins] text-[15px] text-white">
            Dillonarnold2002@outlook.com
          </p>
          <p className="font-[Poppins] text-[15px] text-white">
            &copy;2023 Dillon Arnold
          </p>
        </div>
        <div class>
          <ul className="flex flex-col content-between">
            <li className="font-[Poppins] text-[15px] text-white">Home</li>
            <li className="font-[Poppins] text-[15px] text-white">Projects</li>
            <li className="font-[Poppins] text-[15px] text-white">Resume</li>
            <li className="font-[Poppins] text-[15px] text-white">About</li>
            <li className="font-[Poppins] text-[15px] text-white">
              Contact me
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
