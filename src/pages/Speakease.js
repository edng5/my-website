import './pages.css';
import React from 'react';
import Sidebar2 from '../components/Sidebar2';
import ContactMe from '../components/ContactMe';
import BackToTopButton from '../components/BackToTopButton';
import speakease from '../../src/assets/speakease-icon.png';
import speakease4 from '../../src/assets/speakease4.png';
import speakease2 from '../../src/assets/speakease2.png';
import speakease3 from '../../src/assets/speakease3.png';

function Speakease() {
  return (
    <div className="app-container">
      <Sidebar2 />
      <div className="content-container">
        <div className="content-item">
          <div className="text">
            <h2>SpeakEase</h2>
            <p>
              SpeakEase is an innovative AI language learning application designed to enhance conversational skills through the guidance of our friendly virtual companion, Easso.
              My team and I leveraged advanced third-party APIs to help generate and process natural language. The tech stack consists of React Native, Node.JS and Express.JS.
            </p>
          </div>
          <div className="image">
            <img src={speakease} alt="SpeakEase Logo" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Easso</h2>
            <p>
              Easso is a friendly virtual companion that lives in your mobile device. Users can freely chat with Easso on a diverse number of topics, including sharing jokes, asking for solutions to a problem, or even just to rant. Easso will be there for you.
            </p>
          </div>
          <div className="image">
            <img src={speakease4} alt="SpeakEase Chat" style={{ maxWidth: '600px', maxHeight: '800px' }}/>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Speech-to-Speech</h2>
            <p>
              Users engage in speech-to-speech interactions with Easso, fostering comfort and confidence in speaking. With natural language generation and processing, we've created a supportive environment where individuals can independently hone their speaking abilities without the anxiety of public speaking.
            </p>
          </div>
          <div className="image-container">
            <div className="image">
              <img src={speakease2} alt="SpeakEase Response" style={{ maxWidth: '600px', maxHeight: '800px' }}/>
            </div>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Speech Assessment</h2>
            <p>
              Following each conversation, Easso offers valuable feedback and suggestions on grammar, pronunciation, and sentence construction. Our goal is to empower users to articulate themselves effectively and cultivate a sense of assurance in their speech.
            </p>
          </div>
          <div className="image">
            <img src={speakease3} alt="SpeakEase Assessment"  style={{ maxWidth: '600px', maxHeight: '800px' }}/>
          </div>
        </div>
        <ContactMe />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default Speakease;
