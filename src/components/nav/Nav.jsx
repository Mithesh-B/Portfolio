import { useState } from "react";
import React from "react";
import "./nav.scss";

import ArticleRoundedIcon from "@mui/icons-material/ArticleRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import BathroomRoundedIcon from "@mui/icons-material/BathroomRounded";

const Nav = ({ skill, project }) => {
  const [showNavbar, setShowNavbar] = useState(false);

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
  return (
    <nav
      className={`navbar ${showNavbar ? "navbar-mobile" : ""}`}
      style={{
        transition: "all 0.3s ease-in",
      }}
    >
      <div className="container">
        <h1 className="logo">
          m<mark className="mark2">.</mark>
        </h1>
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
                href="https://drive.google.com/file/d/1KB5p1UdNYjQ3vpNkPWhWiYDsl4QBgZJJ/view?usp=drive_link"
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
                <span style={{ marginLeft: "10px" }}>skills</span>
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
                <span style={{ marginLeft: "10px" }}>projects</span>
              </nav>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
