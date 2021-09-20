import React from 'react';

const LocationCard = ({ address, city, zip, phone }) => {
	return (
		<div className='card'>
			<p>{address}</p>
			<p>{city}</p>
			<p>{zip}</p>
			<p>{phone}</p>
		</div>
	);
};

export default LocationCard;
