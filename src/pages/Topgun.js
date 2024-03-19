import './pages.css';
import React from 'react';
import Sidebar2 from '../components/Sidebar2';
import ContactMe from '../components/ContactMe';
import BackToTopButton from '../components/BackToTopButton';
import TGMM from '../../src/assets/TGMM.jpg';
import mission1 from '../../src/assets/mission1.png';
import mission2 from '../../src/assets/mission2.png';
import mission3 from '../../src/assets/mission3.png';
import upgrades from '../../src/assets/upgrades1.png';

function topgun() {
  return (
    <div className="app-container">
      <Sidebar2 />
      <div className="content-container">
        <div className="content-item">
          <div className="text">
            <h2>Top Gun</h2>
            <p>
              Top Gun is a flight combat simulation game where the player completes multiple missions against waves of fighter jets to win the war.
              There are multiple levels, each with its own objectives. The player has to progress through all the levels to complete the game.
            </p>
          </div>
          <div className="image">
            <img src={TGMM} alt="Top Gun Main Menu" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Upgrades</h2>
            <p>
              As the user progresses, they will earn money based on their performance in each level. The player's jet is upgradeable using this in-game currency
              to give the player a better chance as the missions increase in difficulty.
            </p>
          </div>
          <div className="image-container">
            <div className="image">
              <img src={upgrades} alt="Top Gun Upgrades" style={{ maxWidth: '400px', maxHeight: '400px' }}/>
            </div>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Mission 1</h2>
            <p>
              A flock of enemy jets are flying overhead. You decide to attack the unsuspecting pilots despite running low on fuel. 
              Eliminate 75 jets before returning back to the airbase.
            </p>
          </div>
          <div className="image">
            <img src={mission1} alt="Top Gun Mission 1"  style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Mission 2</h2>
            <p>
              The enemies are starting to run low on supplies. They use cargo ships to transport ammunition and food. Cut off their resupply by destroying
              30 cargo ships.
            </p>
          </div>
          <div className="image">
            <img src={mission2} alt="Top Gun Mission 2"  style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        <div className="content-item">
          <div className="text">
            <h2>Mission 3</h2>
            <p>
              You get deployed on a mission to destroy a neighbouring army base in the desert. The base is heavily guarded by enemies.
              You must survive the incoming waves of fighter jets before having a clear shot at destroying the base and winning the war. 
            </p>
          </div>
          <div className="image">
            <img src={mission3} alt="Top Gun Mission 3"  style={{ maxWidth: '400px', maxHeight: '400px' }}/>
          </div>
        </div>
        <ContactMe />
        <BackToTopButton />
      </div>
    </div>
  );
}

export default topgun;
