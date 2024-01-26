import { z } from 'zod';

 const FlowerValidationSchema = z.object({
  body: z.object({
    name: z.string(),
    user:z.string(),
    price: z.number(),
    quantity: z.number(),
    bloomDate: z.string(),
    color: z.string(),
    size: z.enum(['Small','Medium','Large']),
    fragrance: z.string(),
  }),
});


export const flowerValidation = {
  FlowerValidationSchema
}

