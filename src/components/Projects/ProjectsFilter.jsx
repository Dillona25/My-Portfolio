const ProjectsFilter = ({ handleProject }) => {
  return (
    <div className="dropdown dropdown-bottom flex self-center md:hidden">
      <button tabIndex={0} className="bg-Filter w-[30px] h-[30px]"></button>
      <ul
        tabIndex={0}
        className="dropdown-content right-[0px] z-[1] menu p-2 shadow bg-white rounded-box m-1 w-fit"
      >
        <li className="w-[100px]">
          <a
            className="font-[Poppins] text-black text-[15px]"
            onClick={() => handleProject("all")}
          >
            Featured
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-black"
            onClick={() => handleProject("HTML/CSS")}
          >
            HTML/CSS
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-black"
            onClick={() => handleProject("JavaScript")}
          >
            JavaScript
          </a>
        </li>
        <li>
          <a
            className="font-[Poppins] text-black"
            onClick={() => handleProject("React")}
          >
            React
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ProjectsFilter;
