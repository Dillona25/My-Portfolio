import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import NODE from "../assets/NODE.svg";
import Us from "../images/Us.png";

const ProjectCards = () => {
  return (
    <>
      <div className="w-[400px] bg-white rounded-[10px] shadow-lg shadow-black">
        <img
          className="w-[400px] h-[220px] bg-gray-400 rounded-t-[10px]"
          src={Us}
        ></img>
        <div className=" flex justify-between align-middle pt-[10px] pl-[10px] pr-[10px]">
          <h1 className="font-[Poppins] text-[20px] font-semibold mr-[10px] self-center">
            Around The Us{" "}
          </h1>
          <img className="h-[45px] w-[45px]" src={HTML}></img>
          <img className="h-[45px] w-[45px]" src={CSS}></img>
          <img className="h-[45px] w-[45px]" src={JS}></img>
          <img className="h-[45px] w-[45px]" src={NODE}></img>
        </div>
        <div className="flex gap-[10px] p-[10px]">
          <button className="group relative inline-block overflow-hidden bg-[#9b9b84] py-[5px] px-[40px] rounded-[50px] font-[Poppins] hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Demo
          </button>
          <button className="bg-black py-[5px] px-[40px] rounded-[50px] font-[Poppins] text-white hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Code
          </button>
        </div>
      </div>

      <div className="w-[400px] bg-white rounded-[10px] shadow-lg shadow-black">
        <div className="w-[400px] h-[220px] bg-gray-400 rounded-t-[10px]"></div>
        <div className=" flex justify-between align-middle pt-[10px] pl-[10px] pr-[10px]">
          <h1 className="font-[Poppins] text-[20px] font-semibold mr-[10px] self-center">
            Around The Us{" "}
          </h1>
          <img className="h-[45px] w-[45px]" src={HTML}></img>
          <img className="h-[45px] w-[45px]" src={CSS}></img>
          <img className="h-[45px] w-[45px]" src={JS}></img>
          <img className="h-[45px] w-[45px]" src={NODE}></img>
        </div>
        <div className="flex gap-[10px] p-[10px]">
          <button className="bg-[#9b9b84] py-[5px] px-[40px] rounded-[50px] font-[Poppins] hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Demo
          </button>
          <button className="bg-black py-[5px] px-[40px] rounded-[50px] font-[Poppins] text-white hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Code
          </button>
        </div>
      </div>

      <div className="w-[400px] bg-white rounded-[10px] shadow-lg shadow-black">
        <div className="w-[400px] h-[220px] bg-gray-400 rounded-t-[10px]"></div>
        <div className=" flex justify-between align-middle pt-[10px] pl-[10px] pr-[10px]">
          <h1 className="font-[Poppins] text-[20px] font-semibold mr-[10px] self-center">
            Around The Us{" "}
          </h1>
          <img className="h-[45px] w-[45px]" src={HTML}></img>
          <img className="h-[45px] w-[45px]" src={CSS}></img>
          <img className="h-[45px] w-[45px]" src={JS}></img>
          <img className="h-[45px] w-[45px]" src={NODE}></img>
        </div>
        <div className="flex gap-[10px] p-[10px]">
          <button className="bg-[#9b9b84] py-[5px] px-[40px] rounded-[50px] font-[Poppins] hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Demo
          </button>
          <button className="bg-black py-[5px] px-[40px] rounded-[50px] font-[Poppins] text-white hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Code
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
