import Edu from "../../assets/Edu.svg";

const ResumeEdu = () => {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-[20px] mt-[50px]">
        <div className="flex gap-[20px]">
          <img className="w-[40px] h-[40px]" src={Edu}></img>
          <h1 className="font-[Poppins] text-white text-[30px] font-semibold ">
            Education
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
              Northeast Community College
            </h2>
            <h3 className="font-[Poppins] text-black text-[15px]">
              June-2022 - August-2023
            </h3>
            <h4 className="font-[Poppins] text-black text-[15px]">
              Accounting Associates | Norfolk, NE
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEdu;
