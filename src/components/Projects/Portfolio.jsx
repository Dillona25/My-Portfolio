import Tailwind from "../../assets/Tailwind.svg";
import React from "../../assets/React.svg";
import Portfolio from "../../images/Portfolio.png";
import ProjectCard from "../ProjectCard/ProjectCard";

const MyPortfolio = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"My Portfolio"}
        ProjectImage={Portfolio}
        Stackone={React}
        Stacktwo={Tailwind}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            The site you are browsing right now! Built with React and Tailwind
            CSS my portfolio website allows you to get to know me both as a
            developer and a regular human! You can also press "contact" in both
            the Nav and About me sections to fill out a form that allows you to
            reach out to me!
          </p>
        }
        Code={"https://github.com/Dillona25/My-Portfolio"}
      />
    </div>
  );
};

export default MyPortfolio;
