import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NavLogin from './NavLogin';
import { FaTimes, FaBars } from 'react-icons/fa';

const NavMenu = () => {
	const [open, setOpen] = useState(false);
	const handleClick = () => setOpen(!open);
	return (
		<div className='nav-menu'>
			<div className={open ? 'nav-list active' : 'nav-list'}>
				<ul className='main-list'>
					<li>
						<Link to='/' onClick={handleClick}>
							HOME
						</Link>
					</li>
					<li>
						<Link to='/membership' onClick={handleClick}>
							MEMBERSHIP
						</Link>
					</li>
					<li>
						<Link to='/schedule' onClick={handleClick}>
							SCHEDULE
						</Link>
					</li>
					<li>
						<Link to='/products' onClick={handleClick}>
							PRODUCTS
						</Link>
					</li>
					<li>
						<Link to='/sales' onClick={handleClick}>
							SALE + MORE
						</Link>
					</li>
				</ul>
				<NavLogin />
			</div>
			<div onClick={handleClick} className='hamburger'>
				{open ? <FaTimes /> : <FaBars />}
			</div>
		</div>
	);
};

export default NavMenu;
