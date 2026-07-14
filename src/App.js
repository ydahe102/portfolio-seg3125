import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeSnapshot from './components/ResumeSnapshot';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="site-shell">
      {/* Lets keyboard users skip the navigation menu. */}
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <ResumeSnapshot />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
