import { useEffect, useState } from "react"
import Balance from "./components/Balance"
import Form from "./components/Form"
import Transactions from "./components/Transactions"

function App() {
	const [transactions, setTransactions] = useState([])

	async function getTransactions() {
		const url = import.meta.env.VITE_APP_API_URL + "/transactions"
		const response = await fetch(url)
		return await response.json()
	}

	useEffect(() => {
		getTransactions().then(setTransactions)
	}, [])

	return (
		<main className='box-border	max-w-[360px] m-[30px] m-auto'>
			<Balance transactions={transactions} />
			<Form transactions={transactions} setTransactions={setTransactions} />
			<Transactions
				transactions={transactions}
				setTransactions={setTransactions}
			/>
		</main>
	)
}

export default App
