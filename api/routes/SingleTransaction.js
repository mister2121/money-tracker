import express from "express"
import Transaction from "../models/transaction.js"

const router = express.Router()

// Add new transaction

router.post("/", async (req, res) => {
	const { name, price, description, dateTime } = req.body

	try {
		const result = await Transaction.create({
			name,
			price,
			description,
			dateTime,
		})
		if (!result) {
			return res
				.status(404)
				.json({ message: "Error when trying to add the transaction" })
		}
		res.json(result)
	} catch (error) {
		res.status(500).json({ message: "Server error", error })
	}
})

router.delete("/:id", async (req, res) => {
	const { id } = req.params

	try {
		const result = await Transaction.findByIdAndDelete(id)
		if (!result) {
			return res.status(404).json({ message: "Transaction not found" })
		}
		res.json({ message: "Transaction deleted succesfully" })
	} catch (error) {
		res.status(500).json({ message: "Error deleting transaction", error })
	}
})

export default router
