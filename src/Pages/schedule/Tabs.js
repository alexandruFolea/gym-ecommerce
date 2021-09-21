import React, { useState } from 'react';

const Tabs = () => {
	const [toggleState, setToggleState] = useState(1);

	const toggleTab = (index) => {
		setToggleState(index);
	};

	return (
		<div className='tabs-container'>
			<div className='bloc-tabs'>
				<button
					className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
					onClick={() => toggleTab(1)}
				>
					Crossfit
				</button>
				<button
					className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
					onClick={() => toggleTab(2)}
				>
					Running
				</button>
				<button
					className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
					onClick={() => toggleTab(3)}
				>
					Cycling
				</button>
			</div>

			<div className='content-tabs'>
				<div
					className={toggleState === 1 ? 'content  active-content' : 'content'}
				>
					<h2>Crossfit Classes</h2>
					<span>all classes are 45min long</span>

					<ul>
						<li>
							<div className='day'>
								<h4>SUN :</h4>
								<p>
									8:30 <span>a</span>{' '}
								</p>
								<p>
									9:45<span>a</span>{' '}
								</p>
								<p>
									11:00<span>a</span>{' '}
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>MON :</h4>
								<p>
									8:30<span>a</span>{' '}
								</p>
								<p>
									9:45<span>a</span>{' '}
								</p>
								<p>
									11:00<span>a</span>{' '}
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>TUE :</h4>
								<p>
									8:30<span>a</span>{' '}
								</p>
								<p>
									9:45<span>a</span>{' '}
								</p>
								<p>
									11:00<span>a</span>{' '}
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>WED :</h4>
								<p>
									8:30<span>a</span>{' '}
								</p>
								<p>
									9:45<span>a</span>{' '}
								</p>
								<p>
									11:00<span>a</span>{' '}
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>THUR :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>FRI :</h4>
								<p>
									8:30<span>a</span>{' '}
								</p>
								<p>
									9:45<span>a</span>{' '}
								</p>
								<p>
									11:00<span>a</span>{' '}
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>SAT :</h4>
								<p>
									8:30<span>a</span>{' '}
								</p>
								<p>
									9:45<span>a</span>{' '}
								</p>
								<p>
									11:00<span>a</span>{' '}
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
					</ul>
				</div>

				<div
					className={toggleState === 2 ? 'content  active-content' : 'content'}
				>
					<h2>Running Classes</h2>
					<span>Classes are 45-60min long</span>

					<ul>
						<li>
							<div className='day'>
								<h4>SUN :</h4>
								<p>
									8:00<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>MON :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									10:00<span>a</span>
								</p>
								<p>
									11:30<span>a</span>
								</p>
								<p>
									4:45<span>p</span>
								</p>
								<p>
									6:00<span>p</span>
								</p>
								<p>
									7:30<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>TUE :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>WED :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									10:00<span>a</span>
								</p>
								<p>
									11:30<span>a</span>
								</p>
								<p>
									4:45<span>p</span>
								</p>
								<p>
									6:00<span>p</span>
								</p>
								<p>
									7:30<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>THUR :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>

								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>FRI :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									10:00<span>a</span>
								</p>
								<p>
									11:30<span>a</span>
								</p>
								<p>
									4:45<span>p</span>
								</p>
								<p>
									6:00<span>p</span>
								</p>
								<p>
									7:30<span>p</span>
									<span>a</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>SAT :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
							</div>
						</li>
					</ul>
				</div>

				<div
					className={toggleState === 3 ? 'content  active-content' : 'content'}
				>
					<h2>Cycling Classes</h2>
					<span>all classes are 1h long</span>

					<ul>
						<li>
							<div className='day'>
								<h4>SUN :</h4>
								<p>
									8:30 <span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>MON :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>TUE :</h4>
								<p>
									8:15 <span>a</span>
								</p>
								<p>
									9:30<span>a</span>
								</p>
								<p>
									11:15<span>a</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>WED :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>THUR :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>FRI :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									7:00<span>p</span>
								</p>
							</div>
						</li>
						<li>
							<div className='day'>
								<h4>SAT :</h4>
								<p>
									8:30<span>a</span>
								</p>
								<p>
									9:45<span>a</span>
								</p>
								<p>
									11:00<span>a</span>
								</p>
								<p>
									4:30<span>p</span>
								</p>
								<p>
									5:45<span>p</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Tabs;
