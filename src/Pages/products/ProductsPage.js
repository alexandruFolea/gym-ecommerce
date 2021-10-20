import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard';
import ProductList from './ProductList';
import { apparel, supplements } from './ProductsData';

const ProductsPage = () => {
	const [selected, setSelected] = useState(apparel);
	const [data, setData] = useState([]);

	const categories = [
		{
			id: 'apparel',
			title: 'Apparel',
		},
		{
			id: 'supplements',
			title: 'Suplements',
		},
	];

	useEffect(() => {
		switch (selected) {
			case 'apparel':
				setData(apparel);
				break;
			case 'supplements':
				setData(supplements);
				break;
			default:
				setData(apparel);
		}
	}, [selected]);

	return (
		<div className='products-page'>
			<div className='product-header'>
				<h1>SHOP</h1>
			</div>
			<div className='products-container'>
				<ul className='product-selection-list'>
					{categories.map((category) => (
						<ProductList
							title={category.title}
							active={selected === category.id}
							setSelected={setSelected}
							id={category.id}
							key={category.id}
						/>
					))}
				</ul>
				<div className='product-list'>
					{data.map((d, index) => (
						<ProductCard
							image={d.url}
							name={d.name}
							price={d.price}
							key={index}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProductsPage;
