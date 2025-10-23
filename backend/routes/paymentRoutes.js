import express from 'express'
import isauth from '../middlewares/isauth.js';
import { createOrder, verifyPayment } from '../controllers/paymentControllers.js';

const router = express.Router()


router.post("/create-order", isauth, createOrder);

router.post("/verify-payment", isauth, verifyPayment);

export default router;