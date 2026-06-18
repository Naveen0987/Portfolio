import React from "react";

import "./Hero.css";
import profile from "../assets/images/profile.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero reveal" id="home">

      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <span className="hero-tag">
          👋 Hello, I'm
        </span>

        <h1>
          Naveen <span>Ch</span>
        </h1>

        <TypeAnimation
          sequence={[
            "Java Full Stack Developer",
            2000,
            "Spring Boot Developer",
            2000,
            "Backend Developer",
            2000,
            "Freelancer",
            2000
          ]}
          wrapper="h2"
          speed={40}
          repeat={Infinity}
          className="typing"
        />

        <p className="hero-description">
          Passionate Java Full Stack Developer specializing in
          scalable web applications using Java, Spring Boot,
          MySQL and modern frontend technologies.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/resume.pdf"
            className="secondary-btn"
            download
          >
            <FaDownload />
            Resume
          </a>

        </div>

        <div className="hero-tech-stack">

          <span>Java</span>
          <span>Spring Boot</span>
          <span>JavaScript</span>
          <span>MySQL</span>
          <span>REST API</span>
          <span>Linux</span>

        </div>

       <div className="hero-social">

  <a
    href="https://github.com/Naveen0987"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
    <span>GitHub</span>
  </a>

  <a
    href="https://www.linkedin.com/in/naveen-ch-705965240/"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
    <span>LinkedIn</span>
  </a>

</div>

      </motion.div>

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >

        <div className="profile-ring">

          <img
            src={profile}
            alt="Naveen"
          />

        </div>

      </motion.div>

    </section>
  );
};

export default Hero;
