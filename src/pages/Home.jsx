
import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Stats from "../components/Stats";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Timeline from "../components/Timeline";
import Contact from "../components/Contact";
import Footer from "../components/Footer/Footer";
import Github from "../components/Github";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Skills />
      <Projects />
      <Timeline />
       <Github />
      <Contact />
      <Footer/>
     
    </>
  );
};

export default Home;
