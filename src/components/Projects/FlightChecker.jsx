import Flight from "../../images/Flight.png";
import HTML from "../../assets/HTML.svg";
import JS from "../../assets/JS.svg";
import Tailwind from "../../assets/Tailwind.svg";
import ProjectCard from "../ProjectCard/ProjectCard";

const FlightChecker = ({ showCard, category }) => {
  return (
    <div
      className={`flex flex-col mb-[100px] gap-[10px] bg-[#2b2b2b] max-w-[400px] h-fit rounded-lg shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] p-[10px] overflow-visible ${
        showCard === category ? "block" : "hidden"
      }`}
    >
      <ProjectCard
        title={"Flight Tracker"}
        ProjectImage={Flight}
        Stackone={HTML}
        Stacktwo={Tailwind}
        Stackthree={JS}
        Description={
          <p className="font-[Poppins] text-black text-[14px] xs:text-[15px]">
            Flight Checker is a fully responsive website that allows users to
            track flights! When the user eneters their country and aiport they
            can then search both arriving and departing flights. They will be
            greeted with a list of flights by airline, flight number, arriving
            and or departing time. While my presence was minimal in this project
            I learned a ton from being apart of it!
          </p>
        }
        LiveSite={"https://flightchecker.netlify.app/"}
        Code={"https://github.com/Dillona25/flight-checker"}
      />
    </div>
  );
};

export default FlightChecker;
