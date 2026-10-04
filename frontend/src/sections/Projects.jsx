import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import SectionHeading from '../components/SectionHeading';

export default function FeaturedProjects() {
  return (
    <section className="projects-section section" id="projects">
      <div className="container">
        <SectionHeading eyebrow="Featured work" title="Featured Projects" align="center" />

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
