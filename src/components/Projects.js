import React, { useState } from 'react';
import './ProjectsStyles.css'; // Import custom styling

const projectsData = [
  {
    id: 1,
    title: "IT Park Development",
    description: "A state-of-the-art IT park with modern infrastructure and sustainable design features.",
    image: "https://www.kongu.ac.in/webalbum/img/itpark.jpg",
    category: "Commercial",
    location: "Bengaluru, Karnataka",
    year: "2024"
  },
  {
    id: 2,
    title: "Lulu Mall Complex",
    description: "A sophisticated architecture project that combines modern design with functionality, creating one of the largest shopping destinations.",
    image: "https://img.staticmb.com/mbcontent/images/crop/uploads/2024/6/Lulu-Mall-Thiruvananthapuram_0_1200.jpg",
    category: "Commercial",
    location: "Thiruvananthapuram, Kerala",
    year: "2023"
  },
  {
    id: 3,
    title: "Eco-Friendly Residential Complex",
    description: "A sustainable residential complex featuring solar power integration and water recycling systems.",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Residential",
    location: "Chennai, Tamil Nadu",
    year: "2022"
  },
  {
    id: 4,
    title: "Metro Station Development",
    description: "Design and construction of metro station infrastructure with modern amenities and accessibility features.",
    image: "https://images.unsplash.com/photo-1565636291546-0d8154d57fa5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
    category: "Infrastructure",
    location: "Hyderabad, Telangana",
    year: "2021"
  }
];

const Projects = () => {
  const [filter, setFilter] = useState('All');
  
  const categories = ['All', 'Commercial', 'Residential', 'Infrastructure'];
  
  const filteredProjects = filter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === filter);

  return (
    <div className="projects-container">
      <div className="projects-header">
        <h1 className="projects-heading">Our Projects</h1>
        <p className="projects-subheading">Explore our diverse portfolio of construction excellence across various sectors</p>
      </div>

      <div className="filter-container">
        {categories.map(category => (
          <button 
            key={category}
            className={`filter-button ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="projects-list">
        {filteredProjects.map(project => (
          <div className="project-card" key={project.id}>
            <div className="project-image-container">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <span className="project-category">{project.category}</span>
              </div>
            </div>
            <div className="project-info">
              <h2 className="project-title">{project.title}</h2>
              <div className="project-meta">
                <span className="project-location">{project.location}</span>
                <span className="project-year">{project.year}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <button className="view-details-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="projects-cta">
        <h3>Have a project in mind?</h3>
        <p>Contact us to discuss how we can bring your vision to reality</p>
        <a href="/contact" className="contact-btn">Contact Us</a>
      </div>
    </div>
  );
};

export default Projects;
