import express from "express"
import Transaction from "../models/transaction.js"

const router = express.Router()

router.get("/", async (req, res) => {
	const transactions = await Transaction.find()
	res.json(transactions)
})

export default router
