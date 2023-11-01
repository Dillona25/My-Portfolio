import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <div className=" max-w-[100%] mt-[150px] mx-[70px]">
      <h1 className="font-[Poppins] text-white text-[50px] font-semibold pb-[10px] border-[#f5dfa1] border-b-2">
        Projects
      </h1>
      <div className="flex flex-wrap align-middle max-w-[100%] justify-center gap-[30px] mt-[100px]">
        <ProjectCards />
      </div>
      <button className="mt-[150px]">See More</button>
    </div>
  );
};

export default Projects;
