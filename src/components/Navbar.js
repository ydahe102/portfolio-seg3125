import React, { useEffect, useState } from 'react';

const navigation = [
  { id: 'about', label: 'About' },
  { id: 'process', label: 'How I work' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Highlights the section that is currently on the screen.
    const sections = navigation
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection) {
          setActiveSection(visibleSection.target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.3, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // The Escape key closes the mobile menu.
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setMenuOpen(false);
      }
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, []);

  const handleNavigation = () => setMenuOpen(false);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="portfolio-container nav-inner">
        <a className="brand" href="#about" onClick={handleNavigation}>
          <span className="brand-mark" aria-hidden="true">YB</span>
          <span>Yasmine Bachir</span>
        </a>

        <button
          className={`menu-toggle ${menuOpen ? 'is-open' : ''}`}
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`primary-navigation ${menuOpen ? 'is-open' : ''}`}
          aria-label="Primary navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? 'active' : ''}
              aria-current={activeSection === item.id ? 'location' : undefined}
              onClick={handleNavigation}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
