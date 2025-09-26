import React from "react";
import styles from "./About.module.css"; // Import CSS file

const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img
          src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=1200&q=80"
          alt="Construction Banner"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}>
          <h1 className={styles.heroHeading}>About Us</h1>
        </div>
      </div>

      {/* Who We Are */}
      <section className={styles.section}>
        <img
          src="https://images.unsplash.com/photo-1503389152951-9c3d0456e86c?auto=format&fit=crop&w=600&q=80"
          alt="Company"
          className={styles.image}
        />
        <div>
          <h2 className={styles.heading}>Who We Are</h2>
          <p className={styles.subHeading}>
            PPS Constructions is a premier infrastructure company with decades of experience.
            We specialize in commercial, industrial, and government projects with a strong
            focus on quality, innovation, and sustainability.
          </p>
          <p className={styles.subHeading}>
            Our commitment to excellence has made us a trusted name in the industry.
          </p>
        </div>
      </section>

      {/* Achievements Section */}
      <section className={styles.achievements}>
        <h2 className={styles.heading}>Our Achievements</h2>
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

      {/* Our Values Section */}
      <section className={styles.section}>
        <div>
          <h2 className={styles.heading}>Our Core Values</h2>
          <ul className={styles.valuesList}>
            <li className={styles.valuesItem}>
              <span className={styles.valuesIcon}>✔</span>
              <p>Integrity - We adhere to the highest ethical standards.</p>
            </li>
            <li className={styles.valuesItem}>
              <span className={styles.valuesIcon}>✔</span>
              <p>Quality - Delivering superior construction with precision.</p>
            </li>
            <li className={styles.valuesItem}>
              <span className={styles.valuesIcon}>✔</span>
              <p>Innovation - Embracing new technologies to improve efficiency.</p>
            </li>
          </ul>
        </div>
        <img
          src="https://images.unsplash.com/photo-1515168833906-d2a3b82b302b?auto=format&fit=crop&w=600&q=80"
          alt="Core Values"
          className={styles.image}
        />
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.heading}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=200&q=80" alt="CEO" className={styles.teamImage} />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80" alt="COO" className={styles.teamImage} />
            <h3>Jane Smith</h3>
            <p>COO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=200&q=80" alt="CTO" className={styles.teamImage} />
            <h3>Michael Lee</h3>
            <p>CTO</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.callToAction}>
        <h2>Partner with Us</h2>
        <p>Let's work together to build the future.</p>
        <a href="/contact" className={styles.callToActionButton}>Get in Touch</a>
      </section>
    </div>
  );
};

export default About;
