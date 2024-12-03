import React from "react";
import { useSelector } from "react-redux";
import profile from "../../resources/profile.png";

function Intro({ darkMode }) {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[90vh] flex flex-col items-start justify-center gap-8 pt-[10%] sm:pt-[20%] xs:pt-[30%] th:pb-[150%] se:pb-[110%] xxs:pt-[130%] xxs:pb-[130%] th:pt-[150%] se:pt-[110%] gal:pb-[115%] gal:pt-[120%] nest:pt-[60%] nest:pb-[50%] final:pt-[130%] final:pb-[120%]">
      <div className="flex w-full mt-10">
        <div className="w-1/2">
          <h1 className={`${darkMode ? "text-light" : "text-primary"}`}>
            {welcomeText || ""}{" "}
          </h1>
          <h1 className="text-7xl sm:text-5xl text-secondary font-semibold">
            {firstName || ""} {lastName || ""}
          </h1>
          <h1
            className={`text-7xl sm:text-5xl ${
              darkMode ? "text-light" : "text-primary"
            } font-semibold`}
          >
            {caption || ""}
          </h1>
        </div>
        <div className="w-1/2">
          <img
            src={profile}
            className={`h-[400px] xs:h-full xxs:h-[40%] xxs:mt-[25%] xxs:pb-[0%] xxs:mb-[0%] th:h-[50%] th:mt-[5%] se:mt-[38%] sm:ml-[5%] ml-[40%] border-b-[4px] border-solid ${
              darkMode ? "border-tertiary" : "border-tertiaryLight"
            }`}
          />
        </div>
      </div>
      <p
        className={`text-lg ${
          darkMode ? "text-light" : "text-primary"
        } text-left sm:w-[90vw] w-2/3`}
      >
        {description || ""}
      </p>
      <lottie-player
        src="https://lottie.host/8715305a-f4ce-47f3-b9bc-e35ecb2731c8/DMqrM5jq3G.json"
        background="transparent"
        speed="1"
        autoplay
        class="xxs:hidden"
        style={{ maxHeight: "100px" }}
        loop
      ></lottie-player>
    </div>
  );
}

export default Intro;
