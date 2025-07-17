import express from 'express';
import {getUsers, getUserById, addUser, deleteUser} from '../controllers/controller-users';

const router=express.Router();

router.get('/getUsers',getUsers);
router.get('/getUser/:id', getUserById);
router.post('/addUser', addUser);
router.delete('/deleteUser/:id',deleteUser)

export default router;