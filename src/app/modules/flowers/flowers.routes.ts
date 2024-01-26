

import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { flowerValidation } from "./flowers.validation";
import { flowersController } from "./flowers.controller";

const router = express.Router();


/* add a flower */

router.post('/add-flower',validateRequest(flowerValidation.FlowerValidationSchema),flowersController.addFlower);


/* view and retrieve all the flowers */

router.get('/');

/* view specific flowers */

router.get('/:id')

/* delete flower  */

router.delete('/:id');

/* update a flower */

router.put('/:id')


export const flowersRoutes = router;

