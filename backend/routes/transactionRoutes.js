import express from "express";
import Transaction from "../models/Transaction.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Create Transaction
router.post("/", authMiddleware, async (req, res) => {
  const { description, amount, type, category } = req.body;
  try {
    const transaction = new Transaction({ user: req.user.id, description, amount, type, category });
    await transaction.save();
    res.json(transaction);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Transactions
router.get("/", authMiddleware, async (req, res) => {
  try {
    const transactions = await Transaction.find({ user: req.user.id });
    res.json(transactions);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
