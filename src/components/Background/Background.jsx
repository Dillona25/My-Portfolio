import React from "react";
import Image1 from "../../images/Image1.png";

const Background = ({ handleOpenConfirmModal }) => {
  return (
    <div
      id="about"
      className="px-[30px] mb-[20px] lg:mb-[100px] md:px-[70px] py-[100px] w-full"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[40px] md:text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        Background
      </h1>
      <div className="flex flex-col md:flex-row justify-between gap-[40px] mt-[50px]">
        <div className="flex flex-col gap-[20px] justify-center w-full mb:max-w-[50%] h-fit bg-[#363636] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
          <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
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
                At TripleTen I have become very experienced in several front-end
                stacks as well as back-end stacks. With over 750+ hours of
                course work and multiple projects, TripleTen has provided me the
                knowledge to be a successful full-stack developer.
              </p>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="font-[Poppins] text-gray-400 text-[15px]">
                August-2021 | August-2023
              </time>
              <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                Northeast Community College | Associates in accounting
              </h2>
            </div>
            <div className="px-[15px]">
              <h1 className="font-[Poppins] mb-[20px] text-[20px] xs:text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                Experience
              </h1>
              <div>
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
                <time className="font-[Poppins] text-gray-400 text-[15px]">
                  January 2024 | April 2024
                </time>
                <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                  Slopopedia | Software developer Intern
                </h2>
                <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                  At Slopopedia I worked in a team of 6+ engineers using an
                  agile process. I successfully Built 3 fully responsive
                  components using React.js and Tailwind CSS. I wrote search
                  queries and mutations using Apollo Client and GraphQL to fetch
                  and create data into a database satisfying front-end requests.
                  I also provided code review to fellow engineers with a focus
                  on code efficiency and future project needs.
                </p>
              </div>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="font-[Poppins] text-gray-400 text-[15px]">
                April 2022 | Current
              </time>
              <h2 className="font-[Poppins] text-white text-[15px] xs:text-[18px] mt-[10px] mb-[10px]">
                ALLO Communications | Fiber Splice Designer
              </h2>
              <p className="font-[Poppins] text-gray-400 text-[15px] mb-[10px]">
                Here at Allo I am responsible for: Distributing and maintaining
                documents needed by fiberoptic splicers to splice cable and
                support thousands of customers. Distributing and maintaining
                complex sheets to track and analyze construction progress for
                the company. Collaborating and working closely with construction
                teams to provide accurate and efficient documents.
              </p>
            </div>
          </div>
          <button
            onClick={handleOpenConfirmModal}
            className="font-[Poppins] py-[10px] px-[40px] rounded-full bg-[#f5dfa1] text-black w-fit m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 duration-[.5s] ease-in-out"
          >
            Resume
          </button>
        </div>

        <div className="flex-col md:flex gap-[20px] align-center w-full md:max-w-[50%] rounded-xl my-auto">
          <div className="flex m-auto mb-[20px] mt-0 gap-[30px] border-[1px] border-white rounded-[25%] p-[5px] w-[175px] md:w-[250px]">
            <img
              src={Image1}
              alt="Image of myself"
              className="h-[250px] w-[175px] md:h-fit md:w-[250px] rounded-[25%] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            ></img>
          </div>
          <p className="font-[Poppins] text-[14px] xs:text-[15px] text-white text-center">
            My Name is Dillon Arnold and Im 21 years old. Born and raised in
            Oregon & Washington but I now currently live in Nebraska with my two
            mini Aussies and my wife! On my free time you can find me either
            golfing, or coding. Im a graduate of TripleTen's software
            engineering bootcamp where I found my biggest passion. Ive always
            been someone who loves to learn, and challenege myself and needless
            to say software developmet provides just that. I have a career
            objective to leverage my dedication, passion, and skills in a
            dynamic environment where I can contribute to significant growth,
            ultimately making an impact on a team’s success!
          </p>
          <div className="flex flex-wrap justify-center gap-[10px] mt-[15px] mb-[10px]">
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Collaboration</p>
            </div>
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Leadership</p>
            </div>
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Accountability</p>
            </div>
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Adaptability</p>
            </div>
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Time management</p>
            </div>
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Multitasking</p>
            </div>
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Patience</p>
            </div>
            <div className="bg-white px-[10px] py-[5px] rounded-[10px] text-[15px] font-[Poppins] text-black">
              <p>Critical Thinking</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Background;
