import HTML from "../../assets/HTML.svg";
import CSS from "../../assets/CSS.svg";
import Node from "../../assets/NODE.svg";
import React from "../../assets/React.svg";
import WTW from "../../images/WTW.png";

const WhatToWear = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={WTW}
        alt="Image from project"
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[20px] justify-between h-fit xl:h-[330px] bg-white w-full mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-ellipsis overflow-hidden whitespace-nowrap text-black text-[20px] md:text-[25px]">
            What To Wear
          </h1>
          <img
            src={HTML}
            alt="html logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={CSS}
            alt="CSS logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={Node}
            alt="node logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={React}
            alt="react.js logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          What to wear is a simple and clean website. The app allows users to
          make a profile by editing their name, and avatar. The user can also
          add their location and based on their location, they will be
          recommened clothes that they have uploaded to their closet. The
          project was made using React.js as a front-end and Node.js for the
          backend.
        </p>
        <div className="flex gap-[20px]">
          <a href="https://github.com/Dillona25/se_project_react">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>{" "}
          </a>
          <p className="py-[5px] bg-white w-fit rounded-md text-black font-[Poppins]">
            Adding backend :)
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatToWear;
