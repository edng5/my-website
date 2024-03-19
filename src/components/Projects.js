// Projects.js
import React from 'react';
import ProjectCard from './ProjectCard';
import speakease from '../../src/assets/speakease-icon.png';
import NEOS from '../../src/assets/NEOS1.gif';
import cortex from '../../src/assets/cortex.jpg';
import ispy from '../../src/assets/ispy1.jpg';
import topgun from '../../src/assets/topgun1.jpg';
import spaceinv from '../../src/assets/spaceinvader.jpg';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Projects</h2>
      <div className="projects-grid">
        <ProjectCard 
          title="SpeakEase"
          desc="An AI language learning app designed to enhance conversational skills through the guidance of our friendly virtual companion, Easso."
          imageSrc={speakease}
          link="#/speakease"
        />
        <ProjectCard 
          title="Neuro Evolution Organism Simulator"
          desc="This simulator employs the NeuroEvolution of Augmenting Topologies (NEAT) algorithm serves as a dynamic environment to observe the evolutionary process of simple organisms, termed Neuro Evolutionary Organisms (NEOS), as they adapt and learn to survive."
          imageSrc={NEOS}
          link="https://github.com/edng5/NEOS"
        />
        <ProjectCard 
          title="Cortex"
          desc="Meet Cortex, your intelligent companion on Discord, designed to engage in natural conversations and assist you with various tasks seamlessly."
          imageSrc={cortex}
          link="https://github.com/edng5/Cortex"
        />
        <ProjectCard 
          title="I Spy"
          desc="The classic children game I Spy, where the user chooses an object of a specific colour and the computer has to guess what that object is."
          imageSrc={ispy}
          link="https://github.com/edng5/ISpy"
        />
        <ProjectCard 
          title="Top Gun"
          desc="A flight combat simulation game where the player completes multiple missions against waves of fighter jets to win the war."
          imageSrc={topgun}
          link="#/top-gun"
        />
        <ProjectCard 
          title="Space Invaders"
          desc="Space Invaders is a classic arcade video game where players control a spaceship at the bottom of the screen, tasked with shooting down waves of descending alien invaders while avoiding their projectiles."
          imageSrc={spaceinv}
          link="#/space-invaders"
        />
        {/* Add more ProjectCard components as needed */}
      </div>
    </section>
  );
}

export default Projects;