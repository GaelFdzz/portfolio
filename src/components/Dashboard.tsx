import React from 'react';
import '../styles/Dashboard.css';

const skills = [
  { name: 'JavaScript', level: 85 },
  { name: 'TypeScript', level: 80 },
  { name: 'React', level: 90 },
  { name: 'Node.js', level: 70 },
  { name: 'Flutter', level: 60 },
];

const projects = [
  { id: 1, name: 'E-commerce App', status: 'Completado', year: 2023 },
  { id: 2, name: 'Dashboard de Ventas', status: 'En progreso', year: 2024 },
  { id: 3, name: 'Portafolio Personal', status: 'Completado', year: 2024 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <section className="stats-section">
        <div className="stat-box">
          <h2>Proyectos</h2>
          <p>3 Completados</p>
        </div>
        <div className="stat-box">
          <h2>Experiencia</h2>
          <p>2 Años</p>
        </div>
      </section>

      <section className="skills-section">
        <h2>Habilidades Técnicas</h2>
        {skills.map((skill) => (
          <div key={skill.name} className="skill">
            <span>{skill.name}</span>
            <div className="skill-bar-container">
              <div
                className="skill-bar"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </section>

      <section className="projects-section">
        <h2>Proyectos Destacados</h2>
        <table className="projects-table">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Estado</th>
              <th>Año</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.name}</td>
                <td>{project.status}</td>
                <td>{project.year}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default Dashboard