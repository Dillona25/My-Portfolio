import { Link } from "react-router-dom/cjs/react-router-dom.min";

const ContactButton = () => {
  return (
    <div className="flex justify-center items-center bg-[#f5dfa1] h-[60px] w-[60px] rounded-[100%] position: fixed bottom-[30px] right-[30px] lg:hidden">
      <Link
        to="/contact"
        className="bg-Mail h-[32px] w-[32px] rounded-[100%]"
      ></Link>
    </div>
  );
};

export default ContactButton;
