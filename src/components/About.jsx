import React from "react";
import Image1 from "../images/Image1.png";
import Image2 from "../images/Image2.png";
import Bounce from "react-reveal/Bounce";

const About = ({ openModal }) => {
  return (
    <div
      id="about"
      className="px-[30px] mb-[100px] md:px-[70px] py-[100px] w-full"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[40px] md:text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        About me
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[50px]">
        <div className="flex flex-col gap-[20px] justify-center w-full mb:max-w-[50%] h-[fit] md:h-[750px] bg-[#363636] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
          <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
            <Bounce>
              <div className="px-[15px]">
                <h1 className="font-[Poppins] mb-[20px] text-[20px] xs:text-[30px] md:text-[30px]  pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                  Education
                </h1>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  June-2023 | Current
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  TripleTen Software Engineering Bootcamp
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  At TripleTen I have become very experience in several
                  front-end stacks as well as back-end stacks. With over 750+
                  hours of course work and multiple projects, TripleTen has
                  provided me the knowledge to be a successful full-stack
                  developer.
                </p>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  August-2021 | August-2023
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  Northeast Community College | Associates in accounting
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  During my time at Northeast studying accounting I gained
                  extensive knowledge but more importantly developed work field
                  skills for my career. I graduated with a 3.8 GPA making the
                  presidents honor list, and the schools honor roll, both years.
                </p>
              </div>
              <div className="px-[15px]">
                <h1 className="font-[Poppins] mb-[20px] text-[20px] xs:text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                  Experience
                </h1>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  April 2022 | current
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  ALLO Communications | Fiber Splice Designer
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  Here at ALLO as a splice designer I have a substancial amout
                  of experience using excel, building and creating efficient and
                  effective data gathering spreadsheets. I am responsible for
                  producing a design product to ALLOs construction teams as they
                  begin to build markets in CO, AZ, and NE. ALLO has provided me
                  substancial development of soft skills, and behavior skills
                  that will go a long way in my career.
                </p>
              </div>
            </Bounce>
          </div>
        </div>

        <div className="flex mb:flex-col gap-[20px] align-center w-full md:max-w-[50%] h-[750px] rounded-xl">
          <div className="flex flex-col justify-between h-fit rounded-xl bg-[#363636] p-[20px] gap-[20px]">
            <div className="flex m-auto mb-0 mt-0 gap-[30px] border-[1px] border-white rounded-[25%] p-[5px] w-[175px] md:w-[250px]">
              <img
                src={Image1}
                className="h-[275px] w-[175px] md:h-fit md:w-[250px] rounded-[25%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
              ></img>
            </div>
            <p className="font-[Poppins] text-[14px] xs:text-[15px] text-white text-center">
              My Name is Dillon Arnold and Im 21 years old. Born in raised in
              the Portland, Oregon Area but I now currently live in Nebraska
              with my two mini Aussies and wife! On my free time you can find me
              either golfing, coding, golfing or coding. Alongside my passion
              for software development.
              <br />
              Im a current student in TripleTen's software engineering bootcamp
              where I found my biggest passion since flying planes: Software
              development. Ive always been someone who loves to learn, and
              challenege myself and needless to say software developmet provides
              just that. I have a career objective to leverage my dedication,
              passion, and skills in a dynamic environment where I can
              contribute to significant growth, ultimately making an impact on a
              team’s success!
            </p>
            <button
              onClick={openModal}
              href="#_"
              class="shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] relative inline-flex items-center justify-center px-[24px] py-[12px] w-[200px] m-auto mt-0 mb-0 overflow-hidden font-medium bg-[#f5dfa1] text-black transition duration-300 ease-out rounded-full group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#f5dfa1] group-hover:translate-x-0 ease">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="black"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  ></path>
                </svg>
              </span>
              <span class="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                Contact
              </span>
              <span class="relative invisible">Contact</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
