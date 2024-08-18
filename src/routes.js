import express from 'express';
import { createUser, getAllUsers, deleteUser } from './controllers/userControler.js'


const router = express.Router();

router.post('/cadastro', createUser);
router.get('/todos', getAllUsers);
router.delete('/deletar/:id', deleteUser);

export default router; 