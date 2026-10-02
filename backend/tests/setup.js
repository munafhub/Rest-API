import { beforeAll, afterAll, beforeEach } from 'vitest';
import { sequelize } from '../src/models/index.js';

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

beforeEach(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});
