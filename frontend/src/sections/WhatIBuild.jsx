import SectionHeading from '../components/SectionHeading';

const builds = [
  {
    title: 'Full-Stack Applications',
    text: 'Complete web applications using React, Node.js, Express and MongoDB.',
  },
  {
    title: 'REST APIs',
    text: 'Structured APIs with authentication, validation and database integration.',
  },
  {
    title: 'Authentication Systems',
    text: 'Login, registration, OTP, email verification, password recovery and OAuth flows.',
  },
  {
    title: 'Business Platforms',
    text: 'Dashboards, booking systems, learning platforms and other real-world application workflows.',
  },
];

export default function WhatIBuild() {
  return (
    <section className="build-section section">
      <div className="container">
        <SectionHeading eyebrow="What I can do" title="What I Can Build" align="center" />

        <div className="build-grid">
          {builds.map((item, index) => (
            <div key={item.title} className="info-card reveal" style={{ transitionDelay: `${index * 80}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
