import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import { projects } from '../../data/projects';

const project = projects.find((item) => item.slug === 'movers-packers');

export default function MoversPackersPage() {
  if (!project) {
    return null;
  }

  return (
    <PageTransition>
      <main className="page-shell">
        <ScrollReveal as="section" className="project-detail-hero section" delay={80}>
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
        </ScrollReveal>

        <section className="container section detail-body">
          <ScrollReveal as="div" className="detail-section" delay={90}>
            <h2>Overview</h2>
            <p>{project.longDescription}</p>
          </ScrollReveal>

          <div className="detail-grid">
            <ScrollReveal as="div" className="detail-section" delay={100}>
              <h3>Problem</h3>
              <p>{project.problem}</p>
            </ScrollReveal>
            <ScrollReveal as="div" className="detail-section" delay={110}>
              <h3>Solution</h3>
              <p>{project.solution}</p>
            </ScrollReveal>
          </div>

          <ScrollReveal as="div" className="detail-section" delay={120}>
            <h3>Features</h3>
            <ul className="feature-list">
              {project.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal as="div" className="detail-section" delay={130}>
            <h3>Booking / Service Flow</h3>
            <p>The platform is designed to guide users through a clear moving and packing service workflow, making the request journey easier to manage.</p>
          </ScrollReveal>

          <ScrollReveal as="div" className="detail-section" delay={140}>
            <h3>Backend / API</h3>
            <p>Customer and booking data is structured around a Node.js and Express backend designed for service management and responsive data handling.</p>
          </ScrollReveal>

          <ScrollReveal as="div" className="detail-section" delay={150}>
            <h3>Database</h3>
            <p>MongoDB and Mongoose were used to model operational data for service requests and related records in a flexible, scalable structure.</p>
          </ScrollReveal>

          <ScrollReveal as="div" className="detail-section" delay={160}>
            <h3>Challenges</h3>
            <ul className="feature-list">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal as="div" className="detail-section" delay={170}>
            <h3>Screenshots</h3>
            <div className="detail-gallery">
              {project.images.map((image, index) => (
                <img key={`${image}-${index}`} src={image} alt={`${project.title} preview ${index + 1}`} loading="lazy" />
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal as="div" className="detail-section" delay={180}>
            <h3>Tech Stack</h3>
            <div className="tech-stack">
              {project.technologies.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal as="div" className="detail-actions" delay={190}>
            <Link to="/projects" className="btn btn-secondary">
              Back to Projects
            </Link>
            {project.liveUrl ? (
              <a href={project.liveUrl} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                Live Demo
              </a>
            ) : null}
            {project.githubUrl ? (
              <a href={project.githubUrl} className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            ) : null}
          </ScrollReveal>
        </section>
      </main>
    </PageTransition>
  );
}
