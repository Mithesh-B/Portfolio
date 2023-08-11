import React from 'react';
import Nav from './components/nav/Nav';
import AboutMe from './components/about/AboutMe'
import TechSkills from "./components/skills/TechSkills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import './app.scss'
import { useState, useEffect, useRef } from 'react';



const App = () => {

  const contact= useRef(null);
  const skills= useRef(null);
  const projects= useRef(null);

  
  const [coords, setCoords] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoords({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  return (
    <div className='test2'>
      <div
      className='blob'
      style={{
        transform: `translate3d(${coords.x - 870}px, ${coords.y - 500}px, 0)`,
      }}
    ></div>
      <Nav skill={skills} project={projects} />
      <AboutMe contact={contact} />
      <TechSkills ref={skills}/>
      <Projects ref={projects}/>
      <Contact ref={contact}/>
    </div>
  )
}

export default App
