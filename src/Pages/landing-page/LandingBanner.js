import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowDown } from 'react-icons/bs';

const LandingBanner = () => {
	return (
		<div className='landing-banner'>
			<h1>
				<span>Start</span> <br /> your transformation <br /> <span>NOW</span>
			</h1>
			<Link to='/membership' className='get-started'>
				get started
			</Link>

			<p>We offer classes for every type</p>
			<div className='arrow-down'>
				<a href='#classes'>
					<BsArrowDown />
				</a>
			</div>
		</div>
	);
};

export default LandingBanner;
