import { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';
import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import './navbar.css';

export default function Navbar() {
  const [thme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <a href="#" className="nav-logo">
          <img src="/myProfile.jpg" alt="Abdullateef Opeyemi" className="nav-profile-img" />
          <span className="animated-name">Abdullateef Opeyemi</span>
        </a>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
          
          <div className="nav-socials mobile-only">
            <a href="https://github.com/Abdullatee102/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/abdullateef-opeyemi-8ba848287" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={20} /></a>
            <a href="https://x.com/Abdullatee102" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter size={20} /></a>
          </div>
        </div>

        <div className="nav-actions">
          <div className="nav-socials desktop-only">
            <a href="https://github.com/Abdullatee102/" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub size={18} /></a>
            <a href="https://linkedin.com/in/abdullateef-opeyemi-8ba848287" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
            <a href="https://x.com/Abdullatee102" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter size={18} /></a>
          </div>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button className="menu-btn" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
}