import React from "react";
import { useSelector } from "react-redux";
import profile from "../../resources/profile.png";

function Intro({ darkMode }) {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;
  return (
    <div className="h-[90vh] flex flex-col items-start justify-center gap-8 pt-[10%] se:pt-[20%] th:pt-[30%] xs:pb-[150%] sm:pb-[110%] xxs:pt-[10%] xs:pt-[150%] sm:pt-[110%] gal:pb-[115%] gal:pt-[120%] nest:pt-[60%] nest:pb-[50%] final:pt-[130%] final:pb-[120%]">
      <div className="flex w-full mt-10">
        <div className="w-1/2">
          <h1 className={`${darkMode ? "text-light" : "text-primary"}`}>
            {welcomeText || ""}{" "}
          </h1>
          <h1 className="text-7xl se:text-5xl text-secondary font-semibold">
            {firstName || ""} {lastName || ""}
          </h1>
          <h1
            className={`text-7xl se:text-5xl ${
              darkMode ? "text-light" : "text-primary"
            } font-semibold`}
          >
            {caption || ""}
          </h1>
        </div>
        <div className="w-1/2">
          <img
            src={profile}
            className={`h-[400px] th:h-full xxs:h-[70%] xxs:mt-[36%] xs:h-[50%] xs:mt-[5%] sm:mt-[38%] se:ml-[5%] md-[40%] border-b-[4px] border-solid ${
              darkMode ? "border-tertiary" : "border-tertiaryLight"
            }`}
          />
        </div>
      </div>
      <p
        className={`text-lg ${
          darkMode ? "text-light" : "text-primary"
        } text-left se:w-[90vw] w-2/3`}
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
