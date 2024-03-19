// Experience.js
import React from 'react';

const Experience = () => {
  return (
    <section id="experience" className="section">
      <h2>Experience</h2>
      <div className="experience-content">
        <div className="experience-item">
          <h3>Job Title</h3>
          <p>Company Name</p>
          <p>Duration: Start Date - End Date</p>
          <p>Description of responsibilities and achievements</p>
        </div>
        {/* Add more experience items as needed */}
      </div>
    </section>
  );
}

export default Experience;