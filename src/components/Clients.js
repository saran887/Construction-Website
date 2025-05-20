import React from "react";
import "./Clients.css"; // Import CSS file

const clients = [
  {
    id: 1,
    name: "Tata Group",
    description: "A multinational conglomerate in India, known for its innovation and sustainability.",
    logo: "https://static.brandfinance.com/wp-content/uploads/2022/06/shutterstock_1517650652-scaled.jpg",
    
  },
  {
    id: 2,
    name: "Reliance Industries",
    description: "A diversified company in energy, petrochemicals, textiles, and telecommunications.",
    logo: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202308/ezgif-sixteen_nine_491.jpg?size=1200:675",
   
  },
  {
    id: 3,
    name: "Infosys",
    description: "A global leader in IT services and consulting, shaping digital transformation.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Infosys_logo.svg/1280px-Infosys_logo.svg.png",
    
  },
  {
    id: 4,
    name: "Mahindra Group",
    description: "A leader in automotive, IT, and financial services with a global presence.",
    logo: "https://etimg.etb2bimg.com/photo/85170691.cms",
    
  },
  {
    id: 5,
    name: "Wipro",
    description: "A global IT services and consulting company delivering technology-driven solutions.",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Wipro_Primary_Logo_Color_RGB.svg/2560px-Wipro_Primary_Logo_Color_RGB.svg.png",
    
  },
];

const Clients = () => {
  return (
    <div className="clients-container">
      <h1 className="clients-title">Our Valued Clients</h1>
      <p className="clients-description">
        We have worked with some of the top Indian companies, delivering excellence.
      </p>

      <div className="clients-grid">
        {clients.map((client) => (
          <div key={client.id} className="client-card">
            <img src={client.logo} alt={client.name} className="client-logo" />
            <div className="client-content">
              <h3 className="client-name">{client.name}</h3>
              <p className="client-description">{client.description}</p>
             
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;
