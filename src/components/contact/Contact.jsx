import React, { useState } from 'react';
import './contact.scss'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import axios from 'axios';
import { forwardRef } from 'react'
;


const Contact = forwardRef((props, ref) => {

    const [userName, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();

      if (!userName || !email || !message) {
        alert('Please fill in all fields');
        return;
      }
      axios.defaults.headers.post['Content-Type'] = 'application/json';
      axios.post('https://formsubmit.co/ajax/d2f3596103c0fc6d5c76417e80905c46',{
      name: userName,
      email: email,
      message: message
})
    .then(response => {
      console.log(response);
      setIsSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }) 
    .catch(error => console.log(error));
   
    };
  
    return (
      <div className="contactSection">
        <h1 ref={ref} className="title3">
          Send me a message
        </h1>
        <div className="contact">
          <div className="left">
            <div className="circle"></div>
            <div data-scroll data-scroll-speed="0.02" className="thankyou">
              Thank you for taking the time to check out my portfolio. Feel free
              to contact me if you're interested in hiring me or if you would
              like me to build a product for you.
            </div>
            <div className="links">
              <a href="https://www.linkedin.com/in/mitheshb/" target="_blank">
                <LinkedInIcon style={{ fontSize: 24, padding: 8 }} />
              </a>
              <a href="https://github.com/Mithesh-B" target="_blank">
                <GitHubIcon style={{ fontSize: 24, padding: 8 }} />
              </a>
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name"></label>
                <input
                  placeholder="name"
                  type="text"
                  id="name"
                  name="name"
                  value={userName}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="email"></label>
                <input
                  placeholder="email"
                  type="email"
                  name="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="message"></label>
                <textarea
                  placeholder="message"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button type="submit">
                {isSubmitted ? "Thank you!" : "Submit"}
              </button>
              <div className="copyright">
                © 2023 Mithesh. All rights reserved.
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  });

export default Contact
