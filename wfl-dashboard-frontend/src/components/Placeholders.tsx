import { useState } from 'react';

export function Projects() {
  const projects = [
    { id: 1, title: "Sommerfest 2025", status: "green", lead: "Sarah Meyer", deadline: "2025-07-15" },
    { id: 2, title: "Website Relaunch", status: "yellow", lead: "Admin", deadline: "2025-04-01" },
    { id: 3, title: "Spendenaktion Winter", status: "green", lead: "Walter Boes", deadline: "2025-12-01" },
    { id: 4, title: "Renovierung Jugendraum", status: "red", lead: "Sarah Meyer", deadline: "2025-03-10" },
  ];

  return (
    <div className="panel">
      <header className="panel__header">
        <h3>Projekte</h3>
        <button className="btn-primary">Neues Projekt</button>
      </header>
      <div className="panel__content">
        <table className="data-table">
          <thead>
            <tr>
              <th>Titel</th>
              <th>Status</th>
              <th>Verantwortlich</th>
              <th>Deadline</th>
              <th>Aktionen</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(p => (
              <tr key={p.id}>
                <td>{p.title}</td>
                <td>
                  <span className={`badge badge--${p.status}`}>
                    {p.status === 'green' ? 'Aktiv' : p.status === 'yellow' ? 'Verzögert' : 'Kritisch'}
                  </span>
                </td>
                <td>{p.lead}</td>
                <td>{new Date(p.deadline).toLocaleDateString()}</td>
                <td><a href="#" className="link-primary">Bearbeiten</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function News() {
  const news = [
    { id: 1, title: "Pressekonferenz zur neuen Sozialberatung", date: "2025-12-08", category: "Öffentlich" },
    { id: 2, title: "Raumplanung für Adventskonzert abgeschlossen", date: "2025-12-07", category: "Intern" },
    { id: 3, title: "Förderantrag „Sport für alle“ bewilligt", date: "2025-12-05", category: "Finanzen" },
    { id: 4, title: "Protokoll der Vorstandssitzung", date: "2025-12-01", category: "Intern" },
  ];

  return (
    <div className="panel">
      <header className="panel__header">
        <h3>Nachrichten</h3>
        <button className="btn-primary">Beitrag erstellen</button>
      </header>
      <div className="panel__content">
        <div className="news-feed">
          {news.map(n => (
            <div key={n.id} className="news-item">
              <div className="news-header">
                <span className="badge badge--blue">{n.category}</span>
                <small className="news-date">{new Date(n.date).toLocaleDateString()}</small>
              </div>
              <h4 className="news-title">{n.title}</h4>
              <p className="news-excerpt">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Schedule() {
  // Hinweis: Ersetzen Sie die 'src' URL unten durch die Einbettungs-URL Ihres eigenen Google Kalenders.
  // Anleitung: Google Kalender -> Einstellungen -> Kalender auswählen -> "Kalender integrieren" -> "Code zum Einbetten" anpassen.
  const calendarUrl = "https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FBerlin&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0&src=7rgm8hgu2orjitrip88camalug%40group.calendar.google.com&color=%234285F4";

  return (
    <div className="panel calendar-panel">
      <header className="panel__header">
        <h3>Terminplan</h3>
      </header>
      <div className="panel__content calendar-container">
        <iframe 
          src={calendarUrl}
          className="calendar-iframe"
          title="Google Calendar"
        ></iframe>
      </div>
    </div>
  );
}

export function Tasks() {
  const tasks = [
    { id: 1, title: "Jahresbericht finalisieren", assignee: "Admin", due: "2025-12-15", done: false },
    { id: 2, title: "Catering für Sommerfest anfragen", assignee: "Sarah Meyer", due: "2025-06-01", done: false },
    { id: 3, title: "Website-Backup prüfen", assignee: "Admin", due: "2025-12-10", done: true },
    { id: 4, title: "Newsletter Dezember versenden", assignee: "Walter Boes", due: "2025-12-20", done: false },
  ];

  return (
    <div className="panel">
      <header className="panel__header">
        <h3>Aufgaben</h3>
        <button className="btn-primary">Neue Aufgabe</button>
      </header>
      <div className="panel__content">
        <ul className="task-list">
          {tasks.map(t => (
            <li key={t.id} className={`task-item ${t.done ? 'is-done' : ''}`}>
              <input type="checkbox" checked={t.done} readOnly className="task-checkbox" aria-label={`Status von Aufgabe: ${t.title}`} />
              <div className="task-content">
                <div className={`task-title ${t.done ? 'is-done' : ''}`}>{t.title}</div>
                <small className="task-meta">{t.assignee} · Fällig: {new Date(t.due).toLocaleDateString()}</small>
              </div>
              <span className={`badge ${t.done ? 'badge--green' : 'badge--yellow'}`}>
                {t.done ? 'Erledigt' : 'Offen'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Users() {
  const users = [
    { id: 1, name: "Admin User", email: "admin@wfl.local", role: "Administrator", status: "Aktiv" },
    { id: 2, name: "Sarah Meyer", email: "sarah.meyer@wfl.local", role: "Mitarbeiter", status: "Aktiv" },
    { id: 3, name: "Thomas Müller", email: "thomas.mueller@wfl.local", role: "Vorstand", status: "Aktiv" },
    { id: 4, name: "Julia Weber", email: "julia.weber@wfl.local", role: "Mitarbeiter", status: "Abwesend" },
    { id: 5, name: "Michael Schmidt", email: "m.schmidt@wfl.local", role: "Ehrenamt", status: "Aktiv" },
    { id: 6, name: "Petra Klein", email: "p.klein@wfl.local", role: "Ehrenamt", status: "Aktiv" },
    { id: 7, name: "Andreas Wagner", email: "a.wagner@wfl.local", role: "Hausmeister", status: "Aktiv" },
    { id: 8, name: "Lisa Becker", email: "lisa.becker@wfl.local", role: "Jugendleitung", status: "Aktiv" },
    { id: 9, name: "Markus Schulz", email: "technik@wfl.local", role: "Technik", status: "Inaktiv" },
    { id: 10, name: "Gast Zugang", email: "gast@wfl.local", role: "Gast", status: "Inaktiv" },
  ];

  return (
    <div className="panel">
      <header className="panel__header">
        <h3>Benutzerverwaltung</h3>
        <button className="btn-primary">Benutzer einladen</button>
      </header>
      <div className="panel__content">
        <table className="data-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>E-Mail</th>
              <th>Rolle</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map(u => (
              <tr key={u.id}>
                <td><strong>{u.name}</strong></td>
                <td>{u.email}</td>
                <td>{u.role}</td>
                <td>
                  <span className={`badge badge--${u.status === 'Aktiv' ? 'green' : u.status === 'Abwesend' ? 'yellow' : 'red'}`}>
                    {u.status}
                  </span>
                </td>
                <td><a href="#" className="link-primary">Bearbeiten</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export function Settings() {
  return (
    <div className="panel">
      <header className="panel__header">
        <h3>Einstellungen</h3>
      </header>
      <div className="panel__content">
        <form className="settings-form">
          <div className="settings-group">
            <h4>Allgemein</h4>
            <div className="form-group">
              <label>Dashboard Titel</label>
              <input type="text" defaultValue="Wir für Lukas Dashboard" className="form-control" />
            </div>
            <div className="form-group">
              <label>Sprache</label>
              <select className="form-control">
                <option>Deutsch</option>
                <option>English</option>
              </select>
            </div>
          </div>
          
          <div className="settings-group">
            <h4>Benachrichtigungen</h4>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> E-Mail bei neuen Aufgaben
            </label>
            <label className="checkbox-label">
              <input type="checkbox" defaultChecked /> Wöchentlicher Bericht
            </label>
            <label className="checkbox-label">
              <input type="checkbox" /> System-Warnungen
            </label>
          </div>

          <button type="button" className="btn-primary">Speichern</button>
        </form>
      </div>
    </div>
  );
}

export function Guides() {
  const [activeGuide, setActiveGuide] = useState<number | null>(null);

  const guides = [
    { 
      id: 1,
      title: "Erste Schritte", 
      desc: "Einführung in das Dashboard und die wichtigsten Funktionen.",
      content: (
        <div>
          <h4>Willkommen im Wir für Lukas Dashboard!</h4>
          <p>Dieses Dashboard ist Ihre zentrale Anlaufstelle für alle Aktivitäten, Projekte und Neuigkeiten der Gemeinde.</p>
          
          <h5 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Die Benutzeroberfläche</h5>
          <ul style={{paddingLeft: '1.5rem', marginBottom: '1.5rem'}}>
            <li><strong>Sidebar (Links):</strong> Hier finden Sie die Hauptnavigation zu allen Bereichen wie Projekte, Nachrichten und Kalender.</li>
            <li><strong>Status-Übersicht:</strong> Auf der Startseite sehen Sie auf einen Blick, was gerade wichtig ist.</li>
            <li><strong>Benutzer-Menü (Oben rechts):</strong> Hier können Sie sich abmelden oder Ihr Profil bearbeiten.</li>
          </ul>

          <h5 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Erste Aufgaben</h5>
          <p>Wir empfehlen Ihnen, zunächst Ihr Profil zu überprüfen und sich mit dem Kalender vertraut zu machen.</p>
        </div>
      )
    },
    { 
      id: 2,
      title: "Projekte verwalten", 
      desc: "Wie man neue Projekte anlegt, Teams zuweist und Meilensteine setzt.",
      content: (
        <div>
          <h4>Projektmanagement leicht gemacht</h4>
          <p>Im Bereich "Projekte" können Sie alle laufenden Initiativen der Gemeinde einsehen und verwalten.</p>

          <h5 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Neues Projekt anlegen</h5>
          <ol style={{paddingLeft: '1.5rem', marginBottom: '1.5rem'}}>
            <li>Navigieren Sie zu "Projekte".</li>
            <li>Klicken Sie oben rechts auf "Neues Projekt".</li>
            <li>Füllen Sie Titel, Beschreibung und Verantwortlichen aus.</li>
          </ol>

          <h5 style={{marginTop: '1.5rem', marginBottom: '0.5rem'}}>Status & Fortschritt</h5>
          <p>Jedes Projekt hat einen Status (z.B. "In Planung", "Aktiv", "Abgeschlossen"). Halten Sie diesen aktuell, damit alle Bescheid wissen.</p>
        </div>
      )
    },
    { 
      id: 3,
      title: "Kalender-Integration", 
      desc: "Anleitung zur Verknüpfung von Google Kalendern.",
      content: (
        <div>
          <h4>Kalender einbinden</h4>
          <p>Der Kalender zeigt automatisch die Termine der Lukasgemeinde an.</p>
          <p>Um Termine hinzuzufügen, nutzen Sie bitte Ihren Google Kalender Zugang, der mit dem Dashboard verknüpft ist.</p>
        </div>
      )
    },
    { 
      id: 4,
      title: "Benutzerrollen", 
      desc: "Übersicht über Rechte und Rollen im System.",
      content: (
        <div>
          <h4>Wer darf was?</h4>
          <ul style={{paddingLeft: '1.5rem'}}>
            <li><strong>Administrator:</strong> Voller Zugriff auf alle Einstellungen und Benutzerverwaltung.</li>
            <li><strong>Vorstand:</strong> Kann Projekte genehmigen und alle Bereiche einsehen.</li>
            <li><strong>Mitarbeiter:</strong> Kann Projekte bearbeiten, Nachrichten schreiben und Aufgaben verwalten.</li>
            <li><strong>Ehrenamt:</strong> Zugriff auf relevante Projekte und Aufgaben.</li>
            <li><strong>Gast:</strong> Nur Lesezugriff auf öffentliche Bereiche.</li>
          </ul>
        </div>
      )
    },
    { 
      id: 5,
      title: "FAQ", 
      desc: "Häufig gestellte Fragen und Antworten.",
      content: (
        <div>
          <h4>Häufige Fragen</h4>
          <dl>
            <dt style={{fontWeight: 'bold', marginTop: '1rem'}}>Ich habe mein Passwort vergessen. Was nun?</dt>
            <dd style={{marginLeft: '1rem', marginBottom: '1rem'}}>Bitte wenden Sie sich an den Administrator (admin@wfl.local), um Ihr Passwort zurückzusetzen.</dd>
            
            <dt style={{fontWeight: 'bold', marginTop: '1rem'}}>Kann ich das Dashboard auf dem Handy nutzen?</dt>
            <dd style={{marginLeft: '1rem', marginBottom: '1rem'}}>Ja, das Dashboard ist für mobile Geräte optimiert.</dd>
          </dl>
        </div>
      )
    },
  ];

  const activeGuideData = guides.find(g => g.id === activeGuide);

  return (
    <div className="panel">
      <header className="panel__header">
        <h3>{activeGuideData ? activeGuideData.title : "Anleitungen & Hilfe"}</h3>
        {activeGuideData && (
          <button onClick={() => setActiveGuide(null)} className="btn-primary" style={{fontSize: '0.8rem', padding: '0.25rem 0.75rem'}}>
            &larr; Zurück zur Übersicht
          </button>
        )}
      </header>
      <div className="panel__content">
        {activeGuideData ? (
          <div className="guide-content" style={{maxWidth: '800px', lineHeight: '1.6'}}>
            {activeGuideData.content}
          </div>
        ) : (
          <div className="card-grid">
            {guides.map((g) => (
              <div key={g.id} className="card">
                <h4>{g.title}</h4>
                <p className="guide-desc">{g.desc}</p>
                <button 
                  onClick={() => setActiveGuide(g.id)} 
                  className="guide-link" 
                  style={{background: 'none', border: 'none', padding: 0, cursor: 'pointer', textDecoration: 'underline', font: 'inherit', color: '#4361ee', fontWeight: 600}}
                >
                  Lesen &rarr;
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
