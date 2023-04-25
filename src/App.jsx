import React from 'react'
import Nav from './Nav'
import AboutMe from './AboutMe'
import TechSkills from './TechSkills'
import Projects from './Projects'
import Contact from './Contact'
import './app.scss'
import{useState, useEffect, useRef} from 'react'



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
