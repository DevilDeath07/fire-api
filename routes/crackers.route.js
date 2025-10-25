import express from 'express';
import { 
    crackersIndex,
    crackersCreate,
    crackersGetById,
    crackersDeleteById
 } from '../controllers/crackers.controllers.js';
const router = express.Router();
//R - read all crackers
router.get('/', crackersIndex);

//C - create a new cracker
router.post('/', crackersCreate);

//R - read a single cracker by id
router.get('/:id', crackersGetById);

//D - Deleting a cracker by id
router.delete('/:id', crackersDeleteById);

export default router;