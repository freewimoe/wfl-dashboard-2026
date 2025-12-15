import { NavLink } from 'react-router-dom';

export function Sidebar() {
  return (
    <aside className="dashboard__sidebar">
      <nav>
        <span className="sidebar__section">Übersicht</span>
        <ul>
          <li><NavLink to="/" end className={({ isActive }) => isActive ? "is-active" : ""}>Status</NavLink></li>
          <li><NavLink to="/projects" className={({ isActive }) => isActive ? "is-active" : ""}>Projekte</NavLink></li>
          <li><NavLink to="/news" className={({ isActive }) => isActive ? "is-active" : ""}>Nachrichten</NavLink></li>
          <li><NavLink to="/schedule" className={({ isActive }) => isActive ? "is-active" : ""}>Terminplan</NavLink></li>
          <li><NavLink to="/tasks" className={({ isActive }) => isActive ? "is-active" : ""}>Aufgaben</NavLink></li>
        </ul>
        <span className="sidebar__section">Verwaltung</span>
        <ul>
          <li><NavLink to="/users" className={({ isActive }) => isActive ? "is-active" : ""}>Benutzer</NavLink></li>
          <li><NavLink to="/settings" className={({ isActive }) => isActive ? "is-active" : ""}>Einstellungen</NavLink></li>
          <li><NavLink to="/guides" className={({ isActive }) => isActive ? "is-active" : ""}>Anleitungen</NavLink></li>
        </ul>
      </nav>
    </aside>
  )
}
