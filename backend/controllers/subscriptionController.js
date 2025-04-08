import Subscription from "../models/Subscription.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

// Create mail transporter
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST, // ✅ Use SMTP host from .env
    port: Number(process.env.SMTP_PORT), // ✅ Ensure port is a number
    secure: process.env.SMTP_PORT == "465", // ✅ Use secure connection for port 465
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
    },
    tls: {
        rejectUnauthorized: false, // ✅ Helps with SSL issues
    },
});

export const subscribe = async (req, res) => {
    try {
        console.log("📩 Received Subscription Request:", req.body);
        const { email, firstName } = req.body;

        if (!email) {
            return res.status(400).json({ message: "❌ Email is required!" });
        }

        // Check if user is already subscribed
        const existingUser = await Subscription.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "⚠️ Email is already subscribed!" });
        }

        // Save new subscriber to database
        const newSubscription = new Subscription({ email, firstName });
        await newSubscription.save();

        // Send confirmation email
        const mailOptions = {
            from: `"DollarDucks" <${process.env.SMTP_USER}>`,
            to: email,
            subject: "Thank You for Subscribing!",
            html: `<h3>Hi ${firstName || "Subscriber"},</h3>
                   <p>Thank you for subscribing to our updates. Stay tuned for amazing content!</p>
                   <p>Best Regards,<br/>DollarDucks Team</p>`,
        };

        try {
            const info = await transporter.sendMail(mailOptions);
            console.log(`✅ Email Sent: ${info.response}`);
        } catch (error) {
            console.error(`❌ Error sending email: ${error.message}`);
            return res.status(500).json({ message: "⚠️ Subscription successful, but email failed to send!" });
        }

        res.status(201).json({ message: "✅ Subscription successful! Confirmation email sent." });
    } catch (error) {
        console.error("❌ Subscription Error:", error.message);
        res.status(500).json({ message: "❌ Internal Server Error", error: error.message });
    }
};
