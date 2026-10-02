# Week 3 Full-Stack Tasks App

Express + Sequelize + SQLite backend with JWT authentication and RBAC, connected to the Week 1 React frontend.

## Backend setup

```bash
cd backend
npm install
npm run db:reset
npm run lint
npm test
npm run dev
```

The reset command creates an admin account:
- Email: `admin@example.com`
- Password: `Admin123`

Change the JWT secret in `.env` for real deployments. `.env.example` is included.

## Authentication flow

1. `POST /api/auth/register` creates a normal `user` account and hashes the password.
2. `POST /api/auth/login` verifies the password and returns a JWT.
3. Send `Authorization: Bearer <token>` to protected routes.
4. The JWT middleware identifies the user.
5. Task CRUD is scoped to the authenticated user's own tasks.

## RBAC rule

`GET /api/users` is restricted to users with the `admin` role. A normal user receives `403 Forbidden`.

## API endpoints

- `POST /api/auth/register`
- `POST /api/auth/login`
- `GET /api/tasks` (JWT)
- `GET /api/tasks/:id` (JWT)
- `POST /api/tasks` (JWT)
- `PUT /api/tasks/:id` (JWT)
- `DELETE /api/tasks/:id` (JWT)
- `GET /api/users` (JWT + admin role)
- `GET /api/health`

## Frontend

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The Vite frontend runs on `http://localhost:3000` and calls the backend at `http://localhost:4000`.
