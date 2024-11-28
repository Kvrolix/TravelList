import { useState } from 'react';
import Logo from './Logo.js';
import Form from './Form.js';
import PackingList from './PackingList.js';
import Stats from './Stats.js';
// const initialItems = [
// 	{ id: 1, description: 'Passports', quantity: 2, packed: false },
// 	{ id: 2, description: 'Socks', quantity: 12, packed: false },
// 	{ id: 3, description: 'T-shirts', quantity: 5, packed: true },
// ];

export default function App() {
	// const [items, setItems] = useState(initalItems);
	const [items, setItems] = useState([]);

	function handleAddItems(item) {
		// We are not allowed to mutate state in React
		setItems((items) => [...items, item]);
	}

	function handleDeleteItem(id) {
		// It will leave all items where a searched id is not the same as the searched id, it will create a new array with updated list of items
		setItems((items) => items.filter((item) => item.id !== id));
	}

	function handleToggleItem(id) {
		setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
	}

	function handleClearList() {
		const confirmed = window.confirm('Are you sure, you want to delete all items?');

		if (confirmed) setItems([]);
	}

	return (
		<div className="app">
			<Logo />
			{/* A convention how it should be written */}
			<Form onAddItems={handleAddItems} />
			<PackingList
				items={items}
				onDeleteItem={handleDeleteItem}
				onToggleItem={handleToggleItem}
				onClearList={handleClearList}
			/>
			<Stats items={items} />
		</div>
	);
}
