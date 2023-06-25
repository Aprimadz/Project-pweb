import express from 'express';
import Hotel from '../models/Hotel.js';
import {
    createHotel,
    deleteHotel,
    getHotel,
    getHotels,
    updateHotel,
    countByCity,
    countByType,
} from '../controllers/hotelController.js';
import { verifyAdmin } from '../utils/verifyToken.js';
const router = express.Router();

//create
router.post('/', verifyAdmin, createHotel);
// update
router.put('/:id', verifyAdmin, updateHotel);
// delete
router.delete('/:id', verifyAdmin, deleteHotel);
// get
router.get('/find/:id', getHotel);
// get All
router.get('/', getHotels);
router.get('/countByCity', countByCity);
router.get('/countByType', countByType);

export default router;