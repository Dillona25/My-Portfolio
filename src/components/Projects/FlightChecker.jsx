import Flight from "../../images/Flight.png";
import JS from "../../assets/JS.svg";
import Tailwind from "../../assets/Tailwind.svg";

const FlightChecker = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <img
        src={Flight}
        alt="Image of project"
        className="rounded-lg top-[-70px] position: relative shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
      ></img>
      <div className="flex flex-col gap-[30px] h-fit justify-between w-full bg-white mt-[-50px] p-[10px] rounded-lg">
        <div className="flex gap-[10px] w-full border-b-[2px] border-black border-opacity-50">
          <h1 className="font-[Poppins] font-semibold text-black text-[20px] md:text-[25px]">
            Flight Checker
          </h1>
          <img
            src={Tailwind}
            alt="Tailwind logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
          <img
            src={JS}
            alt="JavaScript logo"
            className="h-[35px] w-[35px] self-center"
          ></img>
        </div>
        <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
          Flight Checker is a fully responsive website that allows users to
          track flights! When the user eneters their country and aiport they can
          then search both arriving and departing flights. They will be greeted
          with a list of flights by airline, flight number, arriving and or
          departing time. While my presence was minimal in this project I
          learned a ton from being apart of it!
        </p>
        <div className="flex gap-[20px]">
          <a href="https://flightchecker.netlify.app/">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Live site
            </button>
          </a>
          <a href="https://github.com/fm-anderson/flight-checker">
            <button className="px-[30px] py-[5px] bg-[#2b2b2b] w-fit rounded-md text-white font-[Poppins] hover:scale-105 ease-in-out duration-[.5s]">
              Code
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FlightChecker;
