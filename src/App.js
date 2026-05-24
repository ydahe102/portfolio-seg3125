import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowIWork from './components/HowIWork';
import Projects from './components/Projects';
import Contact from './components/Contact';
import HoldPage from './components/HoldPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <HowIWork />
              <Projects />
              <Contact />
            </>
          } />
          <Route path="/service" element={<HoldPage designNumber={1} title="Women's Only Hair Salon" category="Service Design" icon="bi-scissors" />} />
          <Route path="/memoire" element={<HoldPage designNumber={2} title="Memory Game" category="Game Design" icon="bi-puzzle" />} />
          <Route path="/ecommerce" element={<HoldPage designNumber={3} title="Clothing Store" category="E-commerce Design" icon="bi-bag" />} />
          <Route path="/analytics" element={<HoldPage designNumber={4} title="Analytics Dashboard" category="Data Visualization" icon="bi-bar-chart" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;