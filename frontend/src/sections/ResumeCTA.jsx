import { Link } from 'react-router-dom';

export default function ResumeCTA() {
  return (
    <section className="resume-cta section">
      <div className="container resume-cta-inner">
        <div>
          <p className="eyebrow accent">Opportunities</p>
          <h2>Ready to build something useful?</h2>
          <p>
            I&apos;m currently looking for opportunities where I can contribute as a MERN Stack
            Developer.
          </p>
        </div>

        <div className="resume-actions">
          <a href="/images/anisha.pdf" download className="btn btn-primary">
            Download Resume
          </a>
          <Link to="/contact" className="btn btn-secondary">
            Let&apos;s Connect
          </Link>
        </div>
      </div>
    </section>
  );
}
