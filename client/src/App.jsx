import { useEffect, useState } from "react"
import Balance from "./components/Balance"
import Form from "./components/Form"
import Transactions from "./components/Transactions"

function App() {
	const [name, setName] = useState("")
	const [dateTime, setDateTime] = useState("")
	const [description, setDescription] = useState("")
	const [transactions, setTransactions] = useState([])

	useEffect(() => {
		getTransactions().then(setTransactions)
	}, [])

	async function getTransactions() {
		const url = import.meta.env.VITE_APP_API_URL + "/transactions"
		const response = await fetch(url)
		return await response.json()
	}

	function handleNewTransaction(ev) {
		ev.preventDefault()
		const url = import.meta.env.VITE_APP_API_URL + "/transaction"
		const price = name.split(" ")[0]
		fetch(url, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				price,
				name: name.substring(price.length + 1),
				description,
				dateTime,
			}),
		}).then((response) => {
			response.json().then((json) => {
				setName("")
				setDateTime("")
				setDescription("")
				console.log("result", json)
			})
		})
	}

	let balance = 0
	for (const transaction of transactions) {
		balance = balance + transaction.price
	}

	balance = balance.toFixed(2)
	const fraction = balance.split(".")[1]
	balance = balance.split(".")[0]

	return (
		<main className='box-border	max-w-[360px] m-[30px] m-auto'>
			<Balance balance={balance} fraction={fraction} />
			<Form
				handleNewTransaction={handleNewTransaction}
				setName={setName}
				setDateTime={setDateTime}
				setDescription={setDescription}
				name={name}
				dateTime={dateTime}
				description={description}
			/>
			<Transactions transactions={transactions} />
		</main>
	)
}

export default App
