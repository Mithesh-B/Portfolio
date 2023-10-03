import React from "react";
import { useEffect, useRef, useState } from "react";
import "./projects.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PublicIcon from "@mui/icons-material/Public";
import LaptopRoundedIcon from "@mui/icons-material/LaptopRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import KeyboardArrowUpRoundedIcon from "@mui/icons-material/KeyboardArrowUpRounded";
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  const projectRefs = useRef([]);
  const imageRefs = useRef([]);
    const [showMoreProjects, setShowMoreProjects] = useState(false);

    const toggleProjects = () => {
      setShowMoreProjects(!showMoreProjects);
    };

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((project, index) => {
        const projectTop = project.offsetTop;
        const imageTop = imageRefs.current[index].offsetTop;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > projectTop + 100) {
          project.classList.add("appear");
        }

        if (scrollTop + windowHeight > imageTop + 100) {
          imageRefs.current[index].classList.add("appear");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="projects">
      <h1 ref={ref} className="project_title">
        Projects I've worked on
      </h1>
      <div className="mobile">
        <div className="projectstop p1">
          <div className="project" ref={(el) => (projectRefs.current[0] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 React.js</div>
                <div className="one">02 Redux toolkit</div>
                <div className="two">03 Strapi CMS</div>
                <div className="three">04 SCSS</div>
              </div>
              <LaptopRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p rev">
              Starzzy.
            </h1>

            <div className="description">
              An e-commerce website built with React for frontend and strapi
              headless CMS for creating REST API and backend content management.
              Global state management is handled by redux toolkit.
              Unfortunately, a live link is not available due to the high costs
              of CMS hosting.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="https://github.com/Mithesh-B/Starzzy"
                target="_blank"
              >
                <GitHubIcon />
                Source
              </a>
              <a
                className="demo"
                href="https://youtu.be/0vueQ9KV-JM"
                target="_blank"
              >
                <YouTubeIcon />
                Demo
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[0] = el)}>
            <img
              loading="lazy"
              src="../project1.webp"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>
        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[1] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 React.js</div>
                <div className="one">02 Express.js</div>
                <div className="two">03 MongoDB</div>
                <div className="two">04 JWT</div>
              </div>
              <DevicesRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
              Credit Express.
            </h1>
            <div className="description">
              Credit Express is a web application for managing loans. It allows
              registered users to avail loans and administrators to approve
              loans. Users can fulfill loans on a weekly term.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="https://github.com/Mithesh-B/CreditExpress"
                target="_blank"
              >
                <GitHubIcon />
                Source
              </a>
              <a
                className="demo"
                href="https://creditexpress.pages.dev/"
                target="_blank"
              >
                <PublicIcon />
                Live link
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[1] = el)}>
            <img
              loading="lazy"
              src="../project6.webp"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>
        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[2] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 HTML5</div>
                <div className="zero">02 CSS</div>
                <div className="zero">03 JavaScript</div>
                <div className="zero">04 Prism.js</div>
              </div>
              <DevicesRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 data-scroll data-scroll-speed="0.02" className="title_p">
              Gradart.
            </h1>
            <div className="description">
              GradArt is a responsive CSS color gradient generator that enables
              users to easily create custom gradients by providing a CSS code
              snippet. It includes gradient live preview, 8 gradient angles, and
              2 color gradient options and a gradient randomizer.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="https://github.com/Mithesh-B/Gradart"
                target="_blank"
              >
                <GitHubIcon />
                Source
              </a>
              <a
                className="demo"
                href="https://mithesh-b.github.io/Gradart/"
                target="_blank"
              >
                <PublicIcon />
                Live link
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[2] = el)}>
            <img
              loading="lazy"
              src="../project2.webp"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>
        <div className="projectstop">
          <div className="project" ref={(el) => (projectRefs.current[3] = el)}>
            <div style={{ display: "flex", gap: "2rem" }}>
              <div className="techstack">
                <div className="zero">01 JavaScript</div>
                <div className="one">02 Node.js</div>
                <div className="two">03 MongoDB</div>
                <div className="three">04 Leaflet.js</div>
              </div>
              <DevicesRoundedIcon
                style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
              />
            </div>
            <h1 className="title_p">Safe walk.</h1>

            <div className="description">
              Safe Walk is a website that allows citizens to log and report
              safety issues and problems encountered in public areas which will
              then generate heatmaps and markers on map so people can make
              informed decisions while walking alone.
            </div>
            <br />
            <div className="links">
              <a
                className="source"
                href="https://github.com/Mithesh-B/Safe_Walk"
                target="_blank"
              >
                <GitHubIcon />
                Source
              </a>
              <a
                className="demo"
                href="https://mithesh-b.github.io/Safe_Walk/"
                target="_blank"
              >
                <PublicIcon />
                Live link
              </a>
            </div>
          </div>
          <div className="image" ref={(el) => (imageRefs.current[3] = el)}>
            <img
              loading="lazy"
              src="../project3.webp"
              alt="project img"
              fetchpriority="low"
            />
          </div>
        </div>
        {showMoreProjects && (
          <>
            <div className="projectstop">
              <div
                className="project appear"
                ref={(el) => (projectRefs.current[4] = el)}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "2rem",
                    justifyContent: "space-between",
                  }}
                >
                  <div className="techstack">
                    <div className="zero">01 HTML5</div>
                    <div className="one">02 CSS</div>
                    <div className="two">03 JavaScript</div>
                    <div className="three">04 PHP</div>
                  </div>
                  <DevicesRoundedIcon
                    style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
                  />
                </div>
                <h1 data-scroll data-scroll-speed="0.02" className="title_p">
                  Prints.
                </h1>
                <div className="description">
                  Oh, this one's just a landing page. It doesn't really do much
                  apart from showcasing my frontend and design skills. The page
                  is about buying and selling your digital art and customizing
                  it as wall posters.
                </div>
                <br />
                <div className="links">
                  <a
                    className="source"
                    href="https://github.com/Mithesh-B/prints"
                    target="_blank"
                  >
                    <GitHubIcon />
                    Source
                  </a>
                  <a
                    className="demo"
                    href="https://mithesh-b.github.io/prints/"
                    target="_blank"
                  >
                    <PublicIcon />
                    Live link
                  </a>
                </div>
              </div>
              <div
                className="image appear"
                ref={(el) => (imageRefs.current[4] = el)}
              >
                <img
                  loading="lazy"
                  src="../project5.webp"
                  alt="project img"
                  fetchpriority="low"
                />
              </div>
            </div>
            <div className="projectstop">
              <div
                className="project appear"
                ref={(el) => (projectRefs.current[5] = el)}
              >
                <div style={{ display: "flex", gap: "2rem" }}>
                  <div className="techstack">
                    <div className="zero">01 React.js</div>
                    <div className="one">02 Next.js</div>
                    <div className="two">03 SCSS</div>
                    <div className="two">04 Chart.js</div>
                  </div>
                  <LaptopRoundedIcon
                    style={{ color: "#e2e2e2c2", fontSize: "1.5rem" }}
                  />
                </div>
                <h1 data-scroll data-scroll-speed="0.02" className="title_p">
                  Board.
                </h1>
                <div className="description">
                  Board is a modern and user-friendly desktop dashboard
                  application built with React and Next.js. It uses interactive
                  line and pie charts to display dummy data. The dashboard
                  fetches data from an API.
                </div>
                <br />
                <div className="links">
                  <a
                    className="source"
                    href="https://github.com/Mithesh-B/Board"
                    target="_blank"
                  >
                    <GitHubIcon />
                    Source
                  </a>
                  <a
                    className="demo"
                    href="https://board-ochre.vercel.app/"
                    target="_blank"
                  >
                    <PublicIcon />
                    Live link
                  </a>
                </div>
              </div>
              <div
                className="image appear"
                ref={(el) => (imageRefs.current[5] = el)}
              >
                <img
                  loading="lazy"
                  src="../project4.webp"
                  alt="project img"
                  fetchpriority="low"
                />
              </div>
            </div>
          </>
        )}
        <div className="btn-container">
          <div className="btn-content">
            <div onClick={toggleProjects} className="show-more">
              {showMoreProjects ? "View less" : "View more"}
            </div>
            {showMoreProjects ? (
              <KeyboardArrowUpRoundedIcon
                onClick={toggleProjects}
                className="icon"
                
              />
            ) : (
              <KeyboardArrowDownRoundedIcon
                className="icon"
                onClick={toggleProjects}
                
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Projects;
