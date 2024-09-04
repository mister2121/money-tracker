import React from "react"

const Transactions = ({ transactions, setTransactions }) => {
	async function handleDelete(id) {
		const url = `${import.meta.env.VITE_APP_API_URL}/transaction/${id}`
		const response = await fetch(url, {
			method: "DELETE",
		})
		if (response.ok) {
			// Remove the deleted transaction from the local state
			setTransactions((prevTransactions) =>
				prevTransactions.filter((transaction) => transaction._id !== id)
			)
		} else {
			console.error("Failed to delete the transaction")
		}
	}

	return (
		<div className='transactions mt-[15px] text-[#ddd]'>
			{transactions.length > 0 &&
				transactions.map((transaction) => (
					<div
						key={transaction._id}
						className='transaction flex justify-between py-[5px] px-0 border-[#888] border-t-[1px] first:border-t-0 gap-2'>
						<div className='left flex-1'>
							<div className='name text-[1.2rem]'>{transaction.name}</div>
							<div className='description text-[0.8rem] text-[#888]'>
								{transaction.description}
							</div>
						</div>
						<div className='right flex items-center gap-2 '>
							<div className='text-right'>
								<div
									className={
										"price text-[1.2rem] " +
										(transaction.price < 0 ? "text-red-500" : "text-green-500")
									}>
									{transaction.price}
								</div>
								<div className='datetime text-[0.9rem] text-[#888]'>
									{new Date(transaction.dateTime).toLocaleString()}
								</div>
							</div>

							<div onClick={() => handleDelete(transaction._id)}>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									fill='none'
									viewBox='0 0 24 24'
									strokeWidth={1.5}
									stroke='currentColor'
									className='size-5 cursor-pointer'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
									/>
								</svg>
							</div>
						</div>
					</div>
				))}
		</div>
	)
}

export default Transactions
