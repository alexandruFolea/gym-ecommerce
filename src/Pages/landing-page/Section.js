import React from 'react';

const Section = ({ image, title }) => {
	return (
		<>
			<section className='category'>
				<div className='body'>
					<img src={image} alt='' className='card-image' />
					<h4>{title}</h4>
				</div>
				<button className='info-btn'>more info</button>
			</section>
		</>
	);
};

export default Section;
