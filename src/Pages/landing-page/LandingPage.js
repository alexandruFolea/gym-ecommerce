import React from 'react';
import LandingBanner from './LandingBanner';
import CategoryWrapper from './CategoryWrapper';

const LandingPage = () => {
	return (
		<div className='landing-page'>
			<LandingBanner />
			<div className='classes' id='classes'>
				<div className='category-intro'>
					<p>
						Our classes are designed to take you one step closer to your goals
						for every day of hard work you put in, no matter what discipline you
						choose.
					</p>
				</div>
				<CategoryWrapper />
			</div>
		</div>
	);
};

export default LandingPage;
