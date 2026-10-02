import express from 'express';
import taskRoutes from './routes/tasks.js';
import userRoutes from './routes/users.js';
import { notFound, errorHandler } from './middleware/errorHandler.js';

export const app = express();

app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/users', userRoutes);
app.use('/api/tasks', taskRoutes);

app.use(notFound);
app.use(errorHandler);
