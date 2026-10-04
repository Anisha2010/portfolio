import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

export default function ResumePage() {
  return (
    <PageTransition>
      <main className="page-shell">
        <PageHeader
          eyebrow="Resume"
          title="Anisha Daharwal"
          description="MERN Stack Developer focused on building practical, user-friendly and scalable full-stack web applications."
        />

        <section className="section">
          <div className="container resume-page">
            <ScrollReveal as="div" className="resume-card" delay={80}>
              <p>
                I build responsive interfaces, maintain backend APIs and design data models for real-world product workflows.
              </p>
              <div className="detail-actions">
                <a href="/images/anisha.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  View Resume
                </a>
                <a href="/images/anisha.pdf" download className="btn btn-secondary">
                  Download Resume
                </a>
              </div>
            </ScrollReveal>
            <div className="actions-row">
              <ScrollReveal as="div" delay={120}>
                <Link to="/contact" className="btn btn-primary">
                  Hire Me
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
