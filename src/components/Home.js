import React from 'react';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img
          src="https://commercial.allianz.com/content/dam/onemarketing/agcs/agcs/general/reports/agcs-global-industry-solutions-report-construction-teaser.jpg"
          alt="Construction Banner"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroHeading}>Building the Future with Excellence</h1>
          <p className={styles.heroSubHeading}>
            Engineering innovation, quality, and trust in every project.
          </p>
          <a href="/projects" className={styles.ctaButton}>View Our Projects</a>
        </div>
      </div>

      {/* About Section */}
      <section className={styles.aboutSection}>
        <h2>About Us</h2>
        <p>
          PPS Constructions is a leading infrastructure company with a legacy of
          high-quality projects, including commercial, industrial, and government buildings.
        </p>
        <a href="/about" className={styles.learnMore}>Learn More</a>
      </section>

      {/* Achievements */}
      <section className={styles.achievements}>
        <h2>Our Achievements</h2>
        <div className={styles.achievementsGrid}>
          <div className={styles.achievementBox}>
            <h3>500+</h3>
            <p>Successful Projects</p>
          </div>
          <div className={styles.achievementBox}>
            <h3>50+</h3>
            <p>Years of Experience</p>
          </div>
          <div className={styles.achievementBox}>
            <h3>1000+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h2>Get in Touch</h2>
        <p>Partner with us for your next big project.</p>
        <a href="/contact" className={styles.ctaButton}>Contact Us</a>
      </section>
    </div>
  );
};

export default Home;
