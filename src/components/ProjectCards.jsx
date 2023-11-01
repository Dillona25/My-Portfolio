import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import NODE from "../assets/NODE.svg";

const ProjectCards = () => {
  return (
    <>
      <div className="w-[450px] h-[430px] bg-white rounded-[10px]">
        <div className="w-[450px] h-[300px] bg-gray-400 rounded-t-[10px]">
          Image here
        </div>
        <div className=" flex justify-between align-middle pt-[10px] pl-[10px] pr-[10px]">
          <h1 className="font-[Poppins] text-[25px] font-semibold mr-[10px] self-center">
            Around The Us{" "}
          </h1>
          <img className="h-[50px] w-[50px]" src={HTML}></img>
          <img className="h-[50px] w-[50px]" src={CSS}></img>
          <img className="h-[50px] w-[50px]" src={JS}></img>
          <img className="h-[50px] w-[50px]" src={NODE}></img>
        </div>
        <div className="flex gap-[10px] p-[10px]">
          <button className="bg-[#9b9b84] py-[10px] px-[50px] rounded-[50px] font-[Poppins] hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Demo
          </button>
          <button className="bg-black py-[10px] px-[50px] rounded-[50px] font-[Poppins] text-white hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Code
          </button>
        </div>
      </div>

      <div className="w-[450px] h-[430px] bg-white rounded-[10px]">
        <div className="w-[450px] h-[300px] bg-gray-400 rounded-t-[10px]">
          Image here
        </div>
        <div className=" flex justify-between align-middle pt-[10px] pl-[10px] pr-[10px]">
          <h1 className="font-[Poppins] text-[25px] font-semibold mr-[10px] self-center">
            Around The Us{" "}
          </h1>
          <img className="h-[50px] w-[50px]" src={HTML}></img>
          <img className="h-[50px] w-[50px]" src={CSS}></img>
          <img className="h-[50px] w-[50px]" src={JS}></img>
          <img className="h-[50px] w-[50px]" src={NODE}></img>
        </div>
        <div className="flex gap-[10px] p-[10px]">
          <button className="bg-[#9b9b84] py-[10px] px-[50px] rounded-[50px] font-[Poppins] hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Demo
          </button>
          <button className="bg-black py-[10px] px-[50px] rounded-[50px] font-[Poppins] text-white hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Code
          </button>
        </div>
      </div>

      <div className="w-[450px] h-[430px] bg-white rounded-[10px]">
        <div className="w-[450px] h-[300px] bg-gray-400 rounded-t-[10px]">
          Image here
        </div>
        <div className=" flex justify-between align-middle pt-[10px] pl-[10px] pr-[10px]">
          <h1 className="font-[Poppins] text-[25px] font-semibold mr-[10px] self-center">
            Around The Us{" "}
          </h1>
          <img className="h-[50px] w-[50px]" src={HTML}></img>
          <img className="h-[50px] w-[50px]" src={CSS}></img>
          <img className="h-[50px] w-[50px]" src={JS}></img>
          <img className="h-[50px] w-[50px]" src={NODE}></img>
        </div>
        <div className="flex gap-[10px] p-[10px]">
          <button className="bg-[#9b9b84] py-[10px] px-[50px] rounded-[50px] font-[Poppins] hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Demo
          </button>
          <button className="bg-black py-[10px] px-[50px] rounded-[50px] font-[Poppins] text-white hover:opacity-80 hover:scale-105 ease-in-out duration-[.5s]">
            Code
          </button>
        </div>
      </div>
    </>
  );
};

export default ProjectCards;
