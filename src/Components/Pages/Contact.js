import React, { useState } from 'react';
import '../Styles/Contact.css';
import axios from 'axios';

import { validateEmail } from '../../utils/helpers';

function Contact() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

const handleFormSubmit = async (e) => {
  e.preventDefault();
  if (!validateEmail(email)) {
    alert("Please enter a valid email address");
    return;
  };

  try {
      await axios.post('https://react-portfolio-u34j.onrender.com/', {
      userName,
      email, 
      message  
    });
    alert('Your message has been sent!');
    setUserName("");
    setMessage("");
    setEmail("");
  } catch (error) {
    console.error('There was a problem sending the message:', error);
    alert('There was a problem sending the message. Please try again later.');
  }
  };

  return (
    <section id="reach-out" className="contact">
      <div className="flex-row">
        <h2 className="section-title secondary-border">Contact me</h2>
      </div>
      <div >
        <div className="contact-info">         
            <a href="https://github.com/Alien-oyi" className='github'>
              My Github
            </a>
            <a href="https://www.linkedin.com/in/jimmy-dai-68a0ba270/" className='linkedin'>
                My Linkedin
            </a>
        </div>

        <div className="contact-form">
          <h3>Leave a message</h3>
          <form className="form">
            <label htmlFor="contact-name">Your Name</label>
            <input
              value={userName}
              name="userName"
              onChange={handleInputChange}
              type="text"
              id="contact-name"
              placeholder="Your Name"
            />

            <label htmlFor="contact-email">Your Email</label>
            <input
              value={email}
              name="email"
              onChange={handleInputChange}
              type="email"
              id="contact-email"
              placeholder="Your Email"
            />

            <label htmlFor="contact-message">Message</label>
            <textarea
              value={message}
              name="message"
              onChange={handleInputChange}
              type="message"
              id="contact-message"
              placeholder="Leave Your Message"
            />
            <button type="button" onClick={handleFormSubmit}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}


export default Contact;