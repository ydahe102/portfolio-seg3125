import React from 'react';

// Contact details are stored together so they are easy to update.
const contactLinks = [
  {
    icon: 'email',
    label: 'Email',
    value: 'ydahe102@uottawa.ca',
    href: 'mailto:ydahe102@uottawa.ca',
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: '@ydahe102',
    href: 'https://github.com/ydahe102',
    external: true,
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'Yasmine Bachir',
    href: 'https://www.linkedin.com/in/yasminebachirr',
    external: true,
  },
];

function ContactIcon({ name }) {
  // Each contact option uses its matching icon.
  const paths = {
    email: <path d="M3 5h18v14H3V5Zm1.8 1.8L12 12l7.2-5.2M4.8 17.2l5-4.5m9.4 4.5-5-4.5" />,
    github: <path d="M12 2.7a9.3 9.3 0 0 0-2.9 18.1c.5.1.6-.2.6-.5v-1.8c-2.7.6-3.3-1.1-3.3-1.1-.4-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 0 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.2-4.5-1.1-4.5-4.6 0-1 .4-1.9 1-2.5-.1-.2-.4-1.2.1-2.5 0 0 .8-.3 2.6 1a9 9 0 0 1 4.8 0c1.8-1.2 2.6-1 2.6-1 .5 1.3.2 2.3.1 2.5.6.7 1 1.5 1 2.5 0 3.6-2.3 4.4-4.5 4.6.4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5A9.3 9.3 0 0 0 12 2.7Z" />,
    linkedin: <path d="M19 1H5a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4V5a4 4 0 0 0-4-4ZM8 19H5V9h3v10ZM6.5 7.7A1.75 1.75 0 1 1 6.5 4.2a1.75 1.75 0 0 1 0 3.5ZM20 19h-3v-4.9c0-1.2 0-2.6-1.6-2.6s-1.9 1.3-1.9 2.6V19h-3V9h2.9v1.4c.4-.8 1.4-1.6 2.8-1.6 3 0 3.6 2 3.6 4.6L20 19Z" />,
  };

  return (
    <span className="contact-icon" aria-hidden="true">
      <svg viewBox="0 0 24 24" focusable="false">{paths[name]}</svg>
    </span>
  );
}

function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="portfolio-container">
        <div className="contact-card">
          <div className="contact-copy">
            <p className="eyebrow eyebrow-light">Contact</p>
            <h2 id="contact-title">Let&apos;s connect.</h2>
            <p>
              Feel free to reach out by email or connect with me online.
            </p>
          </div>

          <div className="contact-list">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className="contact-link"
              >
                <ContactIcon name={link.icon} />
                <span>
                  <small>{link.label}</small>
                  <strong>{link.value}</strong>
                </span>
                <span className="contact-arrow" aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>

        <footer className="site-footer">
          <p>© {currentYear} Yasmine Bachir</p>
          <a href="#about">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
