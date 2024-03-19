import React from 'react';
import queens from '../../src/assets/queensu.png';
import uoft from '../../src/assets/utoronto.png';
import bmo from '../../src/assets/bmo.jpg';
import inqubate from '../../src/assets/inqubate.jpg';
import freelance from '../../src/assets/freelance.png';

const Resume = () => {
    return (
    <section id="resume" className="section">
      <h2 className="section-heading">Resume</h2>
      <div className="resume-container">
        {/* Experience Column */}
        <div className="resume-column">
          <h3>Experience</h3>
          <div className="experience-item">
          <div className="experience-icon">
            <img src={inqubate} alt="inQUbate" />
          </div>
            <div className="experience-details">
              <h4>inQUbate | Technical Analyst</h4>
              <p>Kingston, ON | August 2023 – Present</p>
              <ul2>
                <li>Led a group of student entrepreneurs to design and develop SpeakEase, an AI language learning app, by delegating tasks and monitoring progress to deliver on tight weekly deadlines</li>
                <li>Developed the backend of the app and coordinated with my peers to integrate the frontend to create a working product</li>
                <li>Optimized the backend dataflow by splitting up pipelines, decreasing runtime of processes by 83%</li>
                <li>Created a business model by conducting market research through surveys and identified steps toward scaling the product to target 15% of Queen’s University and U of T international students</li>
                <li>Collaborated in agile environment to create an MVP in pre-seed stage and showcased at CUCAI and Ripple Ventures</li>
              </ul2>
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-icon">
              <img src={bmo} alt="BMO" />
            </div>
            <div className="experience-details">
              <h4>BMO | Software Developer Intern</h4>
              <p>Toronto, ON | September 2022 – August 2023</p>
              <ul2>
                <li>Designed and implemented a document classification and dynamic information extraction system using LSTM and BERT models, enhancing business productivity and achieving cost reductions</li>
                <li>Worked end-to-end by pre-processing data, training and testing the model, and creating post-processing functions to enhance the model results which led to above 90% accuracy</li>
                <li>Developed and tested code on AWS Lambda and AWS Sandbox and deployed updates to AWS S3</li>
                <li>Created acceptance tests for multiple projects with code coverage above 95%</li>
                <li>Improved models up to 25% using new production data from AWS EC2 and sent monthly performance reports to PMs</li>
              </ul2>
            </div>
          </div>
          <div className="experience-item">
          <div className="experience-icon">
            <img src={freelance} alt="Freelance" />
          </div>
          <div className="experience-details">
            <h4>Freelance | Coding Tutor</h4>
            <p>Remote | May 2023 - Jul 2023</p>
            <ul2>
              <li>Created a curriculum to introduce elementary school students to the fundamentals of computer programming</li>
              <li>Simplified advanced concepts into more understandable lessons for students and helped the students work through problems</li>
              <li>Worked through interesting problems and games to keep students engaged</li>
              <li>Evaluated students with assessments to check their knowledge on concepts and understand which areas need more improvement</li>
            </ul2>
          </div>
        </div>
        <div className="experience-item">
          <div className="experience-icon">
            <img src={bmo} alt="BMO" />
          </div>
          <div className="experience-details">
            <h4>BMO | Software Developer Intern</h4>
            <p>Remote | May 2021 – Aug 2021</p>
            <ul2>
              <li>Cleaned datasets by tagging documents for model training</li>
              <li>Augmented documents to create larger datasets to improve training results</li>
              <li>Trained information extraction and document classification models, achieving 90% accuracy on some models</li>
            </ul2>
          </div>
        </div>
          {/* Add other experience items */}
        </div>
  
        {/* Education Column */}
        <div className="resume-column">
          <h3>Education</h3>
          <div className="education-item">
            <div className="education-icon">
              <img src={queens} alt="Queen's U" />
            </div>
            <div className="education-details">
              <h4>Queen’s University | Bachelor of Computing (Honours) | 2020 - 2024</h4>
              <p>Computer Science: Artificial Intelligence stream | 3.81 GPA</p>
              <ul>
                <li><b>Awards: </b>1st in QMIND AI Competition (2023), 1st in Camp QMIND’s Pitching Competition (2023), Dean’s Honour List (2021-2023)</li>
                <li><b>Clubs: </b>Google Developer Students Club (2021 – 2022), QMIND (2023-2024), inQUbate (2023-2024)</li>
                <li><b>Coursework: </b>Data Structures, Algorithms, Evolutionary Algorithms, Neural Networks, Data Analytics, Databases, Software Architecture</li>
              </ul>
            </div>
          </div>
          <div className="education-item">
          <div className="education-icon">
              <img src={uoft} alt="U of T" />
            </div>
            <div className="education-details">
              <h4>University of Toronto | 2018 – 2020</h4>
              <p>Computer Science and Mathematics</p>
              <ul>
                <li><b>Clubs: </b>U of T Men’s D-League Varsity Basketball Team (2018 – 2020)</li>
                <li><b>Coursework: </b>Software Design</li>
              </ul>
            </div>
          </div>
          {/* Add other education items */}
        </div>
      </div>
      
      </section>
    );
  }
  
  export default Resume;