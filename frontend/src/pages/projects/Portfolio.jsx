import { Link } from 'react-router-dom';
import PageTransition from '../../components/PageTransition';
import ScrollReveal from '../../components/ScrollReveal';
import { projects } from '../../data/projects';

const project = projects.find((item) => item.slug === 'portfolio');

export default function PortfolioPage() {
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
              <h3>Purpose</h3>
              <p>
                The portfolio was created to present my work, technical skills, education and
                development journey in a clear, modern and easy-to-navigate format.
              </p>
            </ScrollReveal>
            <ScrollReveal as="div" className="detail-section" delay={110}>
              <h3>Key Features</h3>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </ScrollReveal>
          </div>

          <ScrollReveal as="div" className="detail-section" delay={120}>
            <h3>Technical Implementation</h3>
            <p>
              The project uses React with route-based page structure, a reusable component system,
              responsive layout styling and a lightweight theme system for light and dark mode.
            </p>
          </ScrollReveal>

          <div className="detail-grid">
            <ScrollReveal as="div" className="detail-section" delay={130}>
              <h3>Responsive Design</h3>
              <p>
                Layouts were designed to remain readable and stable across mobile, tablet and desktop
                breakpoints with no unnecessary horizontal overflow.
              </p>
            </ScrollReveal>
            <ScrollReveal as="div" className="detail-section" delay={140}>
              <h3>Theme System</h3>
              <p>
                A simple data-theme implementation persists the selected mode and keeps the portfolio
                readable in both light and dark themes.
              </p>
            </ScrollReveal>
          </div>

          <div className="detail-grid">
            <ScrollReveal as="div" className="detail-section" delay={150}>
              <h3>Routing</h3>
              <p>
                React Router handles separate views for the home, projects, journey, resume and contact
                pages with client-side navigation and a dedicated 404 state.
              </p>
            </ScrollReveal>
            <ScrollReveal as="div" className="detail-section" delay={160}>
              <h3>Accessibility</h3>
              <p>
                Navigation, form labels, icon-only links and color choices were kept accessible while
                preserving the existing portfolio design.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal as="div" className="detail-section" delay={170}>
            <h3>Deployment</h3>
            <p>
              The portfolio is configured for GitHub Pages deployment and is publicly available through
              the live demo link below.
            </p>
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
