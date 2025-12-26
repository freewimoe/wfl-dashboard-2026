# WfL Dashboard - Handbuch & Konzept

## 1. Einführung und Konzept

Das **WfL Dashboard** ist eine zentrale Informationsplattform für den Verein "Wir für Lukas". Das Ziel ist es, verstreute Informationen (Termine, Projektstatus, interne Neuigkeiten, Server-Status) an einem einzigen Ort ("Single Pane of Glass") sichtbar zu machen.

### Das "Mono-Dashboard" Konzept
Anstatt für jeden Zweck ein eigenes Tool zu öffnen (Kalender, Jira, Monitoring-Tool, Intranet), aggregiert dieses Dashboard die wichtigsten Kennzahlen und Informationen. Es dient als Startseite für Vereinsmitglieder, um sich schnell einen Überblick über die aktuelle Lage zu verschaffen.

---

## 2. Architektur

Das System folgt einer modernen **Client-Server-Architektur** in einem **Monorepo**.

### 2.1 Backend (`wfl-dashboard-backend`)
Das Herzstück ist eine **FastAPI**-Anwendung (Python). Sie dient als REST-API und verwaltet die Datenhoheit.
- **Datenbank:** SQLite (Standard für Entwicklung), leicht auf PostgreSQL skalierbar.
- **Sicherheit:** Authentifizierung über JWT (JSON Web Tokens). Rollenbasierter Zugriff (Admin vs. User).
- **Dokumentation:** Automatische API-Doku unter `/docs` (Swagger UI).

### 2.2 Frontend (`wfl-dashboard-frontend`)
Die Benutzeroberfläche ist eine **React**-App (TypeScript), gebaut mit **Vite**.
- **Kommunikation:** Fragt Daten asynchron vom Backend ab.
- **Design:** Responsives Layout mit Sidebar-Navigation.

### 2.3 Containerisierung
Das System ist "Docker-native". Über `docker-compose` werden beide Dienste sowie (optional) Datenbanken und Reverse Proxies gestartet.

---

## 3. Installation & Start

### Voraussetzungen
- Git
- Docker & Docker Compose
- *Optional (für lokale Entwicklung ohne Docker):* Python 3.10+, Node.js 18+

### Schnellstart (Docker)
Dies ist die empfohlene Methode für den Betrieb.

1. **Repository klonen:**
   ```bash
   git clone https://github.com/freewimoe/wfl-dashboard-2026.git
   cd wfl-dashboard-2026
   ```

2. **Starten:**
   ```bash
   docker-compose up --build
   ```

3. **Zugriff:**
   - Frontend: `http://localhost:3000` (oder konfigurierter Port)
   - Backend API: `http://localhost:8000`

### Lokale Entwicklung (Manuell)

**Backend:**
```bash
cd wfl-dashboard-backend
python -m venv .venv
.\.venv\Scripts\Activate  # Windows
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Frontend:**
```bash
cd wfl-dashboard-frontend
npm install
npm run dev
```

---

## 4. Benutzerhandbuch

### 4.1 Login
Beim ersten Aufruf werden Sie zur Login-Maske geleitet.
- **Standard-Admin:** `admin@wfl.local` / `admin123`
- **Standard-User:** `sarah@wfl.local` / `user123`

*(Hinweis: Passwörter sollten in der Produktion sofort geändert werden!)*

### 4.2 Dashboard (Home)
Die Startseite bietet Widgets für:
- **Systemstatus:** Sind alle Dienste (Webseite, Mailserver etc.) online?
- **Aktuelle News:** Die neuesten internen Ankündigungen.
- **Projekt-Übersicht:** Status der laufenden Projekte (Ampel-System).

### 4.3 Verwaltung (Admin)
Benutzer mit der Rolle `admin` haben Zugriff auf Verwaltungsfunktionen (User anlegen, Stammdaten pflegen). *[Dieses Feature ist im Frontend noch in Entwicklung]*

---

## 5. Erweiterungsmöglichkeiten (Zukunft)

Das System ist modular aufgebaut, um mit dem Verein zu wachsen.

### 5.1 Geplante Module
- **Aufgaben-Board:** Ein einfaches Kanban-Board für Aufgaben, die kein komplexes Jira erfordern.
- **Kalender-Integration:** Synchronisation mit Google Calendar oder Outlook.
- **Finanz-Widget:** Anzeige des aktuellen Spendenstands (anonymisiert).

### 5.2 Technische Erweiterungen
- **E-Mail-Benachrichtigungen:** Bei neuen Tasks oder kritischem Systemstatus.
- **Mobile App:** Das Frontend kann als PWA (Progressive Web App) installiert werden.
- **SSO (Single Sign-On):** Anmeldung mit bestehenden Google- oder Microsoft-Konten.

---

## 6. Support & Kontakt

**Technischer Lead:** Friedrich-Wilhelm Möller (freewimoe)
**Repository:** [https://github.com/freewimoe/wfl-dashboard-2026](https://github.com/freewimoe/wfl-dashboard-2026)
