import React from 'react'
import './techskills.scss'
import { forwardRef } from 'react';



const TechSkills =forwardRef((props, ref) => {

  return (
    <div className="hover">
      <div className="title2" ref={ref}>
        Technical Skills:
      </div>
      <div className="tech">
        <div className="grid">
          <div className="html">HTML</div>
          <div className="body">
            HTML is a standard markup language used to create and structure
            content on the web.
          </div>
        </div>
        <div className="grid">
          <div className="js">JavaScript</div>
          <div className="body">
            JavaScript is a programming language used for creating interactive
            and dynamic web pages. It is widely used for both client-side and
            server-side development.
          </div>
        </div>
        <div className="grid">
          <div className="node">Node.js</div>
          <div className="body">
            Node.js is an open-source, cross-platform JavaScript runtime
            environment that allows developers to run JavaScript code outside of
            a web browser, commonly used for building server-side applications.
          </div>
        </div>

        <div className="grid">
          <div className="css">CSS</div>
          <div className="body">
            It is a stylesheet language used for describing the presentation of
            a document written in HTML, including colors, fonts, layouts, and
            animations.
          </div>
        </div>
        <div className="grid">
          <div className="react">React.js</div>
          <div className="body">
            React.js is an open-source JavaScript library used for building user
            interfaces. It allows developers to create reusable UI components
            and efficiently manage changes to the UI based on data updates.
          </div>
        </div>
        <div className="grid">
          <div className="mongo">MongoDB</div>
          <div className="body">
            MongoDB is a non-relational document database that provides support
            for JSON-like storage. The MongoDB database has a flexible data
            model that enables you to store unstructured data.
          </div>
        </div>
        <div className="grid">
          <div className="redux">Redux Toolkit</div>
          <div className="body">
            Redux Toolkit is an official package from the Redux team that
            simplifies common Redux use cases with utilities for store setup,
            creating reducers, and handling immutable updates.
          </div>
        </div>
        <div className="grid">
          <div className="strapi">Strapi CMS</div>
          <div className="body">
            Strapi is a headless CMS that allows developers to create, manage,
            and distribute content for their web applications. It provides a
            admin panel and a RESTful API for retrieving and delivering content.{" "}
          </div>
        </div>
      </div>
    </div>
  );
});

export default TechSkills
