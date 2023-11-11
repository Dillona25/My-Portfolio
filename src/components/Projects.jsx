import US from "../images/US.png";
import WTW from "../images/WTW.png";
import Library from "../images/Library.png";
import HTML from "../assets/HTML.svg";
import CSS from "../assets/CSS.svg";
import JS from "../assets/JS.svg";
import React from "../assets/React.svg";
import Tailwind from "../assets/Tailwind.svg";
import Simply from "../images/Simply.png";
import Flight from "../images/Flight.png";
import Github from "../assets/Github.svg";

const Projects = () => {
  return (
    <div className="pt-[100px] pb-[100px] bg-[#363636] px-[70px]">
      <h1 className="pb-[10px] font-[Poppins] text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        Projects
      </h1>
      <div className="flex gap-[50px] mt-[50px] justify-center">
        <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
          All Projects
        </button>
        <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
          HTML/CSS
        </button>
        <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
          JavaScript
        </button>
        <button className="bg-[#2b2b2b] text-white font-[Poppins] font-semibold px-[30px] py-[10px] rounded-lg hover:bg-[#656565] hover:scale-110 ease-in-out duration-[.5s]">
          React
        </button>
      </div>
      <div className="mt-[100px] flex justify-between gap-[20px]">
        <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
          <img
            src={US}
            className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          ></img>
          <div className="flex flex-col justify-between bg-white w-full h-[320px] mt-[-50px] p-[10px] rounded-lg">
            <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
              <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
                Around the US
              </h1>
              <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
              <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
              <img src={JS} className="h-[35px] w-[35px] self-center"></img>
            </div>
            <p className="font-[Poppins] text-black text-[15px]">
              Around the US is a project that was crafted purely with
              JavaScript. With a high focus in OOP the user is greeted with a
              stunning aesthetic website. The website is a social media page
              that allows the user to make it their own! From editing the
              profile, adding a new profile photo, and adding or deleting photos
              in their feed, the experience is seemless. Check it out!
            </p>
            <div className="flex gap-[20px]">
              <a href="https://dillona25.github.io/se_project_aroundtheus/">
                <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
                  Live site
                </button>{" "}
              </a>
              <a href="https://github.com/Dillona25/se_project_aroundtheus">
                <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
                  Code
                </button>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
          <img
            src={WTW}
            className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          ></img>
          <div className="flex flex-col justify-between bg-white w-full h-[320px] mt-[-50px] p-[10px] rounded-lg">
            <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
              <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
                What To Wear
              </h1>
              <img src={HTML} className="h-[35px] w-[35px] self-center"></img>
              <img src={CSS} className="h-[35px] w-[35px] self-center"></img>
              <img src={JS} className="h-[35px] w-[35px] self-center"></img>
              <img src={React} className="h-[35px] w-[35px] self-center"></img>
            </div>
            <p className="font-[Poppins] text-black text-[15px]">
              What to wear is an extremely user friendly app with a simple and
              clean design.The app allows users to make a profile by editing
              their name, and avatar. The user can also add their location and
              based on their location, they will be recommened clothes that they
              have uploaded to their closet. The project was made using
              React.js!
            </p>
            <div className="flex gap-[20px]">
              <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
                Live site
              </button>
              <a href="https://github.com/Dillona25/se_project_react">
                <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
                  Code
                </button>{" "}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
          <img
            src={Simply}
            className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          ></img>
          <div className="flex flex-col justify-between bg-white w-full h-[325px] mt-[-50px] p-[10px] rounded-lg">
            <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
              <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
                Simply Do It
              </h1>
              <img src={React} className="h-[35px] w-[35px] self-center"></img>
              <img src={JS} className="h-[35px] w-[35px] self-center"></img>
              <img
                src={Tailwind}
                className="h-[35px] w-[35px] self-center"
              ></img>
            </div>
            <p className="font-[Poppins] text-black text-[15px]">
              Simply Do it is an app made soley for mobile devices. The app
              provides the user with a clean experience and allows them to plan
              their day. The user is able to add tasks, edit them, delete them
              and of course complete them all thanks to React.js. The user is
              also able to make an account to personalize the website to their
              liking!
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

        <div className="flex flex-col bg-[#2b2b2b] h-[500px] w-[400px] rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ">
          <img
            src={Flight}
            className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
          ></img>
          <div className="flex flex-col justify-between bg-white w-full h-[320px] mt-[-50px] p-[10px] rounded-lg">
            <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
              <h1 className="font-[Poppins] font-semibold text-black text-[25px]">
                Flight Checker
              </h1>
              <img
                src={Tailwind}
                className="h-[35px] w-[35px] self-center"
              ></img>
              <img src={JS} className="h-[35px] w-[35px] self-center"></img>
              <img src={Github} className="h-[35px] w-[35px] self-center"></img>
            </div>
            <p className="font-[Poppins] text-black text-[15px]">
              Flight Checker: an app that allows users to enter their country,
              and airport to track departing and arriving flights. The app will
              give the users the flight number, airline, and time of arrivial
              and or departure. While my contribution to this website was
              minimal, the experience allowed me to work in a team for the first
              time and learn many new concepts. Check it out!
            </p>
            <div className="flex gap-[20px]">
              <a href="https://flightchecker.netlify.app/">
                <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
                  Live site
                </button>{" "}
              </a>
              <a href="https://github.com/Dillona25/flight-checker">
                <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
                  Code
                </button>{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
