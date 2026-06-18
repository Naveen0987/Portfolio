import React from "react";
import { useState } from "react";
import "./Projects.css";
import projects from "../assets/data/projects";
import ProjectModal from "./ProjectModal";

const Projects = () => {
const [selectedProject, setSelectedProject] = useState(null);
  return (
    <section className="projects reveal" id="projects">

      <div className="section-header">
        <p>My Recent Work</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">

        {projects.map((project) => (

         <div
  className={`project-card ${
    project.featured ? "featured" : ""
  }`}
  key={project.id}
  onClick={() => setSelectedProject(project)}
>

            {project.featured && (
              <div className="featured-badge">
                ⭐ Featured
              </div>
            )}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="overlay">

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                )}

              </div>

            </div>

            <div className="project-content">

              <span className="project-category">
                {project.subtitle}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.tech.map((tech, index) => (

                  <span key={index}>
                    {tech}
                  </span>

                ))}

              </div>

              <div className="project-buttons">

                {project.github && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="github-btn"
                  >
                    GitHub
                  </a>

                )}

                {project.live && (

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="live-btn"
                  >
                    Visit Site
                  </a>

                )}

              </div>

            </div>

          </div>

        ))}

      </div>
      <ProjectModal
  project={selectedProject}
  onClose={() => setSelectedProject(null)}
/>

    </section>
  );
};

export default Projects;
