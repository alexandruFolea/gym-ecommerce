import React from 'react';
import Massage from './Massage';
import Tabs from './Tabs';
import Yoga from './Yoga';

const SchedulePage = () => {
	return (
		<div className='schedule-page'>
			<div className='schedule-banner'>
				<h1>Class Schedule</h1>
			</div>
			<Yoga />

			<Massage />

			<div className='class-schedule'>
				<h1>more classes</h1>
				<Tabs />
			</div>

			<div className='drop-in'>
				<div className='drop-in-top'>
					<h1>Come workout with us</h1>
					<h2>Drop In!</h2>
					<p>
						Whether you are in town or nearby, whether it is for work or play,
						come work out with us! Make us your gym home away from home.
					</p>
				</div>
				<div className='drop-in-bottom'>
					<h2>How it works</h2>
					<ul>
						<li>Register online with your contact details.</li>
						<li>We’ll show you the schedule so you know when to arrive.</li>
						<li>
							Arrive a few minutes before and check-in digitally at our front
							desk.
						</li>
						<li>Introduce yourself to the coach and jump into class!</li>
					</ul>
				</div>
				<div className='drop-in-btn'>
					<button>contact us</button>
				</div>
			</div>
		</div>
	);
};

export default SchedulePage;
