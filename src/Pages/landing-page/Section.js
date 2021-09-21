import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ image, title }) => {
	return (
		<>
			<section className='category'>
				<div className='body'>
					<img src={image} alt='' className='card-image' />
					<h4>{title}</h4>
				</div>
				{/* <button className='info-btn'>more info</button> */}
				<Link to='/schedule' className='info-btn'>
					more info
				</Link>
			</section>
		</>
	);
};

export default Section;
