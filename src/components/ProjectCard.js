// ProjectCard.js
import React from 'react';


const ProjectCard = ({ title, desc, imageSrc, link }) => {
    const handleClick = () => {
        window.location.hash = '';
        };
    return (
        <div className="project-card">
        <a href={link} onClick={handleClick}>
            <img src={imageSrc} alt={title} className="project-image" />
            <div className="project-info">
            <div className="project-title">{title}</div>
            <div className="project-description">{desc}</div>
            </div>
        </a>
        </div>
    );
}

export default ProjectCard;