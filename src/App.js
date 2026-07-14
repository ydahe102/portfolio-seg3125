import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResumeSnapshot from './components/ResumeSnapshot';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <Hero />
              <ResumeSnapshot />
              <Projects />
              <Contact />
            </>
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
