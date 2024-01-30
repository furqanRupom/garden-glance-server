import { z } from 'zod';

 const FlowerValidationSchema = z.object({
   body: z.object({
     name: z.string(),
     user: z.string(),
     price: z.number(),
     quantity: z.number(),
     bloomDate: z.string(),
     color: z.string(),
     size: z.enum(['Small', 'Medium', 'Large']),
     type: z.string(),
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
     type: z.string().optional(),
     fragrance: z.string().optional(),
   }).optional(),
 });



 const SalesValidationSchema = z.object({
   body: z.object({
     id: z.string().optional(),
     buyerName: z.string().min(1),
     saleDate: z.coerce.date(),
     quantity: z.number().int().min(1),
   }),
 });


export const flowerValidation = {
  FlowerValidationSchema,
  FlowerUpdateValidationSchema,
  SalesValidationSchema
}

