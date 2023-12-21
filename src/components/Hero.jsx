import Typewriter from "typewriter-effect";
import Portrait from "../images/Portrait.png";
import Portraitm from "../assets/Portrait mobile.png";
import css from "../assets/CSS.svg";
import HTML from "../assets/HTML.svg";
import JS from "../assets/JS.svg";
import NODE from "../assets/NODE.svg";
import React from "../assets/React.svg";
import Tailwind from "../assets/Tailwind.svg";
import Vite from "../assets/Vite.svg";

const Hero = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:justify-between max-w-[100%] mt-[75px] mb-[75px] xl:mb-[150px] mx-[30px] xl:mx-[70px]">
      <div className="flex flex-col text-center xl:w-[850px] xl:text-start">
        <div className="xl:hidden w-[200px] border-white border-[1px] mx-auto mb-[30px] rounded-[10px] p-[5px] shadow-[rgba(255,_255,_255,_0.50)_0px_3px_8px]">
          <img
            className="xl:hidden w-[200px] rounded-[10px]"
            alt="portrait"
            src={Portraitm}
          ></img>
        </div>
        <h1 className="font-[Poppins] text-white text-[45px] xs:text-[50px] xl:text-[70px] font-semibold leading-[1.2]">
          Hello 👋
          <br />
          Im Dillon
          <br />{" "}
          <span className="font-[Poppins] text-[#f5dfa1] text-[25px] xs:text-[31px] md:text-[30px] xl:text-[70px] font-semibold">
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
        <p className="font-[Poppins] text-white text-center xl:text-start xl:max-w-[600px] text-[15px] xl:text-[20px] mt-[12px]">
          I design websites and applications that are both appealing and user
          friendly! I have experience with front-end stacks such as HTML, CSS 3
          as well as Tailwind, JavaScript and React.js. I will also soon have
          experience in backend stacks such as Node.js, Express.js, MongoDB and
          Google Cloud. Stay a minute why dont ya, there's still more to see!
        </p>
        <div className="flex justify-center xl:justify-start mt-[20px] w-full xl:ml-[-10px] xl:jusify-center">
          <img
            src={HTML}
            alt="HTML logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={css}
            alt="css logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={Tailwind}
            alt="taildwind logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={JS}
            alt="javaScript logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={React}
            alt="react.js logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
          <img
            src={NODE}
            alt="node.js logo"
            className="w-[45px] xs:w-[50px] xl:w-[90px]"
          ></img>
        </div>
      </div>
      <div className="hidden xl:flex bg-white h-[350px] bg-opacity-50 w-[350px] m-auto mt-[200px] xl:mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
        <img
          className=" h-[500px] w-[350px] rounded-[10px] position: absolute bottom-0"
          alt="portrait"
          src={Portrait}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
