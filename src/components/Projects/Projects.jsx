import ProjectCards from "./ProjectCards.jsx";

const Projects = () => {
  return (
    <div className="bg-[#2b2b2b] max-w-[100%] pt-20 pb-[125px]">
      <h1 className="font-[Poppins] text-white text-[50px] font-semibold pb-[10px] border-[#f5dfa1] border-b-2 mx-[70px]">
        Projects
      </h1>
      <div className="flex gap-[20px] justify-center mt-[50px]">
        <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          All projects
        </button>
        <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          HTML/CSS
        </button>
        <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          JavaScript
        </button>
        <button className="group relative inline-block overflow-hidden rounded border border-gray-100 bg-white  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[1s] font-semibold mt-[50px] text-black focus:outline-none focus:ring active:bg-[#f5dfa1] active:text-white">
          <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          <span className="ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-[1s] group-hover:w-full"></span>
          <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-black transition-all duration-[1s] group-hover:h-full"></span>
          React
        </button>
      </div>
      <div className="flex flex-wrap justify-between max-w-[100%]  gap-[30px] mt-[50px] mx-[70px]">
        <ProjectCards />
      </div>
      <div className="flex justify-center"></div>
    </div>
  );
};

export default Projects;
