import React, { useState } from "react"

const Form = () => {
	const [name, setName] = useState("")
	const [dateTime, setDateTime] = useState("")
	const [description, setDescription] = useState("")

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

	return (
		<form className='mt-5' onSubmit={handleNewTransaction}>
			<div className='gap-[5px] mb-[5px]'>
				<input
					type='text'
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
