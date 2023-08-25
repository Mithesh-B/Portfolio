import React, { useEffect, useState } from "react";
import "./aboutme.scss";

const AboutMe = ({contact}) => {
  const [text, setText] = useState("");

  const letters = "abcdefghijklmnopqrstuvwxyz";
  let interval = null;
  const originalText = "Welcome to my workplace.";
  let iteration = 0;

  useEffect(() => {
    document.querySelector("welcome");
    setText(originalText);

    clearInterval(interval);

    interval = setInterval(() => {
      setText(
        originalText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return originalText[index];
            }

            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= originalText.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 25);

    return () => clearInterval(interval);
  }, [originalText]);

  return (
    <div className="about">
      <div className="left">
        <div className="circle2"></div>
        <div className="circle3"></div>
        <h1 className="welcome" data-value={originalText}>
          {text}
        </h1>
        <button onClick={() =>contact.current.scrollIntoView({behavior: 'smooth'})}>&lt;build me a website/&gt;</button>
      </div>
      <div className="right">
        <div className="container">
          <img className="laptop" src="../me.png" alt="a laptop" />
          <div className="blinker">
            &gt;<span className="blink">_</span>
          </div>
        </div>
        <div className="desc">
          Hey there! This is Mithesh! As a <span>full-stack developer</span> with a passion
          for <span> UI design,</span> I'm thrilled to have you here.
          <br />
          <br />
          I strive to deliver top-quality work that is both visually stunning
          and functional. I have experience building <span>responsive websites, </span>
          creating <span>intuitive user interfaces,</span> and <span>optimizing website
          performance,</span> and I believe that good design is an essential component
          of great website.
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
