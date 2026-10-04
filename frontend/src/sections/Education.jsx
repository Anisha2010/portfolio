import SectionHeading from '../components/SectionHeading';

const education = [
  {
    heading: 'Diploma',
    institution: 'Government Polytechnic College',
    subtitle: 'RGPV',
  },
  {
    heading: 'B.Tech — Computer Science Engineering',
    institution: 'LNCT Indore / RGPV',
    subtitle: 'Computer Science Engineering',
  },
  {
    heading: 'MERN Stack Development',
    institution: 'Full-stack projects and real-world application development',
    subtitle: 'Hands-on learning with full-stack builds',
  },
];

export default function Education() {
  return (
    <section className="education-section section">
      <div className="container">
        <SectionHeading eyebrow="Learning journey" title="My Learning Journey" align="center" />

        <div className="timeline">
          {education.map((item, index) => (
            <div key={item.heading} className="timeline-item reveal" style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="timeline-dot" aria-hidden="true" />
              <div className="timeline-card">
                <h3>{item.heading}</h3>
                <p>{item.institution}</p>
                <span>{item.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
