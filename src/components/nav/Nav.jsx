import React from 'react'
import './nav.scss'

const Nav = ({skill, project}) => {

  return (
    <nav className="navigation">
      <div className="left">
        <div className="name">
          <img className="mainlogo" src="../image.png" alt="" />
        </div>
      </div>
      <div className="right">
        <a
          className="reverse"
          href="https://drive.google.com/file/d/1KB5p1UdNYjQ3vpNkPWhWiYDsl4QBgZJJ/view?usp=drive_link"
          target="_blank"
        >
          <span className="color1">1. </span>
          <span className="resume">Resume</span>
        </a>
        <div className="reverse">
          <span className="color2">2. </span>
          <span
            onClick={() => skill.current.scrollIntoView({ behavior: "smooth" })}
            className="skills"
          >
            Skills
          </span>
        </div>
        <div className="reverse">
          <span className="color3">3. </span>
          <span
            onClick={() =>
              project.current.scrollIntoView({ behavior: "smooth" })
            }
            className="navprojects"
          >
            Projects
          </span>
        </div>
      </div>
    </nav>
  );
}

export default Nav
