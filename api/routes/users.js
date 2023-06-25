import express from 'express';
import { updateUser, deleteUser, getUser, getUsers } from '../controllers/userController.js';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

// router.get('/checkauthentication', verifyToken, (req, res, next) => {
//     res.send('hello user, you are now logged in');
// });

// router.get('/checkuser/:id', verifyUser, (req, res, next) => {
//     res.send('hello user, you are now logged in and you can delete it');
// });
// router.get('/checkadmin/:id', verifyAdmin, (req, res, next) => {
//     res.send('hello admin, you are now logged in and you can delete all accounts');
// });

// update
router.put('/:id', verifyUser, updateUser);
// delete
router.delete('/:id', verifyUser, deleteUser);
// get
router.get('/:id', verifyUser, getUser);
// get All
router.get('/', verifyAdmin, getUsers);

export default router;
