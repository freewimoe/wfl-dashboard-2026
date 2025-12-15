# Produktions-Log & Entwicklungs-Roadmap

## Phase 1: Backend Initialisierung (FastAPI)

- **Setup**: FastAPI Projekt mit `uvicorn` Server initialisiert.
- **Datenbank**: SQLite mit SQLAlchemy konfiguriert.
- **Modelle**:
  - `User`: Authentifizierung & Rollen.
  - `Project`: Projektverwaltung.
  - `News`: Interner News-Feed.
  - `Event`: Kalender-Events.
  - `Task`: Aufgabenmanagement.
  - `SystemStatus`: Überwachung externer Dienste.
- **API**:
  - CRUD Endpunkte implementiert.
  - `/status/summary` für die Dashboard-Übersicht hinzugefügt.
  - CORS konfiguriert, um Frontend-Zugriff zu erlauben.
- **Fixes**:
  - `AmbiguousForeignKeysError` im `User`-Modell bezüglich `Task`-Beziehungen behoben.

## Phase 2: Frontend Initialisierung (React + Vite)

- **Setup**: `wfl-dashboard-frontend` mit Vite (React + TypeScript) erstellt.
- **Struktur**: Saubere Ordnerstruktur etabliert (`backend` / `frontend` als Geschwister).
- **Komponenten**:
  - `Header`: Navigation und Platzhalter für Benutzerprofil.
  - `Sidebar`: Hauptmenü.
  - `DashboardHome`: Hauptansicht mit Widgets.
- **Styling**: Responsives Dashboard-Layout mit CSS umgesetzt.

## Phase 3: Integration

- **Netzwerk**: `axios` installiert.
- **API Client**:
  - `src/api/client.ts` erstellt (zeigt auf `http://localhost:8000/api`).
  - TypeScript Interfaces definiert, die die Backend Pydantic Schemas spiegeln.
- **Datenabruf**:
  - `DashboardHome` mit `/status/summary` und `/system/status` verbunden.
  - Ladezustände und Fehlerbehandlung implementiert.

## Phase 4: Daten-Seeding

- **Skript**: `seed_data.py` im Backend erstellt, um die Datenbank mit Testdaten zu füllen.
- **Anpassungen**:
  - `bcrypt` Version auf 4.0.1 gedowngradet (Kompatibilitätsproblem).
  - Modell-Constraints (Projektstatus) und Feldnamen (News Body, Event Creator) korrigiert.
  - Skript erfolgreich ausgeführt -> Dashboard zeigt nun echte Daten.

## Phase 5: Authentifizierung

- **Frontend Auth**:
  - `AuthContext` erstellt, um Login-Status global zu verwalten.
  - `Login`-Komponente mit Formular erstellt.
  - `App.tsx` aktualisiert: Zeigt Login-Seite, wenn nicht authentifiziert.
  - `client.ts`: Interceptor hinzugefügt, der das JWT-Token automatisch an Anfragen anhängt.
- **Test-User**:
  - Admin: `admin@wfl.local` / `admin123`
  - User: `sarah@wfl.local` / `user123`

## Nächste Schritte

- [x] **Authentifizierung**: Login-Seite und JWT-Handling im Frontend implementieren.
- [ ] **Detailansichten**: Seiten für Projekte, News und Events erstellen.
- [ ] **Aufgabenmanagement**: Aufgaben-Board oder Listenansicht implementieren.
