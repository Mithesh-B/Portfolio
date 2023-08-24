import React from 'react';
import { useEffect, useRef } from 'react';
import './projects.scss';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PublicIcon from '@mui/icons-material/Public';
import { forwardRef } from 'react'



const Projects =forwardRef((props, ref) => {

  const projectRefs = useRef([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      projectRefs.current.forEach((project, index) => {
        const projectTop = project.offsetTop;
        const imageTop = imageRefs.current[index].offsetTop;
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;

        if (scrollTop + windowHeight > projectTop + 100) {
          project.classList.add('appear');
        }

        if (scrollTop + windowHeight > imageTop + 100) {
          imageRefs.current[index].classList.add('appear');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <div className='projects'> 
    <h1 ref={ref} className='project_title'>Projects I've worked on</h1>
    <div className='mobile'>
      <div className='projectstop'>
        <div className='project' ref={(el) => projectRefs.current[0] = el}>
        <div className='zero'>01 React.js</div>
          <div className='one'>02 Redux toolkit</div>
          <div className='two'>03 Strapi CMS</div>
          <div className='three'>04 SCSS</div>
          <h1 className='title_p'>Starzzy.</h1>
          <div className='description'>
            An e-commerce website built with React for frontend and strapi headless CMS for creating REST API and backend
            content management. Global state management is handled by redux toolkit.
          </div>
          <br />
          <div className='links'>
            <a className='source' href='https://github.com/Mithesh-B/Starzzy' target="_blank">
              <GitHubIcon/>Source
            </a>
            <a className='demo' href='https://youtu.be/0vueQ9KV-JM' target='_blank'><YouTubeIcon/>Demo</a>
          </div>
        </div>
        <div className="image" ref={(el) => imageRefs.current[0] = el}>
          <img src="../project1.jpg" alt="a laptop"/>
        </div>
      </div>
      <div className='projectstop'>
        <div className='project' ref={(el) => projectRefs.current[1] = el}>
        <div className='zero'>01 HTML</div>
          <div className='zero'>02 CSS</div>
          <div className='zero'>03 JavaScript</div>
          <div className='zero'>04 Prism.js</div>
          <h1 className='title_p'>Gradart.</h1>
          <div className='description'>
          GradArt is a responsive CSS color gradient generator that enables users to easily create custom gradients by providing a CSS code snippet. It includes gradient live preview, 8 gradient angles, and 2 color gradient options and a gradient randomizer.
          </div>
          <br />
          <div className='links'>
            <a className='source' href='https://github.com/Mithesh-B/Gradart' target="_blank">
              <GitHubIcon/>Source
            </a>
            <a className='demo' href='https://mithesh-b.github.io/Gradart/' target='_blank'><PublicIcon/>Live link</a>
          </div>
        </div>
        <div className="image" ref={(el) => imageRefs.current[1] = el}>
        <img src="../project2.jpg" alt="a laptop"/>
        </div>
      </div>
      <div className='projectstop'>
        <div className='project' ref={(el) => projectRefs.current[2] = el}>
        <div className='zero'>01 JavaScript</div>
          <div className='one'>02 Node.js</div>
          <div className='two'>03 MongoDB</div>
          <div className='three'>04 Leaflet.js</div>
          <h1 className='title_p'>Safe walk.</h1>
          <div className='description'>
          Safe Walk is a website that allows citizens to log and report safety issues and problems encountered in public areas which will then generate heatmaps and markers on map so people can make informed decisions while walking alone.
          </div>
          <br />
          <div className='links'>
            <a className='source' href='https://github.com/Mithesh-B/Safe_Walk' target="_blank">
              <GitHubIcon/>Source
            </a>
            <a className='demo' href='https://mithesh-b.github.io/Safe_Walk/' target='_blank'><PublicIcon/>Live link</a>
          </div>
        </div>
        <div className="image" ref={(el) => imageRefs.current[2] = el}>
        <img src="../project3.jpg" alt="a laptop"/>
        </div>
      </div>
      <div className='projectstop'>
        <div className='project' ref={(el) => projectRefs.current[3] = el}>
        <div className='zero'>01 React.js</div>
          <div className='one'>02 Next.js</div>
          <div className='two'>03 SCSS</div>
          <div className='two'>04 Chart.js</div>
          <h1 className='title_p'>Board.</h1>
          <div className='description'>
          Board is a modern and user-friendly desktop dashboard application built with React and Next.js. It uses interactive line and pie charts to display dummy data. The dashboard fetches data from an API. 
          </div>
          <br />
          <div className='links'>
            <a className='source' href='https://github.com/Mithesh-B/Board' target="_blank">
              <GitHubIcon/>Source
            </a>
            <a className='demo' href='https://board-ochre.vercel.app/' target='_blank'><PublicIcon/>Live link</a>
          </div>
        </div>
        <div className="image" ref={(el) => imageRefs.current[3] = el}>
        <img src="../project4.png" alt="a laptop"/>
        </div>
      </div>

    </div>
    </div>
  );
});

export default Projects;
