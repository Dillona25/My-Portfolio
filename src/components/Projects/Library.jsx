import Library from "../../images/Library.png";
import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";

const TripleTenLibrary = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col gap-[10px] bg-[#2b2b2b] max-w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <div className="flex gap-[20px] justify-between">
        <img
          src={Library}
          className="rounded-lg w-full top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        ></img>
      </div>
      <div className="flex flex-col justify-between h-[330px] bg-white w-full mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
            TripleTen Library
          </h1>
          <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
          <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
        </div>
        <p className="font-[Poppins] text-black text-[15px]">
          A super simple projecy crafted with HTML and CSS. This landing page is
          about a fictional library! Users have multiple different sections they
          can navigate to to learn about the respected contents. From a reader
          picks that suggests books, to an about section, contact and more. This
          was my first ever project where the story begins
        </p>
        <div className="flex gap-[20px]">
          <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
            Live site
          </button>
          <a href="https://github.com/Dillona25/To-Do-App-React">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default TripleTenLibrary;
