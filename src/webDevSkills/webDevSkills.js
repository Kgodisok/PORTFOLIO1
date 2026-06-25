import {
  SiPython,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiReact,
  SiTypescript,
  SiFlask,
  SiNodedotjs,
  SiExpress,
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiJson,
  SiGit,
  SiGithub,
  SiFigma
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

import './webDevSkills.css'

const WebDev = () => {
  return (
    <section id="skills" className="skills-section">
      <h1>Technical Skills</h1>

      <div className="skills-grid">
        
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <div className="skill-list">
            <div className="skill-item">
              <SiPython size={22} color="#306998" /> Python
            </div>
            <div className="skill-item">
              <SiJavascript size={22} color="#f0db4f" /> JavaScript(ES6+)
            </div>
            <div className="skill-item">
              <FaJava size={22} color="#007396" /> Java
            </div>
          </div>
        </div>

      
        <div className="skill-card">
          <h3>Front‑End</h3>
          <div className="skill-list">
            <div className="skill-item">
              <SiHtml5 size={22} color="#e34c26" /> HTML5
            </div>
            <div className="skill-item">
              <SiCss size={22} color="#264de4" /> CSS3
            </div>
            
            <div className="skill-item">
              <SiTypescript size={22} color="#3178C6" /> TypeScript
            </div>
            <div className="skill-item">
              <SiReact size={22} color="#61DBFB" /> React
            </div>
            
          </div>
        </div>

       
        <div className="skill-card">
          <h3>Back‑End</h3>
          <div className="skill-list">
            <div className="skill-item">
              <SiFlask size={22} /> Flask API
            </div>
            <div className="skill-item">
              <SiNodedotjs size={22} color="#68A063" /> Node
            </div>
            <div className="skill-item">
              <SiExpress size={22} /> Express
            </div>
            <div className="skill-item">
              <SiSpringboot size={22} color="#6DB33F" /> Spring Boot
            </div>
          </div>
        </div>

        
        <div className="skill-card">
          <h3>Databases</h3>
          <div className="skill-list">
            <div className="skill-item">
              <SiMysql size={22} color="#00758F" /> MySQL
            </div>
            <div className="skill-item">
              <SiPostgresql size={22} color="#336791" /> PostgreSQL
            </div>
            <div className="skill-item">
              <SiJson size={22} /> JSON
            </div>
          </div>
        </div>

       
        <div className="skill-card">
          <h3>Development Tools</h3>
          <div className="skill-list">
            <div className="skill-item">
              <SiGit size={22} color="#F05032" /> Git
            </div>
            <div className="skill-item">
              <SiGithub size={22} /> GitHub
            </div>
            <div className="skill-item">
              <SiFigma size={22} color="#F24E1E" /> Figma
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WebDev;