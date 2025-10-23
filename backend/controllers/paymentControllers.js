import Razorpay from "razorpay";
import trycatch from "../utils/trycatch.js";
import users from "../models/users.js";
import crypto from 'crypto'


export const createOrder = trycatch(async (req, res) => {
    const { plan } = req.body;

    const plans = { Free: 0, Monthly: 149, Yearly: 1499 };
    const amount = plans[plan] * 100;

    const razorpayInstance = new Razorpay({
        key_id: process.env.RAZORPAY_KEY_ID,
        key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await razorpayInstance.orders.create({
        amount,
        currency: "INR",
        receipt: "reciept_" + Date.now(),
    })

    return res.status(200).json({ order });
})


export const verifyPayment = trycatch(async (req, res) => {

    const { plan } = req.body;

    if (plan !== "Free") {

        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const hmac = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_SECRET);
        hmac.update(razorpay_order_id + "|" + razorpay_payment_id);
        const generatedSignature = hmac.digest("hex");

        if (generatedSignature !== razorpay_signature) {
            return res.status(400).json({
                message: "Invalid payment signature"
            });
        }
    }

    const user = await users.findById(req.user._id);
    user.plan = plan;

    if (plan === "Monthly")
        user.planExpiry = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000);
    else if (plan === "Yearly")
        user.planExpiry = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000);
    else
        user.planExpiry = null;

    await user.save();

    res.status(200).json({
        message: `Plan updated to ${plan}`
    });
})