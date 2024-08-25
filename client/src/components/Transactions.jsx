import React from "react"

const Transactions = ({ transactions }) => {
	return (
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
	)
}

export default Transactions
