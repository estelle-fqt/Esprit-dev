import "../styles/Projects.scss";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="portfolio">
      <h2 className="portfolio-title">Mes dernières réalisations</h2>
      <div className="portfolio-container">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-card">
            <img
              src={project.image}
              alt={project.title}
              className="portfolio-image"
            />
            <div className="portfolio-content">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <div className="portfolio-tech">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="portfolio-links">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-github"
                >
                  GitHub
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-demo"
                  >
                    Démo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
