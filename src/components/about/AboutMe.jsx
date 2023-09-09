import React from "react";
import "./aboutme.scss";

const AboutMe = ({contact}) => {
  
  return (
    <div className="about">
      <div className="left">
        <div className="circle2"></div>
        <div className="circle3"></div>
        <h1 data-scroll data-scroll-speed="0.2" className="welcome">
          welcome to my <mark className="mark1"> workplace</mark>
          <mark className="mark2">.</mark>
        </h1>
        <button
          data-scroll
          data-scroll-speed="0.1"
          onClick={() => contact.current.scrollIntoView({ behavior: "smooth" })}
        >
          &lt;build me a website/&gt;
        </button>
      </div>
      <div data-scroll data-scroll-speed="0.4" className="right">
        <div className="container">
          <img
            data-scroll
            data-scroll-speed="0.1"
            className="laptop"
            src="../me.png"
            alt="a laptop"
          />
        </div>
        <div className="desc">
          Hey there! This is Mithesh! As a <span>full-stack developer</span>{" "}
          with a passion for <span> UI design,</span> I'm thrilled to have you
          here.
          <br />
          <br />I strive to deliver top-quality work that is both visually
          stunning and functional. I have experience building{" "}
          <span>responsive websites, </span>
          creating <span>intuitive user interfaces,</span> and{" "}
          <span>optimizing website performance,</span> and I believe that good
          design is an essential component of great website.
          <br />
          <br />
          Thank you for stopping by, and I hope you enjoy exploring my
          portfolio!
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
