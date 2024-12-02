import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/Header";
import About from "./About";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Footer from "./Footer";
import Intro from "./Intro";
import LeftSider from "./LeftSider";
import Projects from "./Projects";

function Home() {
  const [ darkMode, setDarkMode ] = useState(true);
  const { portfolioData } = useSelector((state) => state.root);
  return (
    <div>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />

      {portfolioData && (
        <div
          className={`${darkMode ? "bg-primary" : "bg-light"} px-40 sm:px-5`}
        >
          <Intro darkMode={darkMode}/>
          <About darkMode={darkMode}/>
          <Experiences darkMode={darkMode}/>
          <Projects darkMode={darkMode}/>
          <Contact darkMode={darkMode}/>
          <Footer darkMode={darkMode}/>
          <LeftSider darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
      )}
    </div>
  );
}

export default Home;
