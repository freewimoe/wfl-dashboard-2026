import { useEffect, useState } from 'react';
import { fetchDashboardSummary, fetchSystemStatuses } from '../api/endpoints';
import type { StatusSummary, SystemStatusRead } from '../api/types';

export function DashboardHome() {
  const [summary, setSummary] = useState<StatusSummary | null>(null);
  const [systemStatuses, setSystemStatuses] = useState<SystemStatusRead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [summaryData, statusData] = await Promise.all([
          fetchDashboardSummary(),
          fetchSystemStatuses(),
        ]);
        setSummary(summaryData);
        setSystemStatuses(statusData);
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
        setError('Daten konnten nicht geladen werden.');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) {
    return <div className="dashboard__main">Lade Daten...</div>;
  }

  if (error) {
    return <div className="dashboard__main error">{error}</div>;
  }

  const activeProjectsCount = summary?.projects.filter(p => p.status === 'green').length || 0;
  const totalProjects = summary?.projects.length || 0;
  
  const upcomingEventsCount = summary?.upcoming_events.length || 0;
  const nextEvent = summary?.upcoming_events[0];

  const allSystemsOk = systemStatuses.every(s => s.status === 'ok');

  return (
    <main className="dashboard__main">
      <section className="summary-grid">
        <article className="summary-card">
          <h2>Aktive Projekte</h2>
          <p className="summary-card__value">{activeProjectsCount}</p>
          <p className="summary-card__note">Von {totalProjects} Projekten</p>
        </article>
        <article className="summary-card">
          <h2>Anstehende Events</h2>
          <p className="summary-card__value">{upcomingEventsCount}</p>
          <p className="summary-card__note">
            {nextEvent 
              ? `Nächster: ${new Date(nextEvent.start).toLocaleDateString()} ${new Date(nextEvent.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}` 
              : 'Keine anstehenden Events'}
          </p>
        </article>
        <article className="summary-card">
          <h2>Offene Aufgaben</h2>
          <p className="summary-card__value">--</p>
          <p className="summary-card__note">Daten noch nicht verfügbar</p>
        </article>
        <article className="summary-card">
          <h2>Systemstatus</h2>
          <p className={`summary-card__value ${allSystemsOk ? 'is-positive' : 'is-negative'}`}>
            {allSystemsOk ? 'Alle Systeme stabil' : 'Probleme erkannt'}
          </p>
          <p className="summary-card__note">
            {systemStatuses.length} Dienste überwacht
          </p>
        </article>
      </section>

      <section className="content-grid">
        <div className="panel">
          <header className="panel__header">
            <h3>Neuigkeiten</h3>
            <a href="/news">Mehr</a>
          </header>
          <ul className="news-list">
            {summary?.recent_news.map(news => (
              <li key={news.id}>
                <span className="news-list__title">{news.title}</span>
                <span className="news-list__meta">
                  {news.created_at ? new Date(news.created_at).toLocaleDateString() : ''} 
                  {news.tags ? ` · ${news.tags.join(', ')}` : ''}
                </span>
              </li>
            ))}
            {(!summary?.recent_news || summary.recent_news.length === 0) && (
              <li>Keine Neuigkeiten</li>
            )}
          </ul>
        </div>

        <div className="panel">
          <header className="panel__header">
            <h3>Termine</h3>
            <a href="/events">Kalender öffnen</a>
          </header>
          <ul className="event-list">
            {summary?.upcoming_events.map(event => (
              <li key={event.id}>
                <div>
                  <strong>
                    {new Date(event.start).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                  </strong>
                  <span>{event.title}</span>
                </div>
                <span>Raum {event.room_id}</span>
              </li>
            ))}
             {(!summary?.upcoming_events || summary.upcoming_events.length === 0) && (
              <li>Keine anstehenden Termine</li>
            )}
          </ul>
        </div>

        <div className="panel">
          <header className="panel__header">
            <h3>Aufgabenfortschritt</h3>
            <a href="/tasks">Alle Aufgaben</a>
          </header>
          <div className="tasks-progress">
            <div className="tasks-progress__bar">
              <div className="tasks-progress__fill tasks-progress__fill--62" />
            </div>
            <p>Platzhalter für Aufgaben-Statistik</p>
            <ul>
              <li>Datenintegration folgt</li>
            </ul>
          </div>
        </div>

        <div className="panel">
          <header className="panel__header">
            <h3>Letzte Aktivitäten</h3>
            <a href="/activity">Aktivitätsprotokoll</a>
          </header>
          <ul className="activity-list">
             <li>Platzhalter für Aktivitäten</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
