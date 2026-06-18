
import React from "react";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>

      <div className="logo">
        Naveen<span>.</span>
      </div>

      <nav className={menuOpen ? "nav-links active" : "nav-links"}>

        <a href="#home" onClick={closeMenu}>Home</a>

        <a href="#about" onClick={closeMenu}>About</a>

        <a href="#skills" onClick={closeMenu}>Skills</a>

        <a href="#projects" onClick={closeMenu}>Projects</a>

        <a href="#contact" onClick={closeMenu}>Contact</a>

      </nav>

      <a href="/resume.pdf" className="resume-btn">
        Resume
      </a>
<ThemeToggle/>
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>

    </header>
  );
};

export default Navbar;
