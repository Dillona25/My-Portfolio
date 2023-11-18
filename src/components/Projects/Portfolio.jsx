import Tailwind from "../../assets/Tailwind.svg";
import React from "../../assets/React.svg";
import Portfolio from "../../images/Portfolio.png";

const MyPortfolio = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={Portfolio}
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] h-[330px] justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-black text-[20px] md:text-[25px]">
            My Portfolio
          </h1>
          <img src={React} className="h-[35px] w-[35px] self-center"></img>
          <img src={Tailwind} className="h-[35px] w-[35px] self-center"></img>
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          The site you are browsing right now! Built with React and Tailwind CSS
          my portfolio website allows you to get to know me both as a developer
          and a regular human! You can also press "contact" in both the Nav and
          About me sections to fill out a form that allows you to reach out to
          me!
        </p>
        <div className="flex gap-[20px]">
          <a href="https://github.com/Dillona25/se_project_aroundtheus">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default MyPortfolio;
