import { useState, useEffect } from "react";
import React from "react";
import "./nav.scss";

import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import BathroomRoundedIcon from "@mui/icons-material/BathroomRounded";

const Nav = ({ skill, project }) => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);

useEffect(() => {
  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const navbar = document.querySelector(".navbar");

    if (currentScrollPos > prevScrollPos) {
      // Scrolling down, hide the navbar
      navbar.style.transform = "translateY(-100%)";
      navbar.classList.remove("navbar-dark"); // Remove darker background
    } else {
      // Scrolling up
      if (currentScrollPos === 0) {
        // At the top, make the navbar transparent
        navbar.classList.remove("navbar-dark");
      } else {
        // Not at the top, show the navbar with a darker background
        navbar.style.transform = "translateY(0)";
        navbar.classList.add("navbar-dark"); // Add darker background
      }
    }

    setPrevScrollPos(currentScrollPos);
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, [prevScrollPos]);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  const handleSkillsClick = () => {
    handleShowNavbar();
    skill.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleProjectsClick = () => {
    handleShowNavbar();
    project.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleReloadClick = () => {
    
    window.location.reload(); // Reload the page
  };
  return (
    <nav
      className={`navbar ${showNavbar ? "navbar-mobile" : ""}`}
      style={{
        transition: "all 0.3s ease-in",
      }}
    >
      <div className="container">
        <a>
          <h1 onClick={handleReloadClick} className="logo">
            m<mark className="mark2">.</mark>
          </h1>
        </a>
        <div
          className={`center ${showNavbar ? "clicked" : ""}`}
          onClick={handleShowNavbar}
        >
          <div></div>
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <a
                onClick={handleShowNavbar}
                className="reverse"
                href="https://drive.google.com/file/d/1P17hK1usPetP6ADo29vHA8TMgBCENQqw/view?usp=drive_link"
                target="_blank"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ArticleRoundedIcon
                  fontSize="medium"
                  style={{ color: "#a2ffc6" }}
                />
                <span style={{ marginLeft: "10px" }}>resume</span>
              </a>
            </li>
            <li>
              <nav
                onClick={handleSkillsClick}
                style={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <AnalyticsRoundedIcon
                  fontSize="medium"
                  style={{ color: "#e6accb" }}
                />{" "}
                <a style={{ marginLeft: "10px" }}>skills</a>
              </nav>
            </li>
            <li>
              <nav
                onClick={handleProjectsClick}
                style={{ display: "flex", alignItems: "center" }}
              >
                {" "}
                <BathroomRoundedIcon
                  fontSize="medium"
                  style={{ color: "#b9e5ff" }}
                />{" "}
                <a style={{ marginLeft: "10px" }}>projects</a>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
