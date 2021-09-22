import React from 'react';

const ProductCard = ({ image, name, price }) => {
	return (
		<div className='card'>
			<img src={image} alt='' className='card__img' />
			<div className='card__body'>
				<h3 className='card__title'>{name}</h3>
				<p className='card__price'>{price}</p>
				<button className='card__btn'>add to cart</button>
			</div>
		</div>
	);
};

export default ProductCard;
