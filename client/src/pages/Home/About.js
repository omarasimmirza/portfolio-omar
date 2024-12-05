import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function About({darkMode}) {
  const { portfolioData } = useSelector((state) => state.root);
  const { about } = portfolioData;
  const { skills, lottieURL, description1, description2 } = about;
  return (
    <div>
      <SectionTitle title="About" darkMode={darkMode} />

      <div className="flex w-full items-center sm:flex-col">
        <div className="h-[70vh] w-1/2 sm:w-full">
          <lottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
            loop
          ></lottie-player>
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full">
          <p className={`text-lg ${darkMode ? "text-light" : "text-primary"}`}>{description1 || ""}</p>
          <p className={`text-lg ${darkMode ? "text-light" : "text-primary"}`}>{description2 || ""}</p>
        </div>
      </div>

      <div className="py-5">
        <h1 className={`${darkMode ? "text-tertiary" : "text-tertiaryLight"} text-xl`}>
          Frameworks and Technoligies:
        </h1>
        <div className="flex flex-wrap gap-10 mt-5">
          {skills.map((skill, index) => (
            <div key={index} className={`${darkMode ? "border-tertiary" : "border-tertiaryLight"} border py-3 px-6`}>
              <h1 className={`${darkMode ? "text-tertiary" : "text-tertiaryLight"} text-lg`}>{skill}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
