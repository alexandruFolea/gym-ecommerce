import React from 'react';
import LocationCard from './LocationCard';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import TierCard from './TierCard';

const MembershipPage = () => {
	return (
		<div className='membership-page'>
			<div className='banner'>some image</div>
			<div className='membership-tiers'>
				<div className='basic-tier tier'>
					<TierCard tier='BASIC' />
				</div>
				<div className='silver-tier tier'>
					{' '}
					<TierCard tier='SILVER' />
				</div>
				<div className='gold-tier tier'>
					{' '}
					<TierCard tier='GOLD' />
				</div>
			</div>
			<div className='benefits-wrapper'>
				<div className='top'>
					<h3>Check Out The Benefits of Getting in Shape</h3>
					<div className='top-lists'>
						<ul className='left'>
							<li>
								<IoMdCheckmarkCircleOutline />
								Improve self esteem
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Sleep better
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Lose weight
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Improves energy levels
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Have fun and make new friends
							</li>
						</ul>
						<ul className='right'>
							<li>
								<IoMdCheckmarkCircleOutline />
								Improve self esteem
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Sleep better
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Lose weight
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Improves energy levels
							</li>
							<li>
								<IoMdCheckmarkCircleOutline />
								Have fun and make new friends
							</li>
						</ul>
					</div>
				</div>
				<div className='middle'>
					<h3>
						Try us <span>Free</span> For <span>3</span> Days
					</h3>
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure omnis
						ab provident dolorum quod et obcaecati aspernatur corporis aliquid
						minus?
					</p>
					<button>SIGN UP TODAY</button>
				</div>
				<div className='bottom'>
					<h3>Check us out in person at one of our locations</h3>
					<div className='location-card-wrapper'>
						<LocationCard
							address='1000 W Lake Shore'
							city='Chicago'
							zip='60611'
							phone='555-555-5555'
						/>
						<LocationCard
							address='1000 W Lake Shore'
							city='Chicago'
							zip='60611'
							phone='555-555-5555'
						/>
						<LocationCard
							address='1000 W Lake Shore'
							city='Chicago'
							zip='60611'
							phone='555-555-5555'
						/>
						<LocationCard
							address='1000 W Lake Shore'
							city='Chicago'
							zip='60611'
							phone='555-555-5555'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MembershipPage;
