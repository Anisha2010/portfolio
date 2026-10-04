import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const capabilityCards = [
  { title: 'Frontend', text: 'React • JavaScript • Responsive UI' },
  { title: 'Backend', text: 'Node.js • Express.js • REST APIs' },
  { title: 'Database', text: 'MongoDB • Data Modeling • Mongoose' },
  { title: 'Full Stack', text: 'Auth • APIs • Deployment • Product thinking' },
];

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="page-shell">
        <PageHeader
          eyebrow="About"
          title="A little about me"
          description="I build responsive, scalable and user-friendly full-stack web applications for real-world workflows."
        />

        <section className="section">
          <div className="container about-grid">
            <ScrollReveal as="div" className="about-image" delay={80}>
              <img src="/images/pc.jpg" alt="Anisha Daharwal working on a computer" loading="lazy" />
            </ScrollReveal>

            <ScrollReveal as="div" className="about-copy" delay={120}>
              <p>
                I&apos;m Anisha Daharwal, a MERN Stack Developer focused on building responsive,
                scalable and user-friendly full-stack applications.
              </p>
              <p>
                I enjoy turning real-world requirements into complete web applications, working across
                the frontend and backend from responsive React interfaces to REST APIs,
                authentication and MongoDB data models.
              </p>
              <p>
                My recent work includes a CAD-focused Learning Management System and a Movers &
                Packers platform, where I focused on product flows, backend logic and user-friendly
                interfaces that support real business needs.
              </p>

              <div className="detail-actions">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Me
                </Link>
              </div>
            </ScrollReveal>
          </div>

          <div className="container">
            <div className="capability-grid">
              {capabilityCards.map((card, index) => (
                <ScrollReveal key={card.title} as="div" className="capability-card" delay={index * 80}>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
