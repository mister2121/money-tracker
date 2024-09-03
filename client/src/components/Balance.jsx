const Balance = ({ transactions }) => {
	let balance = 0
	for (const transaction of transactions) {
		balance = balance + transaction.price
	}

	balance = balance.toFixed(2)
	const fraction = balance.split(".")[1]
	balance = balance.split(".")[0]

	return (
		<h1 className='mt-20 text-center text-white text-5xl font-semibold'>
			${balance}
			<span className='inline-block text-lg align-top mt-[3px]'>
				.{fraction}
			</span>
		</h1>
	)
}

export default Balance
