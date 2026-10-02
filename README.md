<<<<<<< HEAD
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
=======
# Week 2 - Tasks CRUD REST API

A beginner-friendly REST API built with Express.js, Sequelize ORM, SQLite, Zod, ESLint, Vitest and Supertest.

## Requirements covered

- CRUD REST API for Tasks
- ORM: Sequelize
- Database: SQLite
- Relationship: User has many Tasks; Task belongs to User
- Input validation with Zod
- Correct HTTP status codes
- ESLint configuration
- Automated API tests
- AI prompt documentation in `prompts.md`

## Project structure

```text
week2-tasks-api/
├── data/
├── src/
│   ├── middleware/
│   │   ├── errorHandler.js
│   │   └── validate.js
│   ├── models/
│   │   └── index.js
│   ├── routes/
│   │   ├── tasks.js
│   │   └── users.js
│   ├── app.js
│   ├── resetDb.js
│   ├── server.js
│   └── validation.js
├── tests/
│   ├── setup.js
│   └── tasks.test.js
├── .gitignore
├── eslint.config.js
├── package.json
├── prompts.md
├── README.md
└── vitest.config.js
```

## Setup

```bash
npm install
npm run db:reset
npm run dev
```

Server: `http://localhost:4000`

Health check: `GET /api/health`

## API endpoints

### Users
- `POST /api/users`
- `GET /api/users`

Create user:

```json
{
  "name": "Ali Khan",
  "email": "ali@example.com"
}
```

### Tasks
- `POST /api/tasks`
- `GET /api/tasks`
- `GET /api/tasks/:id`
- `PUT /api/tasks/:id`
- `DELETE /api/tasks/:id`

Create task:

```json
{
  "title": "Learn REST APIs",
  "description": "Practice CRUD and HTTP status codes",
  "completed": false,
  "userId": 1
}
```

## HTTP status codes used

- `200 OK` - successful GET or PUT
- `201 Created` - successful POST
- `204 No Content` - successful DELETE
- `400 Bad Request` - invalid input
- `404 Not Found` - resource does not exist
- `409 Conflict` - duplicate user email
- `500 Internal Server Error` - unexpected server error

## Quality checks

```bash
npm run lint
npm test
```

Both commands should finish successfully before committing.
>>>>>>> b25698554a0347f5900a0cc524de15c8e12e1e23
