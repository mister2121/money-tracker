import React from "react"

const Form = ({
	handleNewTransaction,
	setName,
	setDateTime,
	setDescription,
	name,
	dateTime,
	description,
}) => {
	return (
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
	)
}

export default Form
