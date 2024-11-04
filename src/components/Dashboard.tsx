import React from 'react';
import '../styles/Dashboard.css';

const Dashboard: React.FC = () => {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Bienvenido al Dashboard</h1>
      </header>
      <nav className="dashboard-nav">
        <ul>
          <li><a href="#overview">Resumen</a></li>
          <li><a href="#reports">Reportes</a></li>
          <li><a href="#settings">Configuraciones</a></li>
          <li><a href="#logout">Cerrar Sesión</a></li>
        </ul>
      </nav>
      <main className="dashboard-main">
        <section id="overview">
          <h2>Resumen</h2>
          <p>Aquí puedes ver un resumen de tus datos y estadísticas.</p>
        </section>
        <section id="reports">
          <h2>Reportes</h2>
          <p>Accede a tus reportes y análisis aquí.</p>
        </section>
        <section id="settings">
          <h2>Configuraciones</h2>
          <p>Configura tus preferencias y ajustes.</p>
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
