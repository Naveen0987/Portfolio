import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about reveal" id="about">

      <div className="section-header">

        <p>Get To Know Me</p>

        <h2>About Me</h2>

      </div>

      <div className="about-container">

        {/* LEFT */}

        <div className="about-left">

          <div className="about-card">

            <h3>Who am I?</h3>

            <p>

              I'm <strong>Naveen Ch</strong>, a passionate
              Java Full Stack Developer who enjoys building
              secure, scalable and responsive web applications.

            </p>

            <p>

              I specialize in Java, Spring Boot,
              MySQL and modern frontend technologies.

            </p>

            <p>

              I have worked on real client websites
              and continuously improve my skills
              through practical development.

            </p>

          </div>

        </div>

        {/* RIGHT */}

        <div className="about-right">

          <div className="info-card">

            <h4>🎓 Education</h4>

            <p>Bachelor of Computer Applications</p>

          </div>

          <div className="info-card">

            <h4>💼 Experience</h4>

            <p>Freelance Java Full Stack Developer</p>

          </div>

          <div className="info-card">

            <h4>🌍 Location</h4>

            <p>Nandyal, Andhra Pradesh, India</p>

          </div>

          <div className="info-card">

            <h4>💻 Interests</h4>

            <p>Java • Spring Boot • frontend development</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;
