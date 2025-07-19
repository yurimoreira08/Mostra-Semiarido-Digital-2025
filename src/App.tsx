import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Schedule from './components/Schedule';
import SubmitProject from './components/SubmitProject';
import TargetAudience from './components/TargetAudience';
import Registration from './components/Registration';
import Organizers from './components/Organizers';
import Footer from './components/Footer';
import './utils/animations.css';

function App() {
  useEffect(() => {
    // Update document title
    document.title = "Mostra Semiárido Digital 2025 - Picos, PI";
    
    // Smooth scroll functionality for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (anchor && anchor.hash && anchor.hash.startsWith('#')) {
        e.preventDefault();
        
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Adjust for navbar height
            behavior: 'smooth'
          });
          
          // Update URL without causing a page jump
          history.pushState(null, '', anchor.hash);
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Schedule />
      <SubmitProject />
      <TargetAudience />
      <Registration />
      <Organizers />
      <Footer />
    </div>
  );
}

export default App;