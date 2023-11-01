import Typewriter from "typewriter-effect";
import Portrait from "../images/Portrait.png";

const Hero = () => {
  return (
    <div className="flex justify-between max-w-[100%] mt-[100px] mx-[70px]">
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
          and Tailwind, JavaScript and React.js. I have experience in backend
          stacks such as Node.js, Express.js, MongoDB and Google Cloud. Im very
          experienced with Git and Github for project management and
          collaboration.
        </p>
        <button className="w-[150px] rounded-[5px] p-[10px] bg-[#9b9b84] mt-[30px] font-[Poppins] font-semibold text-[20px] mb-[100px] hover:opacity-80 hover:scale-105 ease-in-out duration-100">
          Lets Chat
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
