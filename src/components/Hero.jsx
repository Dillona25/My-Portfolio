import Typewriter from "typewriter-effect";
import Portrait from "../images/Portrait.png";
import css from "../assets/CSS.svg";
import Github from "../assets/Github.svg";
import HTML from "../assets/HTML.svg";
import JS from "../assets/JS.svg";
import NODE from "../assets/NODE.svg";
import React from "../assets/React.svg";
import Tailwind from "../assets/Tailwind.svg";
import Vite from "../assets/Vite.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-between max-w-[100%] mt-[100px] mb-[75px] md:mb-[150px] mx-[30px] md:mx-[70px]">
      <div className="flex flex-col text-center md:w-[850px] md:text-start">
        <h1 className="font-[Poppins] text-white text-[45px] xs:text-[50px] md:text-[70px] font-semibold leading-[1.2]">
          Hello 👋
          <br />
          Im Dillon
          <br />{" "}
          <span className="font-[Poppins] text-[#f5dfa1] text-[45px] xs:text-[50px] lg:text-[70px] font-semibold">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("A full-stack developer")
                  .start()
                  .pauseFor(3000);
              }}
            />
          </span>
        </h1>
        <p className="font-[Poppins] text-white text-center lg:text-start md:max-w-[600px] text-[15px] md:text-[20px] mt-[12px]">
          I design websites and applications that are both appealing and user
          friendly! I have experience with front-end stacks such as HTML, CSS 3
          as well as Tailwind, JavaScript and React.js. I also have experience
          in backend stacks such as Node.js, Express.js, MongoDB and Google
          Cloud. Stay a minute why dont ya, theres still more to see!
        </p>
        <div className="flex justify-center md:justify-start mt-[20px] w-full md:ml-[-10px] md:jusify-center">
          <img src={HTML} className="w-[45px] xs:w-[50px] md:w-[90px]"></img>
          <img src={css} className="w-[45px] xs:w-[50px] md:w-[90px]"></img>
          <img
            src={Tailwind}
            className="w-[45px] xs:w-[50px] md:w-[90px]"
          ></img>
          <img src={JS} className="w-[45px] xs:w-[50px] md:w-[90px]"></img>
          <img src={React} className="w-[45px] xs:w-[50px] md:w-[90px]"></img>
          <img src={NODE} className="w-[45px] xs:w-[50px] md:w-[90px]"></img>
          <img src={Github} className="w-[45px] xs:w-[50px] md:w-[90px]"></img>
        </div>
      </div>
      <div className="hidden md:flex bg-white h-[350px] bg-opacity-50 w-[350px] m-auto mt-[200px] md:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
        <img
          className=" h-[500px] w-[350px] rounded-[10px] position: absolute bottom-0"
          src={Portrait}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
