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
 const FlowerUpdateValidationSchema = z.object({
   body: z.object({
     name: z.string().optional(),
     user: z.string().optional(),
     price: z.number().optional(),
     quantity: z.number().optional(),
     bloomDate: z.string().optional(),
     color: z.string().optional(),
     size: z.enum(['Small', 'Medium', 'Large']).optional(),
     fragrance: z.string().optional(),
   }),
 });

export const flowerValidation = {
  FlowerValidationSchema,
  FlowerUpdateValidationSchema
}

