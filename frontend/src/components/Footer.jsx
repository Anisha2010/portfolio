import { Link } from 'react-router-dom';
import SocialLinks from './SocialLinks';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Anisha Daharwal</h3>
          <p>
            MERN Stack Developer focused on building responsive, scalable and user-friendly
            full-stack web applications.
          </p>
          <SocialLinks />
        </div>

        <div>
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/journey">Journey</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4>Contact</h4>
          <ul className="footer-contact-list">
            <li>
              <a href="mailto:anisha.daharwal@gmail.com">anisha.daharwal@gmail.com</a>
            </li>
            <li>
              <a href="https://github.com/Anisha2010" target="_blank" rel="noopener noreferrer">
                github.com/Anisha2010
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Anisha Daharwal. All rights reserved.</p>
      </div>
    </footer>
  );
}
