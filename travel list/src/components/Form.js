import { useState } from 'react';

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState('');
	const [quantity, setQuantity] = useState(1);

	function handleSubmit(e) {
		e.preventDefault();
		// If no description cant continue
		if (!description) return;
		// Creating a new Item
		const newItem = { description, quantity, packed: false, id: Date.now() };
		console.log(newItem);
		//adding a new Item
		onAddItems(newItem);
		setDescription('');
		setQuantity(1);
	}

	return (
		<form
			className="add-form"
			onSubmit={handleSubmit}>
			<h3>What do you need for your 😍 trip?</h3>
			{/* Creating 20 items */}
			<select
				type="number"
				value={quantity}
				// Also converting to a Number
				onChange={(e) => setQuantity(Number(e.target.value))}>
				{Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
					<option
						value={num}
						key={num}>
						{num}
					</option>
				))}
			</select>
			<input
				type="text"
				placeholder="Item..."
				value={description}
				onChange={(e) => setDescription(e.target.value)}></input>
			<button>ADD</button>
		</form>
	);
}
