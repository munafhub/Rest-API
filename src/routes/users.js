import { Router } from 'express';
import { User, Task } from '../models/index.js';
import { createUserSchema } from '../validation.js';
import { validate } from '../middleware/validate.js';

const router = Router();

router.post('/', validate(createUserSchema), async (req, res, next) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    if (error.name === 'SequelizeUniqueConstraintError') {
      return res.status(409).json({ error: 'Email already exists' });
    }
    next(error);
  }
});

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({ include: { model: Task, as: 'Tasks' } });
    res.json(users);
  } catch (error) {
    next(error);
  }
});

export default router;
