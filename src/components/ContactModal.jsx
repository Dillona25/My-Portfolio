const ContactModal = ({ closeModal }) => {
  return (
    <div className="position: fixed flex flex-col top-0 bottom-0 right-0 left-0 z-10 bg-black bg-opacity-[70%] ">
      <div className="position: relative bg-white m-auto p-9 rounded-xl box-border">
        <button
          onClick={closeModal}
          className="posiiton: absolute bg-Close w-[30px] h-[30px] bg-no-repeat top-3 right-3"
        ></button>
        <div className="w-[400px] mt-[20px]">
          <form className="flex flex-col align-middle gap-[10px]">
            <h1 className="font-[Poppins] text-black text-[50px] font-semibold">
              Contact me
            </h1>
            <label className="font-[Poppins] text-black text-[16px] font-semibold">
              Name
            </label>
            <input
              className="border-[1px] border-black bg-white p-[7px] rounded-[10px] text-black"
              type="name"
              name="name"
              placeholder="Your name"
            ></input>
            <label className="font-[Poppins] text-black text-[16px] font-semibold">
              Email
            </label>
            <input
              className="border-[1px] border-black bg-white p-[7px] rounded-[10px] text-black"
              type="email"
              name="email"
              placeholder="Your email"
            ></input>
            <label className="font-[Poppins] text-black text-[16px] font-semibold">
              Your message!
            </label>
            <textarea
              className="border-[1px] border-black bg-white p-[7px] rounded-[10px] text-black"
              placeholder="Type your message"
            ></textarea>
            <button className="m-auto max-w-[200px] rounded bg-black  px-8 py-2 text-[15px] hover:scale-110 ease-in-out duration-[.5s] font-semibold mt-[20px] text-white">
              Send Message
            </button>
          </form>
          <div className="flex gap-[20px] mt-[40px] justify-between">
            <button className="bg-LinkedIn2 bg-no-repeat h-[40px] w-[40px]"></button>
            <button className="bg-Github2 h-[40px] w-[40px] bg-no-repeat"></button>
            <button className="bg-Instagram h-[40px] w-[40px] bg-no-repeat"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
