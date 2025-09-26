import React from 'react';
import styles from './Home.module.css';
import './HomeResponsive.css'; // Import additional responsive styles

const sectors = [
  { title: 'Airports', desc: 'Building gateways to cities and cultures.', icon: '🛫' },
  { title: 'Buildings', desc: 'Specialized environments for communities.', icon: '🏢' },
  { title: 'Water & Irrigation', desc: 'Vital resource infrastructure.', icon: '💧' },
  { title: 'Railways', desc: 'Forwarding economic and social development.', icon: '🚆' },
  { title: 'Metro', desc: 'Transforming urban commuting.', icon: '🚇' },
  { title: 'Power', desc: 'Infrastructure to power sectors.', icon: '⚡' },
  { title: 'Road', desc: 'Connecting places and people.', icon: '🛣️' },
  { title: 'Industrial', desc: 'Empowering industry expansion.', icon: '🏭' },
];

const testimonials = [
  {
    quote: 'Continuous improvement in construction technology and timely completion of projects. We wish much more success!',
    author: 'Sri. S. Kanthimathinathan',
    company: 'Ramco Group Of Companies',
  },
  {
    quote: 'Every milestone has provided us experiences that motivated us to move on with the same enthusiasm.',
    author: 'Mr. M.V. Muthuramalingam',
    company: 'Velammal Educational Trust',
  },
  {
    quote: 'We always feel proud of your building construction, which are worth several generations.',
    author: 'Mr. K. Gokul',
    company: 'Sri Jaya Jothi & Co',
  },
];

const clients = [
  'Ramco Group',
  'Velammal Trust',
  'Sri Jaya Jothi & Co',
  'Bannari Amman Spinning Mills',
  'Jayalakshmi Textiles',
  'Divyalakshmi Textiles',
];

// High-quality construction image
const HERO_IMAGE = 'https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div
        className={styles.hero}
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroHeading}>Building the Future with Excellence</h1>
          <p className={styles.heroSubHeading}>
            Integrated approach, adaptability, and dedication to quality for over 60 years.
          </p>
          <a href="#contact" className={styles.ctaButton}>Contact Us</a>
        </div>
      </div>

      {/* Achievements/Stats Bar */}
      <section className={styles.statsBar}>
        <div className={styles.statBox}>
          <h3>69+</h3>
          <p>Years of Excellence</p>
        </div>
        <div className={styles.statBox}>
          <h3>500+</h3>
          <p>Projects</p>
        </div>
        <div className={styles.statBox}>
          <h3>1000+</h3>
          <p>Team Strength</p>
        </div>
        <div className={styles.statBox}>
          <h3>₹1000CR+</h3>
          <p>Machinery Value</p>
        </div>
      </section>

      {/* Sectors/Services */}
      <section className={styles.sectorsSection}>
        <h2>Our Sectors</h2>
        <div className={styles.sectorsGrid}>
          {sectors.map((sector) => (
            <div className={styles.sectorCard} key={sector.title}>
              <div className={styles.sectorIcon}>{sector.icon}</div>
              <h3>{sector.title}</h3>
              <p>{sector.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className={styles.testimonialsSection}>
        <h2>Testimonials</h2>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((t, idx) => (
            <div className={styles.testimonialCard} key={idx}>
              <p className={styles.testimonialQuote}>&ldquo;{t.quote}&rdquo;</p>
              <div className={styles.testimonialAuthor}>{t.author}</div>
              <div className={styles.testimonialCompany}>{t.company}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Clients */}
      <section className={styles.clientsSection}>
        <h2>Our Clients</h2>
        <div className={styles.clientsGrid}>
          {clients.map((client, idx) => (
            <div className={styles.clientCard} key={idx}>{client}</div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection} id="contact">
        <h2>Contact Us</h2>
        <div className={styles.contactGrid}>
          <div>
            <h4>Bangalore</h4>
            <p>No.810, 1st Cross, 7th Main<br />HAL 2nd Stage, Indira Nagar<br />Bengaluru - 560 008, Karnataka, India</p>
            <p>Mobile: +91 99000 49911<br />Tel: +91 80 25250023 / 24<br />E: urctender@urcc.co.in</p>
          </div>
          <div>
            <h4>Chennai</h4>
            <p>Voora JK Tower, No. 28, 2nd Floor,<br />Buzullah Road, T. Nagar,<br />Chennai – 600017, Tamil Nadu, India</p>
            <p>Mobile: +91 98427 35119<br />Tel: +91 44 35001471<br />E: urctenders@urcc.in</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
