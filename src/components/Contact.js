import React from 'react';

function Contact() {
  const currentYear = new Date().getFullYear();

  const links = [
    {
      href: 'mailto:ydahe102@uottawa.ca',
      icon: 'bi-envelope-fill',
      label: 'ydahe102@uottawa.ca',
    },
    {
      href: 'https://github.com/ydahe102',
      icon: 'bi-github',
      label: 'GitHub',
      external: true,
    },
    {
      href: 'https://www.linkedin.com/in/yasminebachirr',
      icon: 'bi-linkedin',
      label: 'LinkedIn',
      external: true,
    },
  ];

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="section-heading">
          <span className="section-kicker">Contact</span>
          <h2>Let's connect</h2>
          <p>
            Open to front-end development, software testing, automation, and UI/UX opportunities.
          </p>
        </div>

        <div className="contact-links">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="contact-link"
            >
              <i className={`bi ${link.icon}`}></i>
              {link.label}
            </a>
          ))}
        </div>

        <p className="copyright">&copy; {currentYear} Yasmine Bachir</p>
      </div>
    </section>
  );
}

export default Contact;
