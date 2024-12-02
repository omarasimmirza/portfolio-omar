import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Projects({darkMode}) {
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const { portfolioData } = useSelector((state) => state.root);
  const { projects } = portfolioData;

  return (
    <div>
      <SectionTitle title="Projects" />
      <div className="flex py-10 gap-10 sm:flex-col">
        <div className="flex flex-col gap-10 w-1/2 sm:flex-row sm:overflow-x-scroll sm:w-full">
          {projects.map((project, index) => (
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
                     ? `${
                         darkMode ? "text-tertiary" : "text-tertiaryLight"
                       } border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3`
                     : `${darkMode ? "text-light" : "text-primary"}`
                 } `}
              >
                {project.title}
              </h1>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-10 sm:flex-col">
          <lottie-player
            key={selectedItemIndex}
            src={projects[selectedItemIndex].image}
            background="transparent"
            speed="1"
            autoplay
            loop
            style={{ maxWidth: "350px" }}
          ></lottie-player>
          <div className="flex flex-col gap-5">
            <h1 className="text-secondary text-xl">
              {projects[selectedItemIndex].title}
            </h1>
            <p className={`${darkMode ? 'text-light' : 'text-primary'} text-lg`}>
              {(projects[selectedItemIndex].description || []).map(
                (point, index) => (
                  <li key={index}>{point}</li>
                )
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
