import React from "react";
import Image1 from "../images/Image1.png";

const About = () => {
  return (
    <div className="px-[70px] py-[100px] w-full">
      <div className="flex justify-between gap-[40px]">
        <div className="flex flex-col gap-[20px] justify-center max-w-[50%] h-[750px] bg-[#363636] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
          <div className="flex gap-[10px]">
            <div className="flex flex-col gap-[20px] max-w-[50% h-[750px] p-[20px] rounded-xl">
              <h1 className="font-[Poppins] text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                Get to know me
              </h1>
              <p className="font-[Poppins] text-[15px] text-white">
                My Name is Dillon Arnold and Im 21 years old. Born in raised in
                the Portland, Oregon Area but I now currently live in Nebraska
                with my two mini Aussies and wife! On my free time you can find
                me either golfing, coding, golfing or coding. Alongside my
                passion for software development, I also have a passion for
                aviation. I completed 2 years of ground school, 20+ hours of
                simulator flight time and even about 5 hours of real flight
                time. However, I was never able to pass the medical needed to
                pursue a commerical pilot education.
                <br />
                Im a graduate from TripleTen's software engineering bootcamp
                where I found my biggest passion since flying: Software
                development. Ive always been someone who loves to learn, and
                challenege myself and needless to say software developmet
                provides just that. I have a career objective to leverage my
                dedication, passion, and skills in a dynamic environment where I
                can contribute to significant growth, ultimately making an
                impact on a team’s success!
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-[20px] justify-center max-w-[50%] h-[750px] bg-[#363636] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[20px] rounded-xl">
          <div className="relative border-s border-gray-200 dark:border-[#f5dfa1]">
            <div className="px-[15px]">
              <h1 className="font-[Poppins] mb-[20px] text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                Education
              </h1>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                June-2023 | Current
              </time>
              <h2 className="text-lg px- font-semibold text-gray-900 dark:text-white">
                TripleTen Software Engineering Bootcamp
              </h2>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                At TripleTen I have become very experience in several front-end
                stacks as well as back-end stacks. With over 750+ hours of
                course work and multiple projects, TripleTen has provided me the
                knowledge to be a successful full-stack developer.
              </p>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                August-2021 | August-2023
              </time>
              <h2 className="text-lg px- font-semibold text-gray-900 dark:text-white">
                Northeast Community College | Associates in accounting
              </h2>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                During my time at Northeast studying accounting I gained
                extensive knowledge but more importantly developed work field
                skills for my career. I graduated with a 3.8 GPA making the
                presidents honor list, and the schools honor roll, both years.
              </p>
            </div>
            <div className="px-[15px]">
              <h1 className="font-[Poppins] mb-[20px] text-[30px] pb-[5px] font-semibold text-white border-b-[2px] border-white border-opacity-50">
                Experience
              </h1>
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-[#f5dfa1]"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                April 2022 | current
              </time>
              <h2 className="text-lg px- font-semibold text-gray-900 dark:text-white">
                ALLO Communications | Fiber Splice Designer
              </h2>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                Here at ALLO as a splice designer I have a substancial amout of
                experience using excel, building and creating efficient and
                effective data gathering spreadsheets. I am responsible for
                producing a design product to ALLOs construction teams as they
                begin to build markets in CO, AZ, and NE. ALLO has provided me
                substancial development of soft skills, and behavior skills that
                will go a long way in my career.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
