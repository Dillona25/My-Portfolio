import US from "../images/US.png";

const Projects = () => {
  return (
    <div className="pt-[100px] pb-[100px] bg-[#363636] px-[70px]">
      <h1 className="pb-[10px] font-[Poppins] text-[50px] text-white font-semibold border-b-[2px] border-white border-opacity-20">
        Projects
      </h1>
      <div className="mt-[100px] flex justify-between gap-[20px]">
        <div className=" bg-[#2b2b2b] h-[450px] w-[400px] rounded-lg p-[10px] overflow-visible ">
          <img
            className="position: relative bg-white rounded-lg top-[-60px]"
            src={US}
          ></img>
        </div>
        <div className="bg-[#2b2b2b] h-[450px] w-[400px] rounded-lg shadow-2xl p-[10px] overflow-visible">
          <img
            className="position: relative bg-white rounded-lg top-[-60px]"
            src={US}
          ></img>
        </div>
        <div className="bg-[#2b2b2b] h-[450px] w-[400px] rounded-lg shadow-2xl p-[10px] overflow-visible">
          <img
            className="position: relative bg-white rounded-lg top-[-60px]"
            src={US}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Projects;
