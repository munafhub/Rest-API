import { sequelize } from './models/index.js';

await sequelize.sync({ force: true });
console.log('Database reset successfully.');
await sequelize.close();
