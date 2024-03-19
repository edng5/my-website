import '.././styles.css';
import '.././App.css';
import React from 'react';
import Sidebar from '../components/Sidebar';
import AboutMe from '../components/AboutMe';
import Projects from '../components/Projects';
import Resume from '../components/Resume';
import Skills from '../components/Skills';
import ContactMe from '../components/ContactMe';
import BackToTopButton from '../components/BackToTopButton';


function Home() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="content-container">
      <AboutMe />
      <Resume />
      <Projects />
      <Skills />
      <ContactMe />
      <BackToTopButton />
      </div>
    </div>
  );
}

export default Home;
