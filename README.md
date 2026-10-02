# Week 3 Full-Stack Tasks Project

This project combines the Week 1 React To-Do frontend with the Week 2 Express/Sequelize Tasks API and adds the Week 3 requirements.

## Requirements completed

- JWT authentication: register, login, password hashing, protected routes.
- Role-based authorization: `/api/users` is admin-only.
- Week 1 frontend connected to the backend for full Task CRUD.
- At least 5 API tests covering auth, CRUD and error paths.
- Separate happy-path integration test: register -> login -> create -> read -> update -> delete.
- `prompts.md` updated with Week 2 and Week 3 prompts.

## Run the project

### Terminal 1 - backend

```bash
cd backend
npm install
npm run db:reset
npm test
npm run lint
npm run dev
```

Backend: `http://localhost:4000`

The reset command creates an admin account:

```text
Email: admin@example.com
Password: Admin123
```

### Terminal 2 - frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend: `http://localhost:3000`

Open the frontend, register a new account or log in, and then create/edit/complete/delete tasks. The frontend sends the JWT automatically with protected API requests.

## Architecture

```text
React frontend
     |
     | fetch + Bearer JWT
     v
Express API
     |
     +-- JWT authentication middleware
     +-- RBAC middleware (admin users route)
     +-- Task ownership checks
     v
Sequelize + SQLite
```
