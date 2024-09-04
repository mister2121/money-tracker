import React, { useState } from "react"

const Form = ({ setTransactions, transactions }) => {
	const [price, setPrice] = useState("")
	const [name, setName] = useState("")
	const [dateTime, setDateTime] = useState("")
	const [description, setDescription] = useState("")

	function handleNewTransaction(ev) {
		ev.preventDefault()

		const sanitizedPrice = price.replace(/[^0-9.-]/g, "")

		const url = import.meta.env.VITE_APP_API_URL + "/transaction"
		fetch(url, {
			method: "POST",
			headers: { "Content-type": "application/json" },
			body: JSON.stringify({
				price: parseFloat(sanitizedPrice),
				name,
				description,
				dateTime,
			}),
		}).then((response) => {
			response.json().then((newTransaction) => {
				setPrice("")
				setName("")
				setDateTime("")
				setDescription("")
				setTransactions([...transactions, newTransaction])

				console.log("result", newTransaction)
			})
		})
	}

	return (
		<form className='mt-5' onSubmit={handleNewTransaction}>
			<div className='gap-[5px] mb-[5px]'>
				<input
					type='text'
					value={price}
					onChange={(ev) => setPrice(ev.target.value)}
					placeholder='+200'
					className='w-full border-[2px] border-[#30313d] py-[2px] px-[5px] mb-2 bg-transparent rounded-lg text-[#ddd] '></input>
				<input
					type='text'
					value={name}
					onChange={(ev) => setName(ev.target.value)}
					placeholder={"new Samsung TV"}
					className='w-full border-[2px] border-[#30313d] py-[2px] px-[5px] mb-2 bg-transparent rounded-lg text-[#ddd] '></input>
				<input
					type='datetime-local'
					value={dateTime}
					onChange={(ev) => setDateTime(ev.target.value)}
					className='w-full border-[2px] border-[#30313d] py-[2px] px-[5px] mb-2 bg-transparent rounded-lg text-[#ddd] '></input>
				<input
					type='text'
					value={description}
					onChange={(ev) => setDescription(ev.target.value)}
					placeholder={"description"}
					className='w-full border-[2px] border-[#30313d] py-[2px] px-[5px] mb-2 bg-transparent rounded-lg text-[#ddd]'></input>
			</div>
			<button
				type='submit'
				className='w-full p-[5px] rounded-lg bg-[#ddd] hover:bg-[#fff]'>
				Add new transaction
			</button>
		</form>
	)
}

export default Form
