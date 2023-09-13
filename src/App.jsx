import React from "react";
import Nav from "./components/nav/Nav";
import AboutMe from "./components/about/AboutMe";
import TechSkills from "./components/skills/TechSkills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import "./app.scss";
import { useState, useEffect, useRef } from "react";
import "../node_modules/locomotive-scroll/bundled/locomotive-scroll.css";
import LocomotiveScroll from "locomotive-scroll";

let locomotiveScroll;

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(
    window.innerWidth <= 1189
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobileOrTablet(window.innerWidth <= 1189);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [window.innerWidth]);

  useEffect(() => {
    if (!isMobileOrTablet) {
      locomotiveScroll = new LocomotiveScroll();
    } else if (locomotiveScroll) {
      window.location.reload();
    }
  }, [isMobileOrTablet]);

  useEffect(() => {
    // Simulate a delay
    setTimeout(() => {
      setIsLoaded(true);
    }, 200); // Adjust the delay as needed
  }, []);

  const contact = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);

  return (
    <div className={`fade-in-container ${isLoaded ? "loaded" : ""}`}>
      <Nav skill={skills} project={projects} />
      <AboutMe contact={contact} />
      <TechSkills ref={skills} />
      <Projects ref={projects} />
      <Contact ref={contact} />
    </div>
  );
};

export default App;
