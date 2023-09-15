import React from "react";
import "./techskills.scss";
import { forwardRef } from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SwipeLeftAltRoundedIcon from "@mui/icons-material/SwipeLeftAltRounded";
import SwipeRightAltRoundedIcon from "@mui/icons-material/SwipeRightAltRounded";


const TechSkills = forwardRef((props, ref) => {
  return (
    <div className="hover">
      <div className="title2" ref={ref}>
        Technical Skills
      </div>

      <div className="tech">
        <div data-scroll data-scroll-speed="0.15" className="grid grid1">
          <div className="skill-title">
            <div className="html">HTML</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                learn more
              </a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            HTML is a standard markup language used to create and structure
            content on the web.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="js">JavaScript</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                learn more
              </a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            JavaScript is a programming language used for creating interactive
            and dynamic web pages. It is widely used for both client-side and
            server-side development.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="node">Node.js</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://nodejs.org/en">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Node.js is an open-source, cross-platform JavaScript runtime
            environment that allows developers to run JavaScript code outside of
            a web browser, commonly used for building server-side applications.
          </div>
        </div>

        <div data-scroll data-scroll-speed="0.15" className="grid grid1">
          <div className="skill-title">
            <div className="css">CSS</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">
                learn more
              </a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            It is a stylesheet language used for describing the presentation of
            a document written in HTML, including colors, fonts, layouts, and
            animations.
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="grid grid1">
          <div className="skill-title">
            <div className="react">React.js</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://react.dev/">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            React.js is an open-source JavaScript library used for building user
            interfaces. It allows developers to create reusable UI components
            and efficiently manage changes to the UI based on data updates.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="mongo">MongoDB</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://www.mongodb.com/">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            MongoDB is a non-relational document database that provides support
            for JSON-like storage. The MongoDB database has a flexible data
            model that enables you to store unstructured data.
          </div>
        </div>
        <div className="grid grid1">
          <div className="skill-title">
            <div className="redux">Redux Toolkit</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://redux-toolkit.js.org/">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Redux Toolkit is an official package from the Redux team that
            simplifies common Redux use cases with utilities for store setup,
            creating reducers, and handling immutable updates.
          </div>
        </div>
        <div data-scroll data-scroll-speed="0.1" className="grid grid1">
          <div className="skill-title">
            <div className="strapi">Strapi CMS</div>
            <div
              style={{
                display: "flex",
                gap: "5px",
                backgroundColor: "#1a1a1a00",
              }}
            >
              <a href="https://strapi.io/">learn more</a>
              <OpenInNewIcon style={{ color: "#e2e2e2c2", fontSize: "1rem" }} />
            </div>
          </div>
          <div className="body">
            Strapi is a headless CMS that allows developers to create, manage,
            and distribute content for their web applications. It provides a
            admin panel and a RESTful API for retrieving and delivering content.{" "}
          </div>
        </div>
      </div>
      <div className="mobilescroll" style={{ textAlign: "center" }}>
        {" "}
        <SwipeLeftAltRoundedIcon
          style={{ color: "#e2e2e2c2", fontSize: "1.8rem" }}
        />
        <p style={{ fontSize: "0.6rem", fontWeight: "500" }}>SCROLLABLE</p>
        <SwipeRightAltRoundedIcon
          style={{ color: "#e2e2e2c2", fontSize: "1.8rem" }}
        />
      </div>
    </div>
  );
});

export default TechSkills;
