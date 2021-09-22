import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowDown } from 'react-icons/bs';

const LandingBanner = () => {
	const [showBtn, setShowBtn] = useState(false);

	const handleMouseEnter = () => {
		setShowBtn(true);
	};

	const handleMouseLeave = () => {
		setShowBtn(false);
	};

	return (
		<div
			className='landing-banner'
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
		>
			<h1>
				<span>Start</span> <br /> your transformation <br /> <span>NOW</span>
			</h1>
			<Link
				to='/membership'
				className={showBtn ? 'show-btn get-started' : 'get-started'}
			>
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
