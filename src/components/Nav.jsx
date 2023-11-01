const Nav = () => {
  return (
    <div className=" w-[100%] pt-[25px] px-[70px] pb-[25px] flex justify-between">
      <h1 className="font-[Poppins] text-[30px] font-semibold text-white">
        Logo
      </h1>
      <ul className="flex gap-[50px]">
        <li className="text-white font-[Poppins] text-[18px]  self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white ">
          About me
        </li>
        <li className="text-white font-[Poppins] text-[18px] self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white">
          Contact
        </li>
        <li className="text-white font-[Poppins] text-[18px] self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white">
          Experience
        </li>
        <li className="text-white font-[Poppins] text-[18px] self-center cursor-pointer hover:opacity-75 hover:border-b-[1px] hover:border-b-white">
          Projects
        </li>
      </ul>
    </div>
  );
};

export default Nav;
