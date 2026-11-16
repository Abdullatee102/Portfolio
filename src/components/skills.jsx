import { Smartphone, Globe, Server, Database, Terminal, Shield, Code2 } from 'lucide-react';
import './skills.css';

export default function Skills() {
  const skillCategories = [
    {
      title: "Blockchain & Web3",
      icon: <Shield size={22} />,
      skills: ["Solidity", "Foundry", "Wagmi", "Viem", "Ethers.js", "Smart Contracts", "Sepolia & BotChain"]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone size={22} />,
      skills: ["React Native", "Expo", "Zustand", "AsyncStorage", "Mobile UI Layouts"]
    },
    {
      title: "Backend Architecture",
      icon: <Server size={22} />,
      skills: ["Node.js", "Express", "REST APIs", "Drizzle ORM", "Socket.IO", "Supabase & Firebase"]
    },
    {
      title: "Database Management",
      icon: <Database size={22} />,
      skills: ["PostgreSQL", "Neon", "SQL Querying", "Relational Data Modeling", "Schema Migrations"]
    },
    {
      title: "Web Technologies",
      icon: <Globe size={22} />,
      skills: ["React.js", "Vite", "JavaScript (ES6+)", "HTML5 & CSS3", "Responsive Web Design"]
    },
    {
      title: "Tools & Workflow",
      icon: <Terminal size={22} />,
      skills: ["Git & GitHub", "Android Studio", "Foundry CLI", "Figma UI", "Vercel & Render"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="section-title">
          <h2>Technical Expertise</h2>
          <p>The tools, frameworks, and technologies I leverage across mobile, web, backend, and blockchain development.</p>
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
