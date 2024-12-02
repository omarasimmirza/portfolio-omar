import React from "react";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

function Header({ darkMode, setDarkMode }) {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <>
      <div className={`p-5 ${darkMode ? "bg-primary" : "bg-light"} flex header pr-7`}>
        <div className="flex justify-between flex-grow">
          <h1 className="text-secondary text-4xl font-semibold">O</h1>
          <h1 className={`${darkMode ? "text-tertiary" : "text-tertiaryLight"} text-4xl font-semibold`}>A</h1>
          <h1 className={`${darkMode ? "text-light" : "text-primary"} text-4xl font-semibold`}>M</h1>
        </div>
      </div>
      <div className={`${darkMode ? "bg-tertiary" : "bg-tertiaryLight"} h-[1px] items-center w-[50%]`}></div>
    </>
  );
}

export default Header;
