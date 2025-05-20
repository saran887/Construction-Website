import React from 'react';
import './ProjectsStyles.css'; // Import custom styling

const Projects = () => {
  return (
    <div className="container">
      <h1 className="heading">Our Projects</h1>
      <p className="subHeading">Explore our diverse range of projects.</p>

      {/* List of Projects */}
      <div className="projectsList">
        <div className="projectCard">
          <img
            src="https://www.kongu.ac.in/webalbum/img/itpark.jpg"
            alt="Construction site"
            className="projectImage"
          />
          <h2 className="projectTitle">Project 1</h2>
          <p className="projectDescription">
            A large-scale construction project focused on urban development.
          </p>
        </div>
        <div className="projectCard">
          <img
            src="https://img.staticmb.com/mbcontent/images/crop/uploads/2024/6/Lulu-Mall-Thiruvananthapuram_0_1200.jpg"
            alt="Modern architecture"
            className="projectImage"
          />
          <h2 className="projectTitle">Project 2</h2>
          <p className="projectDescription">
            A sophisticated architecture project that combines modern design with functionality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
