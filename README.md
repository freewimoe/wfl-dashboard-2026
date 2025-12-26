# WfL Dashboard (Wir für Lukas)

The **WfL Dashboard** is a centralized platform designed to aggregate and visualize critical organizational data for the "Wir für Lukas" association. It serves as a "Single Pane of Glass" for project status, internal news, upcoming events, tasks, and system health monitoring.

This repository is a **Monorepo** containing both the backend API and the frontend user interface, orchestrated via Docker.

---

## 🇬🇧 Part 1: Technical Documentation (English)

### 🏗 Architecture & Tech Stack

The project follows a modern, decoupled Client-Server architecture.

#### Backend (`/wfl-dashboard-backend`)
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python 3.10+) - High-performance, easy-to-learn, fast to code, ready for production.
- **Database ORM:** [SQLAlchemy](https://www.sqlalchemy.org/) (Async support).
- **Database:** SQLite (default for dev) / PostgreSQL (production ready).
- **Authentication:** OAuth2 with Password Flow + JWT (JSON Web Tokens).
- **Validation:** Pydantic models for strict data validation and serialization.
- **Testing:** Pytest for unit and integration tests.

#### Frontend (`/wfl-dashboard-frontend`)
- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) - Next Generation Frontend Tooling.
- **Language:** TypeScript - For type safety and better developer experience.
- **State Management:** React Context API (for Auth) + Local State.
- **HTTP Client:** Axios with interceptors for automatic token injection.
- **Styling:** CSS Modules / Standard CSS.

#### Infrastructure
- **Containerization:** Docker & Docker Compose.
- **Reverse Proxy:** Nginx (serving the frontend and proxying API requests in production setups).

### 🔑 Key Features

1.  **Role-Based Access Control (RBAC):**
    - **Admin:** Full access to user management and content creation.
    - **User:** Read access to dashboard, ability to manage own profile.
2.  **Unified Dashboard:**
    - Aggregates data from multiple internal domains (Projects, News, Events).
    - **System Status:** Monitors health of external services (Mail, Web, DB).
3.  **Security:**
    - Passwords hashed using `bcrypt`.
    - Stateless authentication via JWT.
    - CORS configured for secure cross-origin requests.

### 🚀 Getting Started

#### Prerequisites
- Docker & Docker Compose installed.

#### Quick Start (Recommended)
1.  Clone the repository:
    ```bash
    git clone https://github.com/freewimoe/wfl-dashboard-2026.git
    cd wfl-dashboard-2026
    ```
2.  Start the application:
    ```bash
    docker-compose up --build
    ```
3.  Access the application:
    - **Frontend:** [http://localhost:3000](http://localhost:3000)
    - **Backend API Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)

#### Default Credentials
- **Admin:** `admin@wfl.local` / `admin123`
- **User:** `sarah@wfl.local` / `user123`

---

## 🇩🇪 Teil 2: Technische Dokumentation (Deutsch)

### 🏗 Architektur & Technologie-Stack

Das Projekt folgt einer modernen, entkoppelten Client-Server-Architektur.

#### Backend (`/wfl-dashboard-backend`)
- **Framework:** [FastAPI](https://fastapi.tiangolo.com/) (Python 3.10+) – Hochperformant, asynchron und typensicher.
- **Datenbank ORM:** [SQLAlchemy](https://www.sqlalchemy.org/) (mit Async-Support).
- **Datenbank:** SQLite (Standard für Entwicklung) / PostgreSQL (Produktionsbereit).
- **Authentifizierung:** OAuth2 Password Flow + JWT (JSON Web Tokens).
- **Validierung:** Pydantic-Modelle für strikte Datenvalidierung und Serialisierung.
- **Testing:** Pytest für Unit- und Integrationstests.

#### Frontend (`/wfl-dashboard-frontend`)
- **Framework:** [React 18](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/) – Extrem schneller Build-Prozess.
- **Sprache:** TypeScript – Für Typsicherheit und bessere Wartbarkeit.
- **State Management:** React Context API (für Auth) + Lokaler State.
- **HTTP Client:** Axios mit Interceptors (automatische Token-Mitgabe).
- **Styling:** CSS Modules / Standard CSS.

#### Infrastruktur
- **Containerisierung:** Docker & Docker Compose.
- **Reverse Proxy:** Nginx (liefert das Frontend aus und leitet API-Anfragen weiter).

### 🔑 Hauptfunktionen

1.  **Rollenbasierte Zugriffskontrolle (RBAC):**
    - **Admin:** Voller Zugriff auf Benutzerverwaltung und Inhaltserstellung.
    - **User:** Lesezugriff auf das Dashboard, Verwaltung des eigenen Profils.
2.  **Zentrales Dashboard:**
    - Bündelt Daten aus verschiedenen internen Bereichen (Projekte, News, Termine).
    - **Systemstatus:** Überwacht die Gesundheit externer Dienste (Mail, Web, DB).
3.  **Sicherheit:**
    - Passwörter werden mit `bcrypt` gehasht.
    - Zustandslose Authentifizierung via JWT.
    - CORS-Konfiguration für sichere Cross-Origin-Anfragen.

### 🚀 Erste Schritte

#### Voraussetzungen
- Docker & Docker Compose müssen installiert sein.

#### Schnellstart (Empfohlen)
1.  Repository klonen:
    ```bash
    git clone https://github.com/freewimoe/wfl-dashboard-2026.git
    cd wfl-dashboard-2026
    ```
2.  Anwendung starten:
    ```bash
    docker-compose up --build
    ```
3.  Zugriff:
    - **Frontend:** [http://localhost:3000](http://localhost:3000)
    - **Backend API Docs:** [http://localhost:8000/docs](http://localhost:8000/docs)

#### Standard-Zugangsdaten
- **Admin:** `admin@wfl.local` / `admin123`
- **User:** `sarah@wfl.local` / `user123`

---

### 📂 Projektstruktur / Project Structure

```
wfl-dashboard-2026/
├── docker-compose.yml      # Orchestration for Frontend & Backend
├── MANUAL.md               # Detailed User & Concept Manual (German)
├── wfl-dashboard-backend/  # Python FastAPI Application
│   ├── app/
│   │   ├── core/           # Config & Security
│   │   ├── db/             # Database Models & Session
│   │   ├── routes/         # API Endpoints
│   │   └── schemas/        # Pydantic Data Models
│   ├── tests/              # Pytest Suite
│   └── Dockerfile
└── wfl-dashboard-frontend/ # React TypeScript Application
    ├── src/
    │   ├── api/            # Axios Client & Types
    │   ├── components/     # UI Components
    │   ├── context/        # Global State (Auth)
    │   └── pages/          # Route Views
    └── Dockerfile
```
