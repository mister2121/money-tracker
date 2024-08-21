import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"
import Transaction from "./models/transaction.js"

// Load environment variables
dotenv.config()

const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

//Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("Database connected"))
	.catch(() => console.log("Error when connecting DB", error))

app.get("/api/test", (req, res) => {
	res.json("test ok")
})

app.post("/api/transaction", async (req, res) => {
	const { name, price, description, dateTime } = req.body

	const transaction = await Transaction.create({
		name,
		price,
		description,
		dateTime,
	})

	res.json(transaction)
})

app.get("/api/transactions", async (req, res) => {
	const transactions = await Transaction.find()
	res.json(transactions)
})

app.listen(4000, () => {
	console.log("server running at port 4000")
})
