import SectionHeading from '../components/SectionHeading';

const capabilityCards = [
  { title: 'Frontend', text: 'React • JavaScript • Responsive UI' },
  { title: 'Backend', text: 'Node • Express • REST APIs' },
  { title: 'Database', text: 'MongoDB • Data Modeling' },
  { title: 'Full Stack', text: 'Authentication • APIs • Integrations • Deployment' },
];

export default function About() {
  return (
    <section className="about-section section" id="about">
      <div className="container">
        <SectionHeading eyebrow="About" title="A little about me" align="center" />

        <div className="about-grid">
          <div className="about-image reveal">
            <img src="/images/pc.jpg" alt="Anisha Daharwal working on a computer" loading="lazy" />
          </div>

          <div className="about-copy reveal">
            <p>
              I&apos;m a MERN Stack Developer who enjoys turning ideas and real-world requirements
              into complete web applications. I work across the frontend and backend, from
              building responsive React interfaces to designing REST APIs, authentication flows
              and MongoDB data models.
            </p>
            <p>
              My recent work includes a CAD-focused Learning Management System and a Movers &
              Packers platform, where I worked on real application flows such as authentication,
              role-based access, APIs, dashboards, payments and responsive UI.
            </p>
          </div>
        </div>

        <div className="capability-grid">
          {capabilityCards.map((card, index) => (
            <div key={card.title} className="capability-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <h3>{card.title}</h3>
              <p>{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
