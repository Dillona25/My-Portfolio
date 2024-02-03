import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import JS from "../../assets/JS.svg";
import US from "../../images/US.png";
import ProjectCard from "../ProjectCard/ProjectCard";

const AroundTheUs = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Around The US"}
        ProjectImage={US}
        Stackone={HTML}
        Stacktwo={CSS}
        Stackthree={JS}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Around the US is a project that was crafted purely with JavaScript.
            With a high focus in OOP the user is greeted with a stunning
            aesthetic website. The website is a social media page that allows
            the user to make it their own! From editing the profile, adding a
            new profile photo, and adding or deleting photos in their feed.
          </p>
        }
        LiveSite={"https://dillona25.github.io/se_project_aroundtheus/"}
        Code={"https://github.com/Dillona25/se_project_aroundtheus"}
      />
    </div>
  );
};

export default AroundTheUs;
