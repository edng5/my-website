import './pages.css';
import React from 'react';
import Sidebar2 from '../components/Sidebar2';
import ContactMe from '../components/ContactMe';
import BackToTopButton from '../components/BackToTopButton';
import speakease from '../../src/assets/speakease-icon.png';

function neos() {
  return (
    <div className="app-container">
      <Sidebar2 />
      <div className="content-container">
        <div className="content-item">
          <div className="text">
            <h2>Template</h2>
            <p>
              Template
            </p>
          </div>
          <div className="image">
            <img src={speakease} alt="Placeholder" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        
        <ContactMe />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default neos;
