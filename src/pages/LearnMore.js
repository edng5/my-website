// LearnMore.js
import './pages.css';
import React from 'react';
import Sidebar2 from '../components/Sidebar2';
import ContactMe from '../components/ContactMe';
import BackToTopButton from '../components/BackToTopButton';
import collage from '../assets/collage.png';

function LearnMore() {
  return (
    <div className="app-container">
    <Sidebar2 />
    <div className="content-container">
    <div className="about-me-container">
    <h1>Hi, I'm Edward</h1>
      <p>
        I graduated from Queen's University studying Computer Science. I have been working on a start-up project, SpeakEase, for a year with my
        team on inQUbate. Together we pitched at Camp QMIND, winning 1st for that competition. We have also showcased our app at CUCAI, the largest
        student AI conference in Canada. I am a passionate developer, putting a lot of effort in all my projects to try and make something remarkable.
      </p>
      <p>
        Asides from programming, my hobbies include basketball, cooking and gaming. I have played basketball since I was 10 years old, starting in house leagues
        and working my way up to playing on University of Toronto's Men's D-League Team. I also had a chance to represent BMO in the IBM League, playing at 
        the home of the Toronto Raptors.
      </p>
      <p>
        Lastly, my most recent hobby is cooking. After moving away for school, I have taken up cooking and started experimenting with different recipes.
        I can cook a few different cuisines, but I mainly stick to Western and Chinese food.
      </p>
      <img src={collage} alt="Collage of my Hobbies" className="about-me-image" style={{ maxWidth: '950px' }}/>
    </div>
    <ContactMe />
    <BackToTopButton />
    </div>
  </div>
  );
}

export default LearnMore;