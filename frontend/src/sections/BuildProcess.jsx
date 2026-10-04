import SectionHeading from '../components/SectionHeading';

const steps = [
  ['01', 'Understand', 'Understand requirements and user flows.'],
  ['02', 'Design', 'Create a responsive and intuitive interface.'],
  ['03', 'Develop', 'Build frontend, backend and database layers.'],
  ['04', 'Integrate', 'Connect authentication, APIs and third-party services.'],
  ['05', 'Test', 'Validate functionality, responsiveness and edge cases.'],
  ['06', 'Deploy', 'Deploy and verify the application.'],
];

export default function BuildProcess() {
  return (
    <section className="build-process section" id="journey">
      <div className="container">
        <SectionHeading eyebrow="How I work" title="How I Build" align="center" />

        <div className="process-grid">
          {steps.map(([step, title, text]) => (
            <div key={step} className="process-card reveal">
              <span className="process-number">{step}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
