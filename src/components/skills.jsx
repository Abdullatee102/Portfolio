import React from 'react';
import { Smartphone, Globe, Database, Shield, Cpu, Terminal, Code2 } from 'lucide-react';
import './skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <Smartphone size={22} />,
      skills: ["React Native", "Expo", "Zustand State Management", "AsyncStorage", "Mobile UI Layouts"]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={22} />,
      skills: ["React.js", "Vite", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Web Design"]
    },
    {
      title: "Backend & Cloud Services",
      icon: <Database size={22} />,
      skills: ["Supabase", "Express.js", "Firebase", "Node.js", "REST APIs"]
    },
    {
      title: "Tools & Version Control",
      icon: <Terminal size={22} />,
      skills: ["Git & GitHub", "Figma Design UI", "GitHub Desktop", "Android Studio"]
    },
    {
      title: "Database Management",
      icon: <Cpu size={22} />,
      skills: ["SQL Querying", "PostgreSQL", "Relational Data Modeling"]
    },
    {
      title: "Blockchain & Security",
      icon: <Shield size={22} />,
      skills: ["Solidity", "Remix IDE", "Smart Contracts", "Cybersecurity Fundamentals"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Expertise</h2>
          <p>The tools, frameworks, and technologies I leverage to build digital products.</p>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">
                    <Code2 size={14} /> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}