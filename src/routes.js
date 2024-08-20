import express from 'express';
import { createUser, getAllUsers, deleteUser, updateUser } from './controllers/userControler.js'


const router = express.Router();

router.post('/cadastro', createUser);
router.get('/todos', getAllUsers);
router.delete('/deletar/:id', deleteUser);
router.put('/atualizar/:id', updateUser)
export default router; 