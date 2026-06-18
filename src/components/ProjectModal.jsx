import "./ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {

  if (!project) return null;

  return (

    <div className="modal-overlay">

      <div className="modal">

        <button
          className="close-btn"
          onClick={onClose}
        >
          ✕
        </button>

        <img
          src={project.image}
          alt={project.title}
        />

        <h2>{project.title}</h2>

        <p className="subtitle">
          {project.subtitle}
        </p>

        <p>{project.description}</p>

        <h3>Technologies</h3>

        <div className="modal-tech">

          {project.tech.map((item,index)=>(

            <span key={index}>
              {item}
            </span>

          ))}

        </div>

        <div className="modal-buttons">

          {project.live && (

            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

          )}

          {project.github && (

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          )}

        </div>

      </div>

    </div>

  );

};

export default ProjectModal;
