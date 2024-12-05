import React from "react";
import { useSelector } from "react-redux";
import profile from "../../resources/profile.png";
import { AiFillGithub } from "react-icons/ai"; // Import the GitHub icon

function Intro({ darkMode }) {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[100%] flex flex-col items-start justify-center pt-[5%] xs:pt-[15%]">
      <div className="flex w-full mt-10">
        <div className="w-1/2 flex-col">
          <h1 className={`${darkMode ? "text-light" : "text-primary"}`}>
            {welcomeText || ""}{" "}
          </h1>
          <h1 className="text-7xl sm:text-5xl text-secondary mt-[1.5rem] font-semibold mt-[1rem]">
            {firstName || ""} {lastName || ""}
          </h1>
          <h1
            className={`text-7xl sm:text-5xl mt-[1.5rem] ${
              darkMode ? "text-light" : "text-primary"
            } font-semibold`}
          >
            {caption || ""}
          </h1>
          {/* git hub icon attached to the github link */}
          <a
            href="https://github.com/omarasimmirza/portfolio-omar" // Replace with your actual GitHub URL
            target="_blank"
            rel="noopener noreferrer"
            className={`text-3xl ${
              darkMode ? "text-light" : "text-primary"
            } flex hover:text-secondary transition-colors duration-300`}
          >
            <AiFillGithub className="mt-[1.7rem] mb-[1rem]" />
            <p className="ml-[2%] xs:hidden mt-[1.5rem] mb-[1rem]">Link to Portfolio project</p>
          </a>
        </div>
        <div className="w-1/2">
          <img
            src={profile}
            className={`h-[80%] xs:h-[70%] sm:ml-[5%] ml-[40%] border-b-[4px] border-solid ${
              darkMode ? "border-tertiary" : "border-tertiaryLight"
            }`}
          />
        </div>
      </div>
      <p
        className={`text-lg mb-[1rem] ${
          darkMode ? "text-light" : "text-primary"
        } text-left sm:w-[90vw] w-2/3`}
      >
        {description || ""}
      </p>
      <div className="xs:hidden w-full">
        <lottie-player
          src="https://lottie.host/8715305a-f4ce-47f3-b9bc-e35ecb2731c8/DMqrM5jq3G.json"
          background="transparent"
          speed="1"
          autoplay
          class="w-[10%] ml-[45%]"
          style={{ maxHeight: "100px" }}
          loop
        />
      </div>
    </div>
  );
}

export default Intro;
