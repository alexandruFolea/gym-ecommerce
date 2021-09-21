import React from 'react';
import { Link } from 'react-router-dom';

const LocationCard = ({ address, city, zip, phone }) => {
	return (
		<div className='card'>
			<p>{address}</p>
			<p>{city}</p>
			<p>{zip}</p>
			<p>{phone}</p>
			<Link to='/'>contact location</Link>
		</div>
	);
};

export default LocationCard;
