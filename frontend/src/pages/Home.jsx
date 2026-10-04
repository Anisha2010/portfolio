import { Link } from 'react-router-dom';
import Hero from '../sections/Hero';
import SectionHeading from '../components/SectionHeading';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import SkillCard from '../components/SkillCard';

export default function HomePage() {
  const featuredProjects = projects.slice(0, 2);
  const previewSkills = skills.slice(0, 3);

  return (
    <PageTransition>
      <>
        <Hero />

        <section className="section">
          <div className="container">
            <ScrollReveal>
              <SectionHeading eyebrow="About" title="A little about me" align="center" />
            </ScrollReveal>

            <div className="about-grid">
              <ScrollReveal as="div" className="about-image" delay={80}>
                <img src="/images/pc.jpg" alt="Anisha Daharwal working on a computer" loading="lazy" />
              </ScrollReveal>

              <ScrollReveal as="div" className="about-copy" delay={120}>
                <p>
                  I&apos;m Anisha Daharwal, a MERN Stack Developer focused on building responsive,
                  scalable and user-friendly full-stack applications.
                </p>
                <p>
                  I enjoy turning real-world requirements into complete web applications, from React
                  interfaces to APIs, authentication and MongoDB systems.
                </p>
                <div className="detail-actions">
                  <Link to="/about" className="btn btn-primary">
                    About Me
                  </Link>
                  <Link to="/projects" className="btn btn-secondary">
                    View All Projects
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section skills-section">
          <div className="container">
            <ScrollReveal>
              <SectionHeading eyebrow="Skills" title="Core technologies" align="center" />
            </ScrollReveal>
            <div className="skills-grid">
              {previewSkills.map((skillGroup, index) => (
                <ScrollReveal key={skillGroup.category} as="div" delay={index * 90}>
                  <SkillCard title={skillGroup.category} items={skillGroup.items} />
                </ScrollReveal>
              ))}
            </div>
            <div className="actions-row section-actions">
              <Link to="/skills" className="btn btn-secondary">
                View All Skills
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <ScrollReveal>
              <SectionHeading eyebrow="Featured" title="Project highlights" align="center" />
            </ScrollReveal>
            <div className="projects-grid">
              {featuredProjects.map((project, index) => (
                <ScrollReveal key={project.slug} as="article" className="project-card" delay={index * 100}>
                  <img src={project.images[0]} alt={project.title} loading="lazy" />
                  <div className="project-card-body">
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.shortDescription}</p>
                    <div className="tech-stack">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech}>{tech}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      <Link to={`/projects/${project.slug}`} className="btn btn-secondary">
                        View Case Study
                      </Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            <div className="actions-row section-actions">
              <Link to="/projects" className="btn btn-primary">
                View Projects
              </Link>
            </div>
          </div>
        </section>

        <section className="resume-cta section">
          <div className="container">
            <ScrollReveal as="div" className="resume-cta-inner" delay={80}>
              <div>
                <p className="eyebrow accent">Resume</p>
                <h2>Experience and projects in one place.</h2>
                <p>Review my background and the products I have built.</p>
              </div>
              <div className="detail-actions">
                <Link to="/resume" className="btn btn-primary">
                  View Resume
                </Link>
                <Link to="/journey" className="btn btn-secondary">
                  View Journey
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="section">
          <div className="container contact-grid">
            <ScrollReveal as="div" className="contact-copy" delay={90}>
              <p className="eyebrow accent">Let&apos;s connect</p>
              <h2>Let&apos;s build something together.</h2>
              <p>
                Have an opportunity, project idea or just want to connect? Feel free to reach out.
              </p>
              <div className="detail-actions">
                <Link to="/contact" className="btn btn-primary">
                  Contact Me
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </>
    </PageTransition>
  );
}
