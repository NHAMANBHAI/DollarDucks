

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import formRoutes from "./routes/formRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import emailRoutes from "./routes/emailRoutes.js"; 
import stripeRoutes from "./routes/stripe.js";
dotenv.config();  // ✅ Load .env at the very top

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: ["http://localhost:5173", "https://www.dollarducks.com"],
    credentials: true,
  }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/form", formRoutes);
app.use("/api/subscription", subscriptionRoutes);
app.use("/api/email", emailRoutes); 
app.use("/api/payments", stripeRoutes);
// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
