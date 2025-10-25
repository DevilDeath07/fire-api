import express from 'express';
const router = express.Router();
//R - read all crackers
router.get('/',(req,res) =>{
    res.send('list of all crackers');
});

//C - create a new cracker
router.post('/',(req,res) =>{
    res.send('Creating a new cracker');
});

//R - read a single cracker by id
router.put('/:id',(req,res) =>{
    res.send("getting a single cracker by id");
});

//D - Deleting a cracker by id
router.delete('/:id',(req,res) =>{
    res.send("deleting a single cracker by id");
});

export default router;