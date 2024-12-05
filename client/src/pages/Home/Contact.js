import React from "react";
import { useSelector } from "react-redux";
import SectionTitle from "../../components/SectionTitle";

function Contact({darkMode}) {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  return (
    <div>
      <SectionTitle title="Say Hello" />

      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col">
          <p className={`${darkMode ? 'text-tertiary' : 'text-tertiaryLight'} text-3xl mt-[1rem]`}>{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5 text-lg mt-[1rem]" key={key}>
                  <span className={`${darkMode ? 'text-tertiary' : 'text-tertiaryLight'}`}>{key} : </span>
                  <span className={`${darkMode ? 'text-tertiary' : 'text-tertiaryLight'}`}>{contact[key]}</span>
                </p>
              )
          )}
          <p className={`${darkMode ? 'text-tertiary' : 'text-tertiaryLight'} text-3xl mt-[1rem]`}>{"}"}</p>
        </div>
        <div className="h-[600px]">
          <lottie-player
            src="https://lottie.host/9fe8c76d-d9af-46fb-ad9b-240e187f2300/5JMawRGP6a.json"
            background="transparent"
            speed="1"
            autoplay
            loop
          ></lottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact;
