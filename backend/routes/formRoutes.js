



import express from "express";
import Form from "../models/Form.js";
import { sendMail } from "../utils/sendMail.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { fullName, businessName, email, number, service } = req.body;

    if (!fullName || !businessName || !email || !number || !service) {
      return res.status(400).json({ message: "❌ All fields are required!" });
    }

    // Save form data to database
    const newForm = new Form({ fullName, businessName, email, number, service });
    await newForm.save();

    // Send email to user
    await sendMail(
      email,
      "Thank you for contacting DollarDucks!",
      `
      <p>Hi ${fullName},</p>
      <p>Thank you for reaching out! We will get back to you soon.</p>
      <p>Best Regards,</p>
      <p><strong>DollarDucks Team</strong></p>
      `,
      process.env.LEAD_EMAIL // ✅ Ensures reply-to is correct
    );

    // Send email to admin (Ensure it's an array)
    const adminEmails = ["shivanshbabbar4@gmail.com", "nhamanbhai@gmail.com"];
    
    await sendMail(
      adminEmails.join(","), // ✅ Ensures multiple recipients
      "New Lead Submitted!",
      `
      <p>A new lead has been submitted:</p>
      <ul>
        <li><strong>Name:</strong> ${fullName}</li>
        <li><strong>Business Name:</strong> ${businessName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Number:</strong> ${number}</li>
        <li><strong>Service:</strong> ${service}</li>
      </ul>
      `,
      process.env.LEAD_EMAIL // ✅ Ensures reply-to is correct
    );

    res.status(201).json({ message: "✅ Form submitted & email sent successfully!" });
  } catch (error) {
    console.error("❌ Error:", error);
    res.status(500).json({ message: "❌ Server Error", error: error.message });
  }
});

export default router;
