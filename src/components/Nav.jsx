import LinkedIn from "../assets/LinkedIn.svg";

const Nav = () => {
  return (
    <div className=" w-[100%] pt-[25px] px-[70px]  flex justify-between">
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
          Projects
        </li>
        <span className="p-2px border-white border-[1px] rounded-[50%] flex hover:scale-110 ease-out duration-[.5s]">
          <button className="bg-LinkedIn h-[48px] w-[48px]"></button>
        </span>
      </ul>
    </div>
  );
};

export default Nav;
