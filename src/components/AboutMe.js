import React from 'react';
import myImage from '../../src/assets/Edward_Ng.png'; // Import your image
import { LinkedIn, GitHub, Email } from '@mui/icons-material';
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';


const AboutMe = () => {
  return (
    <div id="about-me" className="about-me">
    <div className="about-me-image">
          <img src={myImage} alt="Edward Ng" />
          <div className="social-icons">
          <a href="https://www.linkedin.com/in/edng5" target="_blank" rel="noopener noreferrer">
              <LinkedIn fontSize="medium" style={{ color: '#333' }} />
            </a>
            <a href="https://github.com/edng5" target="_blank" rel="noopener noreferrer">
              <GitHub fontSize="medium" style={{ color: '#333' }} />
            </a>
            <a href="mailto:edwardk.ng@gmail.com">
              <Email fontSize="medium" style={{ color: '#333' }} />
            </a>
          </div>
        </div>
      <div className="about-me-content">
        <div className="about-me-text">
          <h1>Edward Ng</h1>
          <p>As a junior software developer, I possess professional experience in machine learning and AWS, complemented by a passion for technology and a proactive approach to personal projects. While my primary focus lies in backend development, utilizing Node.js, Express.js, and AWS services, I am adept at full-stack development, proficient in React for frontend work. With a background in machine learning, I bring expertise in data analysis and modeling, while my experience with AWS ensures effective utilization of cloud resources. Committed to continuous learning, I am eager to contribute my adaptable skills and enthusiasm to any project or team, fostering innovation and driving impactful solutions.</p>
          <p>I am currently seeking full-time Software Developer and Machine Learning Developer roles. Please reach out if you are interested! </p>
            <Link to="/about-me"> <button>Learn More</button> </Link>
        </div>
        
      </div>
    </div>
  );
}

export default AboutMe;