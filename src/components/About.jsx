import Html from "../assets/Html.svg";
import Css from "../assets/CSS.svg";
import Tailwind from "../assets/Tailwind.svg";
import JS from "../assets/JS.svg";
import React from "../assets/React.svg";
import Node from "../assets/NODE.svg";
import Github from "../assets/Github.svg";
import Vite from "../assets/Vite.svg";

const About = () => {
  return (
    <div className=" max-w-[100%]  pb-[125px]">
      <h1 className="font-[Poppins] text-white text-[50px] font-semibold pb-[10px] border-[#f5dfa1] border-b-2 mx-[70px]">
        About me
      </h1>
      <div className="mx-[70px] mt-[100px] flex justify-between">
        <div className="bg-[#2b2b2b] rounded-[10px] p-[3px] border-white border-[1px]">
          <div className="rounded-[10px] w-[600px] p-[10px] bg-white">
            <p className="text-black font-[Poppins] text-[15px] w-[100%] z-[2] posiiton: relative">
              My name is Dillon Arnold and Im 21 years old! I grew up in
              Washington State but was all over the Pacific Northwest. I grew up
              with ambitions of being a pilot, and even had accumulated about 20
              hours of real flight time before being told I wont ever pass the
              medical exams due to an extensive medical history. Luckily for me
              Im a very driven person who loves to learn so I changed directions
              and pursed finance after graduating high school. I moved to
              Nebraska and ended up getting my associates degree in accounting
              and was about ready to enroll into a university for my bachelors
              in finance.
              <br />
              During this time I saw an add on youtube for a remote software
              engineering bootcamp called TripleTen and decided to look more
              into it. After some research I quickly realized that the work, and
              lifestyle of tech really had my best interest and after a few
              weeks of thinking I decided to pause my journey in finance and
              enroll into TripleTens 10 month long bootcamp in software
              development. It was a massive commitment both time wise and
              financially. It wasnt long into the program that I realized I
              loved the challenge and the art of coding. I had always been
              someone who loved to learn and loved to challenge myself and
              software development has allowed me to do just that.
              <br />
              During my time at TripleTen I gained a substancial amount of
              experience in both front end and back end stacks that have given
              me the skills to be a full-stack developer. I have a career
              objective to leverage my dedication, passion, and skills in a
              dynamic environment where I can contribute to significant growth,
              ultimately making an impact on a teams success!
            </p>
          </div>
        </div>
        <div className="w-[600px] flex flex-col gap-[30px]">
          <h1 className="font-[Poppins] text-white text-[30px] text-center font-semibold pb-[10px] ">
            Skills
          </h1>
          <div className="flex flex-wrap gap-[10px] max-w-[600px]">
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Communication
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Empathy
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Self awareness
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Patience
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Problem solving
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Critical thinking
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Collaboration
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Adaptability
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Teamwork
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Time management
            </span>
            <span className="bg-white rounded-[50px] py-[5px] px-[20px] font-[Poppins] font-semibold">
              Project management
            </span>
          </div>
          <div className="w-[600px]">
            <h1 className="font-[Poppins] text-white text-[30px] text-center font-semibold pb-[10px] ">
              My Tech stacks
            </h1>
            <div className="max-w-[400px] m-auto mt-[10px]">
              <div className="flex flex-wrap justify-center">
                <img className="w-[85px] h-[85px]" src={Html}></img>
                <img className="w-[85px] h-[85px]" src={Css}></img>
                <img className="w-[85px] h-[85px]" src={Tailwind}></img>
                <img className="w-[85px] h-[85px]" src={JS}></img>
                <img className="w-[85px] h-[85px]" src={React}></img>
                <img className="w-[85px] h-[85px]" src={Node}></img>
                <img className="w-[85px] h-[85px]" src={Github}></img>
                <img className="w-[85px] h-[85px]" src={Vite}></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
