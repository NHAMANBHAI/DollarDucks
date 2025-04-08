// backend/routes/stripe.js
import express from "express";
import Stripe from "stripe";
import dotenv from "dotenv";

dotenv.config();
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

router.post("/stripe-payment", async (req, res) => {
  try {
    const { amount, email, product_name } = req.body;

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      metadata: {
        email,
        product: product_name,
      },
      receipt_email: email,
      description: `Payment for ${product_name}`,
    });

    res.status(200).json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Stripe Payment Error:", error);
    res.status(500).json({ message: "Payment failed", error: error.message });
  }
});

export default router;
