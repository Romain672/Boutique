function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = careType === 'light' ? '☀️' : '💧'

	return (
		<div>
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()} onClick={fautIlArroser}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

function fautIlArroser (event) {
	console.log(event.target)

	return alert ('aaa')
}
export default CareScale
