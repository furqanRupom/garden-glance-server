

import express from "express";

const router = express.Router();


router.get('/');
router.post('/create-flower');
router.get('/:id')
router.delete('/:id');
router.put('/:id')


export const flowersRoutes = router;

