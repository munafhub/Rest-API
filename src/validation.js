import { z } from 'zod';

const idSchema = z.coerce.number().int().positive();

export const taskIdSchema = z.object({ id: idSchema });

export const createTaskSchema = z.object({
  title: z.string().trim().min(1, 'Title is required').max(100, 'Title must be 100 characters or less'),
  description: z.string().trim().max(500, 'Description must be 500 characters or less').optional(),
  completed: z.boolean().optional(),
  userId: idSchema,
});

export const updateTaskSchema = z.object({
  title: z.string().trim().min(1).max(100).optional(),
  description: z.string().trim().max(500).optional(),
  completed: z.boolean().optional(),
  userId: idSchema.optional(),
}).refine((data) => Object.keys(data).length > 0, { message: 'At least one field is required' });

export const createUserSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email(),
});
