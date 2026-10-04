const socialLinks = [
  {
    label: 'GitHub',
    href: 'https://github.com/Anisha2010',
    Icon: GitHubIcon,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/anisha-daharwal-45b8402ab/',
    Icon: LinkedInIcon,
  },
  {
    label: 'Email',
    href: 'mailto:anisha.daharwal@gmail.com',
    Icon: EmailIcon,
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.6-4.04-1.6-.54-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.49 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.48-1.34-5.48-5.96 0-1.32.47-2.4 1.24-3.25-.12-.31-.54-1.56.12-3.25 0 0 1-.32 3.3 1.23a11.3 11.3 0 0 1 6 0c2.3-1.55 3.29-1.23 3.29-1.23.67 1.69.25 2.94.13 3.25.77.85 1.24 1.93 1.24 3.25 0 4.64-2.82 5.65-5.5 5.95.43.38.81 1.13.81 2.28v3.38c0 .32.21.7.83.58A12 12 0 0 0 12 .5Z" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1ZM5.5 10.3h2.9v8.2H5.5v-8.2Zm4.74 0h2.77v1.12h.04c.39-.73 1.33-1.5 2.73-1.5 2.92 0 3.46 1.92 3.46 4.42v4.16h-2.9v-3.9c0-1.02-.02-2.34-1.42-2.34-1.42 0-1.64 1.11-1.64 2.25v3.99h-2.9V10.3Z" fill="currentColor" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6.5A2.5 2.5 0 0 1 5.5 4h13A2.5 2.5 0 0 1 21 6.5v11A2.5 2.5 0 0 1 18.5 20h-13A2.5 2.5 0 0 1 3 17.5v-11Zm2.2-.5 6.8 5.3 6.8-5.3H5.2Zm13.3 1.8-6.6 5.1a1.2 1.2 0 0 1-1.3 0L5 7.8v9.7c0 .27.22.5.5.5h13c.28 0 .5-.23.5-.5V7.8Z" fill="currentColor" />
    </svg>
  );
}

export default function SocialLinks({ className = '' }) {
  return (
    <div className={`social-links ${className}`.trim()} aria-label="Social media links">
      {socialLinks.map(({ label, href, Icon }) => {
        const isEmail = href.startsWith('mailto:');

        return (
          <a
            key={label}
            href={href}
            target={isEmail ? undefined : '_blank'}
            rel={isEmail ? undefined : 'noopener noreferrer'}
            aria-label={label}
            title={label}
            className="social-link"
          >
            <Icon />
          </a>
        );
      })}
    </div>
  );
}
