import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import dotenv from "dotenv"

// Load environment variables
dotenv.config()

// Use Express
const app = express()

// Middlewares
app.use(cors())
app.use(express.json())

// Importing routes
import singleTransactionRoute from "./routes/SingleTransaction.js"
import allTransactionRoute from "./routes/AllTransactions.js"

app.use("/api/transaction", singleTransactionRoute)
app.use("/api/transactions", allTransactionRoute)

//Connect to MongoDB
mongoose
	.connect(process.env.MONGO_URL)
	.then(() => console.log("Database connected"))
	.catch(() => console.log("Error when connecting DB", error))

app.listen(4000, () => {
	console.log("server running at port 4000")
})
