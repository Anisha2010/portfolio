import { Link, useParams } from 'react-router-dom';
import { projects } from '../data/projects';

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return (
      <main className="page-shell">
        <div className="container section">
          <h2>Project not found</h2>
          <Link to="/projects" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="project-detail-hero section">
        <div className="container detail-hero-grid">
          <div>
            <p className="eyebrow accent">{project.category}</p>
            <h1>{project.title}</h1>
            <p className="detail-subtitle">{project.subtitle}</p>
            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
          <img src={project.images[0]} alt={project.title} loading="lazy" />
        </div>
      </section>

      <section className="container section detail-body">
        <div className="detail-section">
          <h2>Project Overview</h2>
          <p>{project.description}</p>
        </div>

        <div className="detail-grid">
          <div className="detail-section">
            <h3>Problem</h3>
            <p>{project.problem}</p>
          </div>
          <div className="detail-section">
            <h3>Solution</h3>
            <p>{project.solution}</p>
          </div>
        </div>

        <div className="detail-section">
          <h3>Key Features</h3>
          <ul className="feature-list">
            {project.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h3>Challenges</h3>
          <ul className="feature-list">
            {project.challenges.map((challenge) => (
              <li key={challenge}>{challenge}</li>
            ))}
          </ul>
        </div>

        <div className="detail-section">
          <h3>Screenshots</h3>
          <div className="detail-gallery">
            {project.images.map((image) => (
              <img key={image} src={image} alt={`${project.title} project preview`} loading="lazy" />
            ))}
          </div>
        </div>

        <div className="detail-section">
          <h3>Tech Stack</h3>
          <div className="tech-stack">
            {project.technologies.map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="detail-actions">
          <Link to="/projects" className="btn btn-secondary">
            Back to Projects
          </Link>
          {project.liveUrl ? <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a> : null}
          {project.githubUrl ? (
            <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noreferrer">
              GitHub
            </a>
          ) : null}
        </div>
      </section>
    </main>
  );
}
