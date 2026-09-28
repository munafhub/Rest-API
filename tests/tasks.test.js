import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { app } from '../src/app.js';

async function createUser() {
  const response = await request(app)
    .post('/api/users')
    .send({ name: 'Ali Khan', email: 'ali@example.com' });
  return response.body;
}

describe('Tasks REST API', () => {
  it('creates a user', async () => {
    const response = await request(app)
      .post('/api/users')
      .send({ name: 'Ali Khan', email: 'ali@example.com' });

    expect(response.status).toBe(201);
    expect(response.body.email).toBe('ali@example.com');
  });

  it('creates a task linked to a user', async () => {
    const user = await createUser();
    const response = await request(app)
      .post('/api/tasks')
      .send({ title: 'Learn REST APIs', userId: user.id });

    expect(response.status).toBe(201);
    expect(response.body.title).toBe('Learn REST APIs');
    expect(response.body.User.id).toBe(user.id);
  });

  it('rejects invalid task input with 400', async () => {
    const response = await request(app)
      .post('/api/tasks')
      .send({ title: '', userId: 'not-a-number' });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Validation failed');
  });

  it('returns 404 when a task does not exist', async () => {
    const response = await request(app).get('/api/tasks/999');
    expect(response.status).toBe(404);
  });

  it('updates a task', async () => {
    const user = await createUser();
    const created = await request(app)
      .post('/api/tasks')
      .send({ title: 'Old title', userId: user.id });

    const response = await request(app)
      .put(`/api/tasks/${created.body.id}`)
      .send({ title: 'New title', completed: true });

    expect(response.status).toBe(200);
    expect(response.body.title).toBe('New title');
    expect(response.body.completed).toBe(true);
  });

  it('deletes a task with 204', async () => {
    const user = await createUser();
    const created = await request(app)
      .post('/api/tasks')
      .send({ title: 'Delete me', userId: user.id });

    const response = await request(app).delete(`/api/tasks/${created.body.id}`);
    expect(response.status).toBe(204);

    const getResponse = await request(app).get(`/api/tasks/${created.body.id}`);
    expect(getResponse.status).toBe(404);
  });
});
