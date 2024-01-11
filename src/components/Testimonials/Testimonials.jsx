import Max from "../../images/Max J.jpeg";
import Anderson from "../../images/Anderson.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="pt-[50px] pb-[100px] bg-[#363636] px-[30px] md:px-[70px] flex flex-col"
    >
      <h1 className="pb-[10px] font-[Poppins] text-[30px] md:text-[50px] text-white font-semibold border-b border-white-[1px]">
        Testimonials
        <span className="text-[15px] md:text-[20px] font-normal">
          {" "}
          via LinkedIn
        </span>
      </h1>
      <div className="flex flex-col items-center gap-[20px] md:gap-[75px] md:flex-row md:justify-center">
        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Max Jacobson"
                src={Max}
              ></img>
              <div className="flex flex-col">
                <span>Max Jacobson</span>
                <span className="text-[12px]">
                  Senior Software Engineer | Republic Services | TripleTen
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              "I had the opportunity to tutor Dillon at Tripleten, and he truly
              stood out as an exceptional student. His ability to grasp new
              concepts at a rapid pace was impressive, especially in a
              challenging field like ours. More than just being tech-savvy,
              Dillon has a clear and effective way of communicating that made a
              significant difference to our learning environment. What’s really
              remarkable about Dillon is his talent for bringing people
              together. His positive attitude is infectious, and he has a unique
              talent for inspiring everyone around him to perform their best.
              Dillon is a great team player and a born leader. He would be an
              invaluable asset to any tech team or project."
            </p>
          </div>
        </div>

        <div className="flex flex-col mt-[50px]">
          <div className="flex flex-col font-[Poppins] text-white">
            <div className="flex items-center gap-[10px]">
              <img
                className="w-[100px] h-[100px] rounded-[50%]"
                alt="Image of Anderson Marques"
                src={Anderson}
              ></img>
              <div className="flex flex-col">
                <span>Anderson Marques</span>
                <span className="text-[12px]">
                  React Developer | Senior Student Tutor TripleTen
                </span>
              </div>
            </div>
          </div>
          <div className="bg-[#2b2b2b] rounded-[10px] p-[20px] mt-[20px] max-w-[500px] h-fit md:h-[275px] shadow-[rgba(255,_255,_255,_0.24)_0px_3px_8px]">
            <p className="font-[Poppins] text-white text-[14px]">
              "I collaborated with Dillon and 3 other developers to create the
              Flight Checker during TripleTen's August Code Jam. The project was
              Dillon's idea. His curiosity and ability to come up with unique
              ideas stood out during our time working together. Throughout the
              project, he showed a genuine willingness to learn and adapt,
              diving into new tools and languages with enthusiasm. His
              dedication made our journey from concept to execution smooth and
              efficient. I'd recommend Dillon to anyone seeking a dedicated,
              curious, and innovative developer."
            </p>
          </div>
        </div>
      </div>
      <Link
        to="/contact"
        className="hidden md:block mt-[50px] font-[Poppins] py-[10px] px-[40px] rounded-full bg-[#f5dfa1] text-black w-fit m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:scale-110 duration-[.5s] ease-in-out"
      >
        Connect
      </Link>
    </div>
  );
};

export default Testimonials;
