import Typewriter from "typewriter-effect";
import Portrait from "../images/Portrait.png";

const Hero = () => {
  return (
    <div className="flex justify-between max-w-[100%] mt-[100px] mb-[150px] mx-[70px]">
      <div className="flex flex-col">
        <h1 className="font-[Poppins] text-white text-[70px] font-semibold leading-[1.2]">
          Hello
          <br />
          Im Dillon
          <br />{" "}
          <span className="font-[Poppins] text-[#f5dfa1] text-[70px] font-semibold">
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
        <p className="font-[Poppins] text-white text-[20px] max-w-[600px] mt-[12px]">
          I design websites and applications that are both appealing and user
          friendly! I have experience with front-end stacks such as HTML, CSS 3
          as well as Tailwind, JavaScript and React.js. I also have experience
          in backend stacks such as Node.js, Express.js, MongoDB and Google
          Cloud. Stay a minute why dont ya, theres still more to see!
        </p>
        <button className="group relative inline-block overflow-hidden max-w-[200px] rounded border  bg-[#9B9B84]  px-12 py-4 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[75px] text-black">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          Lets chat
        </button>
      </div>
      <div className=" bg-white h-[400px] bg-opacity-50 w-[400px] mt-[100px] rounded-t-[200px] rounded-b-[10px] position: relative">
        <img
          className="h-[550px] w-[500px] rounded-[10px] position: absolute bottom-0"
          src={Portrait}
        ></img>
      </div>
    </div>
  );
};

export default Hero;
