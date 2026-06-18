import React from "react";

import "./Footer.css";
import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer revealn">

      <div className="footer-content">

        <h2>Naveen Ch</h2>

        <p>
          Java Full Stack Developer passionate about building
          modern web applications.
        </p>

        <div className="footer-links">

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>

        </div>

        <div className="footer-social">

          <a
            href="https://github.com/Naveen0987"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <div className="copyright">

          © {year} Naveen Ch | Made with <FaHeart className="heart" />

        </div>

      </div>

    </footer>
  );
};

export default Footer;
