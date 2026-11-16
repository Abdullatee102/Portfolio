import { ArrowRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import './hero.css';

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="container hero-content">
        <div className="hero-text">
          <span className="hero-badge">Welcome to my portfolio</span>
          <h1>Hi, I'm <span className="highlight">Abdullateef Opeyemi</span></h1>
          <h2>Mobile, Web, Backend & Blockchain Developer</h2>
          <p>
            I build software across the development stack—from responsive web interfaces and cross-platform mobile applications with React Native, to structured RESTful backend APIs with Express and PostgreSQL, and smart contract integrations on Ethereum.
          </p>
          
          <div className="hero-cta">
            <a href="#projects" className="btn primary-btn">
              Explore Projects <ArrowRight size={18} />
            </a>
            <a href="https://github.com/Abdullatee102/" target="_blank" rel="noreferrer" className="btn secondary-btn">
              <FaGithub size={18} /> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
