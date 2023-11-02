import Experience from "../../assets/Experience.svg";

const ResumeExp = () => {
  return (
    <div className="mt-[50px] flex flex-col gap-[20px]">
      <div className="flex gap-[20px]">
        <img className="w-[40px] h-[40px]" src={Experience}></img>
        <h1 className="font-[Poppins] text-white text-[30px] font-semibold ">
          Experience
        </h1>
      </div>

      <div className="flex flex-col bg-white p-[2px] rounded-[10px] max-w-[400px]">
        <div className="p-[10px] border-[2px] border-black rounded-[10px]">
          <h2 className="font-[Poppins] text-black text-[15px] font-semibold ">
            TripleTen Software Engineering Bootcamp
          </h2>
          <h3 className="font-[Poppins] text-black text-[15px]">
            June-2023 - April-2024
          </h3>
          <h4 className="font-[Poppins] text-black text-[15px]">
            Certification | Remote
          </h4>
        </div>
      </div>

      <div className="flex flex-col bg-white p-[2px] rounded-[10px] max-w-[400px]">
        <div className="p-[10px] border-[2px] border-black rounded-[10px]">
          <h2 className="font-[Poppins] text-black text-[15px] font-semibold ">
            TripleTen Software Engineering Bootcamp
          </h2>
          <h3 className="font-[Poppins] text-black text-[15px]">
            June-2023 - April-2024
          </h3>
          <h4 className="font-[Poppins] text-black text-[15px]">
            Certification | Remote
          </h4>
        </div>
      </div>
    </div>
  );
};

export default ResumeExp;
