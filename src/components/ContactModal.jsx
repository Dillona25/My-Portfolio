import Linkedin from "../assets/Linkedin.svg";

const ContactModal = () => {
  return (
    <div className="position: fixed flex flex-col top-0 bottom-0 right-0 left-0 z-10 bg-black bg-opacity-50 ">
      <div className="position: relative bg-white m-auto p-9 rounded-xl box-border">
        <h1 className="font-[Poppins] text-black text-[30px] font-semibold">
          Contact me
        </h1>
        <h2 className="font-[Poppins] text-[#6f6f6f] text-[20px] font-semibold">
          Fill out the form to start a conversation!
        </h2>
        <div className="flex gap-[20px]">
          <button className="bg-LinkedIn2 bg-no-repeat h-[48px] w-[48px]"></button>
          <button className="bg-Instagram h-[60px] w-[60px] bg-no-repeat"></button>
        </div>
        <form className="flex flex-col gap-[10px]"></form>
      </div>
    </div>
  );
};

export default ContactModal;
