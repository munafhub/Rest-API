# Week 2 AI Prompts

## Project goal
Build a CRUD REST API for one resource, model it with an ORM and a relationship, validate inputs, configure a backend linter, write AI-generated unit/API tests, and document prompts.

## Prompts used

1. Build a beginner-friendly CRUD REST API for Tasks using Express.js.
2. Use an ORM and SQLite database. Create a User model and a Task model with a one-to-many User -> Tasks relationship.
3. Add create, read, update and delete endpoints for Tasks.
4. Add input validation and return appropriate HTTP status codes for validation errors, missing resources, successful creation, successful updates and successful deletion.
5. Configure ESLint for the backend and make the code pass linting.
6. Generate automated tests for the REST API using Vitest and Supertest. Cover CRUD, validation, relationship behavior and 404 responses.
7. Review the generated tests and make sure they test actual API behavior rather than only implementation details.
8. Keep the code beginner-friendly and explain how each folder and file is used.

## Verification notes
- Tests are run with `npm test`.
- Lint is run with `npm run lint`.
- The API is manually testable with Postman, Thunder Client or curl.
- The User -> Task relationship is returned by Sequelize includes.
