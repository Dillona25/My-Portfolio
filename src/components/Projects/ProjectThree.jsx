import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import JS from "../../assets/JS.svg";
import NODE from "../../assets/NODE.svg";
import Us from "../../images/Us.png";

const ProjectThree = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="w-[400px] flex flex-col bg-white rounded-[10px] border-2 border-white">
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
        <div className="max-w-[400px] group relative grid overflow-hidden rounded-[10px] px-2 py-1 mt-[20px] shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200">
          <span>
            <span className="spark mask-gradient animate-flip before:animate-rotate absolute inset-0 h-[100%] w-[100%] overflow-hidden rounded-[10px] [mask:linear-gradient(white,_transparent_50%)] before:absolute before:aspect-square before:w-[200%] before:rotate-[-90deg] before:bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] before:content-[''] before:[inset:0_auto_auto_50%] before:[translate:-50%_-15%]" />
          </span>
          <span className=" absolute inset-[1px] rounded-[10px] bg-black transition-colors duration-200" />
          <span className="font-[Poppins] text-[15px] text-white px-[2px] py-[6px] relative">
            Around The Us was my first ever launched and finished project using
            pure JavaScript. The website is essentially a social media profile
            section that allows the user to make it their own with the ability
            to change the profile photo, name and bio, as well as add and remove
            new photos! I built the project with a high focus on learning OOP.
            The website is also connected to an API where the users data is
            stored. Check it out!
          </span>
        </div>
      </div>
    </>
  );
};

export default ProjectThree;
