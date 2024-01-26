

import express from "express";
import validateRequest from "../../middleware/validateRequest";
import { flowerValidation } from "./flowers.validation";
import { flowersController } from "./flowers.controller";

const router = express.Router();


/* add a flower */

router.post('/add-flower',validateRequest(flowerValidation.FlowerValidationSchema),flowersController.addFlower);


/* view and retrieve all the flowers */

router.get('/',flowersController.getAllFlowers);

/* view specific flowers */

router.get('/:id',flowersController.getSingleFlower)

/* delete flower  */

router.delete('/:id',flowersController.deleteFlower);

/* update a flower */

router.put('/:id',validateRequest(flowerValidation.FlowerUpdateValidationSchema),flowersController.updateFlower)

/* bulk delete */
router.delete('/bulk/delete',flowersController.BulkDeleteFlower)


export const flowersRoutes = router;

