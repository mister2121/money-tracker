import { useEffect, useState } from "react"
import "./App.css"

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
			<h1 className='mt-20 text-center text-white text-5xl font-semibold'>
				${balance}
				<span className='inline-block text-lg align-top mt-[3px]'>
					.{fraction}
				</span>
			</h1>
			<form className='mt-5' onSubmit={handleNewTransaction}>
				<div className='flex flex-row gap-[5px] mb-[5px]'>
					<input
						type='text'
						value={name}
						onChange={(ev) => setName(ev.target.value)}
						placeholder={"+$200 new Samsung TV"}
						className='w-full border-[2px] border-[#30313d] py-[2px] px-[5px] bg-transparent rounded-lg'></input>
					<input
						type='datetime-local'
						value={dateTime}
						onChange={(ev) => setDateTime(ev.target.value)}
						className='w-full border-[2px] border-[#30313d] py-[2px] px-[5px] bg-transparent rounded-lg text-[#ddd]'></input>
				</div>
				<div className='gap-[5px] mb-[5px]'>
					<input
						type='text'
						value={description}
						onChange={(ev) => setDescription(ev.target.value)}
						placeholder={"description"}
						className='w-full border-[2px] border-[#30313d] py-[2px] px-[5px] bg-transparent rounded-lg'></input>
				</div>
				<button type='submit' className='w-full p-[5px] rounded-lg bg-[#ddd]'>
					Add new transaction
				</button>
			</form>

			<div className='transactions mt-[15px] text-[#ddd]'>
				{transactions.length > 0 &&
					transactions.map((transaction) => (
						<div
							key={transaction._id}
							className='transaction flex justify-between py-[5px] px-0'>
							<div className='left'>
								<div className='name text-[1.2rem]'>{transaction.name}</div>
								<div className='description text-[0.8rem] text-[#888]'>
									{transaction.description}
								</div>
							</div>
							<div className='right text-right'>
								<div
									className={
										"price " +
										(transaction.price < 0 ? "text-red-500" : "text-green-500")
									}>
									{transaction.price}
								</div>
								<div className='datetime text-[0.8rem] text-[#888]'>
									2024-08-19 15:45
								</div>
							</div>
						</div>
					))}
			</div>
		</main>
	)
}

export default App
