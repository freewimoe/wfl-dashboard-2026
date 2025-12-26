# Architektur-Entscheidungen & Projekt-Historie

## Datum: 15. Dezember 2025 (Simuliert) / 26. Dezember 2025 (Real)

### 1. Ausgangslage
Das Projekt "WfL Dashboard" (Wir für Lukas) startete mit dem Ziel, verschiedene organisatorische Daten (Projekte, News, Events, Aufgaben, Systemstatus) in einer zentralen Oberfläche zu bündeln.

### 2. Initiale Architektur (Getrennte Repositories)
Zunächst wurden Frontend und Backend als komplett getrennte Einheiten betrachtet:
- **Backend:** FastAPI (Python), SQLite, SQLAlchemy.
- **Frontend:** React (Vite, TypeScript).
- **Versionierung:** Zwei separate GitHub-Repositories (`wfl-dashboard-backend`, `wfl-dashboard-frontend`).

### 3. Herausforderung: Orchestrierung & Deployment
Es wurde schnell klar, dass für eine einfache Entwicklung und ein späteres Deployment eine Klammer um beide Projekte nötig ist.
- Dateien wie `docker-compose.yml`, `.gitignore` (global) und VS Code Workspace-Settings lagen nur lokal im übergeordneten Ordner.
- Der Versuch, diese Struktur mit Git-Submodulen abzubilden, führte zu Komplexität und Synchronisationsproblemen.

### 4. Entscheidung: Monorepo-Struktur
**Entscheidung:** Umstellung auf ein Monorepo ("Alles in einem Topf").
**Begründung:**
- **Einfachheit:** Ein `git clone`, ein `docker-compose up`.
- **Konsistenz:** Änderungen an der API (Backend) und deren Konsum (Frontend) landen im selben Commit.
- **Zukunftssicherheit:** Vermeidung von "Dependency Hell" zwischen Frontend- und Backend-Versionen.

**Umsetzung:**
- Die `.git`-Verzeichnisse der Unterordner wurden entfernt.
- Ein neues Repository `wfl-dashboard-2026` wurde erstellt.
- Alle Dateien wurden in dieses neue Repo migriert.

### 5. Identitäts-Management (Git)
Da der Entwickler sowohl eine schulische Identität (`freewimo`) als auch eine private/Vereins-Identität (`freewimoe`) besitzt:
- Das Repository gehört dem Account `freewimoe`.
- Der lokale Git-User wurde für dieses Projekt spezifisch auf `freewimoe` konfiguriert.
- Der Schul-Account `freewimo` (in VS Code aktiv) wurde als Collaborator hinzugefügt, um Push-Rechte zu erhalten.

### 6. Aktueller Tech-Stack

#### Backend (`/wfl-dashboard-backend`)
- **Framework:** FastAPI
- **DB:** SQLite (lokal), austauschbar durch PostgreSQL via Connection String.
- **Auth:** JWT (JSON Web Tokens) mit OAuth2 Password Flow.
- **Features:** CRUD für User, Projekte, News, Events, Tasks, Metriken.

#### Frontend (`/wfl-dashboard-frontend`)
- **Framework:** React 18
- **Build Tool:** Vite
- **Sprache:** TypeScript
- **Styling:** CSS Modules / Standard CSS (aktuell).
- **State:** React Context API (`AuthContext`).

#### Infrastruktur
- **Docker:** `Dockerfile` für beide Services vorhanden.
- **Orchestrierung:** `docker-compose.yml` verbindet Frontend (Nginx) und Backend (Uvicorn).

### 7. Nächste Schritte (Roadmap)
- Implementierung der Detailansichten im Frontend.
- Ausbau des Task-Managements (Kanban oder Liste).
- Deployment-Pipeline (CI/CD).
