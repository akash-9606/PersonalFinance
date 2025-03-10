import express from "express";
import Budget from "../models/Budget.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Set Budget
router.post("/", authMiddleware, async (req, res) => {
  const { category, amount } = req.body;
  try {
    const budget = new Budget({ user: req.user.id, category, amount });
    await budget.save();
    res.json(budget);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Get Budgets
router.get("/", authMiddleware, async (req, res) => {
  try {
    const budgets = await Budget.find({ user: req.user.id });
    res.json(budgets);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
