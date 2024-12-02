import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

function LeftSider({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
      <div className="fixed left-0 bottom-0 px-10 sm:static">
        <div className="flex flex-col items-center">
          <button
            className={`pb-5 ${
              darkMode ? "bg-primary text-light" : "bg-light text-primary"
            } flex items-center gap-3`}
            onClick={toggleDarkMode}
          >
            {darkMode ? <BsSunFill /> : <BsMoonFill />}
          </button>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href="https://www.linkedin.com/in/omar-asim-mirza-56544a11b/" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg ri-linkedin-box-line text-secondary"
            ></a>
            <a
              href="https://github.com/omarasimmirza" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg mb-3 ri-github-line text-secondary"
            ></a>
          </div>
          <div
            className={`${
              darkMode ? "bg-tertiary" : "bg-tertiaryLight"
            } w-[1px] h-32 sm:hidden`}
          ></div>
        </div>
      </div>
  );
}

export default LeftSider;
