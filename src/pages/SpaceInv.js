import './pages.css';
import React from 'react';
import Sidebar2 from '../components/Sidebar2';
import ContactMe from '../components/ContactMe';
import BackToTopButton from '../components/BackToTopButton';
import SIMM from '../../src/assets/SIMM.png';
import SIW from '../../src/assets/SIW.png';
import SIB from '../../src/assets/SIB.png';

function spaceinv() {
  return (
    <div className="app-container">
      <Sidebar2 />
      <div className="content-container">
        <div className="content-item">
          <div className="text">
            <h2>Space Invaders</h2>
            <p>
            Space Invaders is a classic arcade video game where players control a spaceship at the bottom of the screen, tasked with shooting down waves of descending alien invaders while avoiding their projectiles.
            The game is endless and so the players are aiming to survive as many waves as possible. There are also difficulty settings such as removing shields and adding a boss level.
            </p>
          </div>
          <div className="image">
            <img src={SIMM} alt="Space Invaders Main Menu" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Waves of Aliens</h2>
            <p>
              Waves of aliens are invading from space! Hurry and defend Earth before it is too late.
            </p>
          </div>
          <div className="image">
            <img src={SIW} alt="Space Invaders Waves" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>The Boss</h2>
            <p>
              The leader of the aliens has arrived! Hold it off before Earth is destroyed.
            </p>
          </div>
          <div className="image-container">
            <div className="image">
              <img src={SIB} alt="Space Invaders Boss" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
            </div>
          </div>
        </div>
        <ContactMe />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default spaceinv;
