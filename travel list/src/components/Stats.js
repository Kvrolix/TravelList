export default function Stats({ items }) {
	// It is good to do early returns as if there's no items, there's no point to do all teh calculations
	if (!items.length)
		return (
			<p className="stats">
				<em>Start adding items to your packing list ☀</em>
			</p>
		);
	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const percentage = Math.round((numPacked / numItems) * 100);
	console.log(percentage);
	// console.log(numPacked);
	// console.log(`numitems`, numItems);
	return (
		<footer className="stats">
			{numPacked === numItems ? (
				<em>You got everything! Ready to go ✈</em>
			) : (
				<em>{`👜 You have ${numItems === 1 ? `${numItems} item` : `${numItems} items`} on your list, and you already packed ${numPacked} (${percentage}%)`}</em>
			)}
		</footer>
	);
}
