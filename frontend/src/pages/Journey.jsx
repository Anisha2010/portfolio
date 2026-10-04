import PageHeader from '../components/PageHeader';
import PageTransition from '../components/PageTransition';
import ScrollReveal from '../components/ScrollReveal';

const timeline = [
  {
    title: 'Diploma',
    subtitle: 'Government Polytechnic College',
    meta: 'RGPV',
    description: 'Focused on fundamentals in engineering and practical problem solving.',
  },
  {
    title: 'B.Tech — Computer Science Engineering',
    subtitle: 'LNCT Indore',
    meta: 'RGPV',
    description: 'Built a stronger foundation in software engineering and applied technology.',
  },
  {
    title: 'MERN Stack Development',
    subtitle: 'Full-stack project building and real-world application development',
    meta: 'Hands-on product work',
    description: 'Developed projects involving frontend architecture, APIs, authentication, data modeling and deployment workflows.',
  },
];

export default function JourneyPage() {
  return (
    <PageTransition>
      <main className="page-shell">
        <PageHeader
          eyebrow="Journey"
          title="My learning journey"
          description="A steady path of learning, project building and full-stack product development."
        />

        <section className="section">
          <div className="container">
            <div className="timeline">
              {timeline.map((item, index) => (
                <ScrollReveal key={item.title} as="div" className="timeline-item" delay={index * 90}>
                  <div className="timeline-dot" aria-hidden="true" />
                  <div className="timeline-card">
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                    <span>{item.meta}</span>
                    <p>{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
