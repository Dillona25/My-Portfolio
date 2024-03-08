import Typewriter from "typewriter-effect";
import Portrait from "../../images/Portrait.png";
import Portraitm from "../../assets/Portrait mobile.png";
import Html from "../../assets/Html.svg";
import Css from "../../assets/Css.svg";
import Tailwind from "../../assets/Tailwind.svg";
import JavaScript from "../../assets/JavaScript.svg";
import TypeScript from "../../assets/typescript.svg";
import ReactImg from "../../assets/React.svg";
import NodeJS from "../../assets/Node.svg";
import Mongo from "../../assets/Mongo.svg";
import Netlify from "../../assets/Netlify.svg";
import Cloud from "../../assets/Cloud.svg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col xl:flex-row xl:justify-between max-w-[100%] mt-[75px] mb-[75px] xl:mb-[150px] mx-[30px] xl:mx-[70px]">
        <div className="flex flex-col m-auto text-center xl:w-[850px] xl:text-start">
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
          <p className="font-[Poppins] text-white text-center xl:text-start xl:max-w-[600px] text-[15px] xl:text-[30 mt-[12px]">
            I design websites and applications that are both appealing and user
            friendly! I have experience with front-end stacks such as HTML, CSS
            3 as well as Tailwind, JavaScript and React.js. I have experience in
            backend stacks such as Node.js, Express.js, MongoDB and Google
            Cloud. Stay a minute why dont ya, there's still alot to see.
          </p>
          <div className="flex flex-wrap gap-4 self-start justify-center mt-[24px]">
            <img
              alt="Html logo"
              src={Html}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Css logo"
              src={Css}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Tailwind logo"
              src={Tailwind}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="JavaScript logo"
              src={JavaScript}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="TypeScript logo"
              src={TypeScript}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="React logo"
              src={ReactImg}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Node logo"
              src={NodeJS}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Mongo logo"
              src={Mongo}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Netlify logo"
              src={Netlify}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
            <img
              alt="Cloud logo"
              src={Cloud}
              className="h-[30px] w-[30px] sm:h-[40px] sm:w-[40px] rounded-sm"
            />
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
    </>
  );
};

export default Hero;
