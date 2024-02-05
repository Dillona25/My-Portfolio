import Node from "../../assets/NODE.svg";
import React from "../../assets/React.svg";
import Mongo from "../../assets/mongodb.svg";
import WTW from "../../images/WTW.png";
import ProjectCard from "../ProjectCard/ProjectCard";

const WhatToWear = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible  ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"What To Wear"}
        ProjectImage={WTW}
        Stackone={React}
        Stacktwo={Node}
        Stackthree={Mongo}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            What to wear is a simple and clean website. The app allows users to
            make a profile by editing their name, and avatar. The user can also
            add their location and based on their location, they will be
            recommened clothes that they have uploaded to their closet. The
            project was made using React.js as a front-end and Node.js for the
            backend.
          </p>
        }
        LiveSite={""}
        Code={"https://github.com/Dillona25/WhatToWear"}
      />
    </div>
  );
};

export default WhatToWear;
