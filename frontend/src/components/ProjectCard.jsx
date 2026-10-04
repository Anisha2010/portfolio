import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <img src={project.images[0]} alt={project.title} loading="lazy" />
      <div className="project-card-body">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>

        <div className="project-feature-list">
          {project.features.slice(0, 3).map((feature) => (
            <span key={feature}>{feature}</span>
          ))}
        </div>

        <div className="tech-stack">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          <Link to={`/projects/${project.slug}`} className="btn btn-secondary">
            View Case Study
          </Link>
          {project.liveUrl ? (
            <a href={project.liveUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          ) : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
