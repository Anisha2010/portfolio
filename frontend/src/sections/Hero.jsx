import { Link } from 'react-router-dom';
import SocialLinks from '../components/SocialLinks';

export default function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-grid">
        <div className="hero-copy reveal">
          <p className="eyebrow accent">MERN STACK DEVELOPER</p>
          <h1>I build modern web experiences that solve real problems.</h1>
          <p className="hero-text">
            I&apos;m Anisha Daharwal, a MERN Stack Developer focused on building responsive,
            scalable and user-friendly full-stack applications.
          </p>

          <div className="hero-actions">
            <Link to="/projects" className="btn btn-primary">
              View My Projects
            </Link>
            <a href="/images/anisha.pdf" download className="btn btn-secondary">
              Download Resume
            </a>
          </div>

          <div className="hero-cta-row">
            <Link to="/contact" className="text-link">
              Let&apos;s Connect
            </Link>
          </div>

          <SocialLinks />
        </div>

        <div className="hero-visual reveal">
          <div className="orb orb-one" aria-hidden="true" />
          <div className="orb orb-two" aria-hidden="true" />
          <div className="profile-ring">
            <img src="/images/img.png" alt="Anisha Daharwal profile" loading="eager" />
          </div>
        </div>
      </div>
    </section>
  );
}
