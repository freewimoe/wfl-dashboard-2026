# Migration Guide: Server Deployment

This guide describes how to migrate the production server (NiPoGi) from the old split-repository structure to the new Monorepo (`wfl-dashboard-2026`).

## 1. Preparation

Connect to the server via SSH:
```bash
ssh nipogi
```

## 2. Stop Old Services

Navigate to the directory where the old version is running (e.g., `wfl-dashboard` or `wfl-dashboard-backend`).

```bash
# Example:
cd ~/wfl-dashboard
# OR
cd ~/wfl-dashboard-backend

# Stop containers
docker-compose down
```

## 3. Backup Database

**Crucial Step:** Save the existing SQLite database.

```bash
# Assuming you are in the old project folder and data.db is in the root or app folder
cp data.db ~/data.db.backup_2025_12_26
# If it was inside a backend folder:
# cp backend/data.db ~/data.db.backup_2025_12_26
```

## 4. Setup New Monorepo

Go back to the home directory and clone the new repository.

```bash
cd ~
git clone https://github.com/freewimoe/wfl-dashboard-2026.git
cd wfl-dashboard-2026
```

## 5. Restore Data

Copy the backup database into the new backend structure.

```bash
# The new backend expects the DB at wfl-dashboard-backend/data.db
cp ~/data.db.backup_2025_12_26 wfl-dashboard-backend/data.db
```

## 6. Start New Services

Build and start the new containers.

```bash
docker-compose up -d --build
```

## 7. Verification

Check if containers are running:
```bash
docker-compose ps
```

Check logs if something fails:
```bash
docker-compose logs -f
```
