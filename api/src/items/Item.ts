import { z } from 'zod';

export const ItemSchema = z.object({
  id: z.number(),
  text: z.string().min(1),
  createdAt: z.date(),
});

export const CreateItemSchema = z.object({
  text: z.string().min(1)
});

export type Item = z.infer<typeof ItemSchema>;
export type CreateItem = z.infer<typeof CreateItemSchema>;
