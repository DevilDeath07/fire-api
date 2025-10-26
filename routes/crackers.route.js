import express from 'express';
import { 
    crackersIndex,
    crackersCreate,
    crackersGetById,
    crackersUpdateById,
    crackersDeleteById
 } from '../controllers/crackers.controllers.js';
const router = express.Router();
//R - read all crackers
router.get('/', crackersIndex);

//C - create a new cracker
router.post('/', crackersCreate);

//R - read a single cracker by id
router.get('/:id', crackersGetById);
//U - update a cracker by id
router.put('/:id', crackersUpdateById);
//D - Deleting a cracker by id
router.delete('/:id', crackersDeleteById);

export default router;