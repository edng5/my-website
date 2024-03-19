// ContactMe.js
import React from 'react';
import { LinkedIn, GitHub, Email } from '@mui/icons-material';

const ContactMe = () => {
  return (
    <section id="contact" className="section">
      <h2 className="section-heading">Contact</h2>
      <div className="contact-content">
        <ul className="social-links">
          <li>
            <a href="https://www.linkedin.com/in/edng5" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="small" style={{ color: '#333' }} />
              <span>https://www.linkedin.com/in/edng5</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/edng5" target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="small" style={{ color: '#333' }} />
              <span>https://github.com/edng5</span>
            </a>
          </li>
          <li>
            <a href="mailto:edwardk.ng@gmail.com">
              <Email fontSize="small" style={{ color: '#333' }} />
              <span>edwardk.ng@gmail.com</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default ContactMe;