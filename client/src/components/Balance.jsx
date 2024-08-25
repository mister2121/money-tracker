const Balance = ({ balance, fraction }) => {
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
