import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import ProjectCard from '../components/ProjectCard';

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="page-shell">
        <PageHeader
          eyebrow="Projects"
          title="Featured Projects"
          description="A selection of full-stack products focused on real workflows, secure access and responsive experiences."
        />

        <section className="projects-section section">
          <div className="container">
            <div className="projects-grid">
              {projects.map((project, index) => (
                <ScrollReveal key={project.slug} delay={index * 90}>
                  <ProjectCard project={project} />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <div className="container section actions-row">
          <ScrollReveal as="div" delay={120}>
            <Link to="/" className="btn btn-secondary">
              Back to Home
            </Link>
          </ScrollReveal>
        </div>
      </main>
    </PageTransition>
  );
}
