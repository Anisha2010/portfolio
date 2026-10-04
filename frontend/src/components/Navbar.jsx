import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTheme } from '../context/useTheme';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Skills', href: '/skills' },
  { label: 'Projects', href: '/projects' },
  { label: 'Journey', href: '/journey' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };

  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Main navigation">
        <Link to="/" className="brand" aria-label="Anisha Daharwal home page" onClick={handleNavClick}>
          <img src="/images/logoA.png" alt="Anisha Daharwal logo" />
          <span>Anisha Daharwal</span>
        </Link>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className="desktop-nav" aria-label="Desktop navigation links">
          {navItems.map((item) => {
            const isProjectRoute = item.href === '/projects' && location.pathname.startsWith('/projects');
            const isActive = item.href === '/' ? location.pathname === '/' : isProjectRoute || location.pathname === item.href;

            return (
              <NavLink
                key={item.label}
                to={item.href}
                end={item.href === '/'}
                className={isActive ? 'nav-link active' : 'nav-link'}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>

        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>

          <Link to="/resume" className="btn btn-primary talk-button">
            Resume
          </Link>
        </div>

        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} aria-label="Mobile navigation links">
          {navItems.map((item) => {
            const isProjectRoute = item.href === '/projects' && location.pathname.startsWith('/projects');
            const isActive = item.href === '/' ? location.pathname === '/' : isProjectRoute || location.pathname === item.href;

            return (
              <NavLink
                key={item.label}
                to={item.href}
                end={item.href === '/'}
                className={isActive ? 'nav-link active' : 'nav-link'}
                onClick={handleNavClick}
              >
                {item.label}
              </NavLink>
            );
          })}
          <Link to="/resume" className="btn btn-primary mobile-link" onClick={handleNavClick}>
            Resume
          </Link>
        </div>
      </nav>
    </header>
  );
}
