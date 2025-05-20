import React from "react";
import styles from "./About.module.css"; // Import CSS file

const About = () => {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <img
          src="https://source.unsplash.com/1600x900/?construction,building"
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
          src="https://source.unsplash.com/500x400/?company,office"y
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
          src="https://soPPSe.unsplash.com/500x400/?values,teamwork"
          alt="Core Values"
          className={styles.image}
        />
      </section>

      {/* Team Section */}
      <section className={styles.team}>
        <h2 className={styles.heading}>Meet Our Team</h2>
        <div className={styles.teamGrid}>
          <div className={styles.teamMember}>
            <img src="https://soPPSe.unsplash.com/200x200/?man,portrait" alt="CEO" className={styles.teamImage} />
            <h3>John Doe</h3>
            <p>CEO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://soPPSe.unsplash.com/200x200/?woman,portrait" alt="COO" className={styles.teamImage} />
            <h3>Jane Smith</h3>
            <p>COO</p>
          </div>
          <div className={styles.teamMember}>
            <img src="https://soPPSe.unsplash.com/200x200/?businessman" alt="CTO" className={styles.teamImage} />
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
  