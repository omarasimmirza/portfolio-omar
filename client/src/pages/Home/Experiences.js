import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Experiences({darkMode}) {
  const [selectedItemIndex , setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;
  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="flex py-10 gap-20 sm:flex-col">
        <div className="flex flex-col gap-10 w-1/5 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {experiences.map((experience, index) => (
            <div key={index}
              onClick={() => {
                setSelectedItemIndex(index);
              }}
              className="cursor-pointer"
            >
              <h1
                className={`text-xl px-5 border-l-2 border-tertiaryLight
                 ${
                   selectedItemIndex === index
                     ? `${darkMode ? 'text-tertiary' : 'text-tertiaryLight'} border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3`
                     : `${darkMode ? 'text-light' : 'text-primary'}`
                 } `}
              >
                {experience.period}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-secondary text-xl">
            {experiences[selectedItemIndex].title}
          </h1>
          <h1 className={`${darkMode ? 'text-tertiary' : 'text-tertiaryLight'} text-xl`}>
            {experiences[selectedItemIndex].company}
          </h1>
          <p className={`${darkMode ? 'text-light' : 'text-primary'} text-lg`}>
            {(experiences[selectedItemIndex].description || []).map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
