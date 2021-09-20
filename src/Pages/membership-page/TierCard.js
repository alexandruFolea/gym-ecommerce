import React from 'react';

const TierCard = ({ tier }) => {
	return (
		<div>
			<div className='tier-card-top'>
				<h1>{tier}</h1>
			</div>
			<div className='tier-card-body'>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, ab?
				</p>
				<ul>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem sit amet.</li>
					<li>Lorem ipsum dolor sit amet.</li>
					<li>Lorem ipsum dolor.</li>
				</ul>
			</div>
			<button>SIGN UP</button>
		</div>
	);
};

export default TierCard;
