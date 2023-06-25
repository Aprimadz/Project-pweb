import express from 'express';
import { createRoom, updateRoom, deleteRoom, getRoom, getRooms } from '../controllers/roomController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

//create
router.post('/:hotelid', verifyAdmin, createRoom);
// update
router.put('/:id', verifyAdmin, updateRoom);
// delete
router.delete('/:id/:hotelid', verifyAdmin, deleteRoom);
// get
router.get('/:id', getRoom);
// get All
router.get('/', getRooms);

export default router;
