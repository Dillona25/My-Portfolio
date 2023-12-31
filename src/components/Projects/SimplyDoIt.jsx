import JS from "../../assets/JS.svg";
import React from "../../assets/React.svg";
import Tailwind from "../../assets/Tailwind.svg";
import Node from "../../assets/NODE.svg";
import Mongo from "../../assets/mongodb.svg";
import Simply1 from "../../images/Simply1.png";
import Simply2 from "../../images/Simply2.png";
import Simply3 from "../../images/Simply3.png";

const SimplyDoIt = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === "all" || showCard === category ? "block" : "hidden"
      }`}
    >
      <div className="flex gap-[20px] justify-center lg:justify-between">
        <img
          src={Simply2}
          alt="Photo from project"
          className="rounded-lg w-[105px] top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        ></img>
        <img
          src={Simply1}
          alt="Photo from project"
          className="rounded-lg w-[100px] top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        ></img>
        <img
          src={Simply3}
          alt="Photo from project"
          className="hidden justify-center lg:flex rounded-lg w-[100px] top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
        ></img>
      </div>
      <div className="flex flex-col gap-[20px] justify-between h-fit bg-white w-full mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-black text-[20px] md:text-[25px] text-ellipsis whitespace-nowrap overflow-hidden">
            Simply Do It
          </h1>
          <img
            src={React}
            alt="React.js logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={JS}
            alt="JavaScript logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={Tailwind}
            alt="Tailwind logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={Node}
            alt="Node.js logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={Mongo}
            alt="Mongodb logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
        </div>
        <p className="font-[Poppins] text-black text-[15px]">
          Simply Do It was my 2nd side project done completey unguided using
          react.js, react router and tailwind css. The app allows users to add
          tasks for their current day, edit those tasks, delete them and of
          course mark them as complete. The app also allows users to create a
          profile, edit the name, and add any profile image they desire. While
          the front-end is done, I am in the process of adding a backend!
        </p>
        <div className="flex gap-[20px]">
          <a href="https://github.com/Dillona25/To-Do-App-React">
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

export default SimplyDoIt;
