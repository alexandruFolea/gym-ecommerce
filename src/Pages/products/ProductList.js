export default function ProductList({ id, title, active, setSelected }) {
	return (
		<li
			className={active ? 'productList active' : 'productList'}
			onClick={() => setSelected(id)}
		>
			{title}
		</li>
	);
}
