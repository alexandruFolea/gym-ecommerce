import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaTimes, FaBars, FaOpencart } from 'react-icons/fa';
import { GiShoppingCart } from 'react-icons/gi';

const NavMenu = ({ toggleMobile, isOpen }) => {
	return (
		<nav className='navbar'>
			<ul className='navbar__list'>
				<Link className='navbar__logo' to='/'>
					okOCha
				</Link>
				<li className='navbar__list__item'>
					<NavLink to='/' exact className='navbar__link'>
						HOME
					</NavLink>
				</li>
				<li className='navbar__list__item'>
					<NavLink to='/membership' className='navbar__link'>
						MEMBERSHIP
					</NavLink>
				</li>
				<li className='navbar__list__item'>
					<NavLink to='/schedule' className='navbar__link'>
						SCHEDULE
					</NavLink>
				</li>
				<li className='navbar__list__item'>
					<NavLink to='/products' className='navbar__link'>
						PRODUCTS
					</NavLink>
				</li>
				<li className='navbar__list__item'>
					<NavLink to='/cart' className='navbar__link'>
						<div className='menu__cart__container'>
							<p>View Cart</p>
							<GiShoppingCart />
						</div>
					</NavLink>
				</li>
				<div className='navbar__button' onClick={toggleMobile}>
					<FaBars />
				</div>
			</ul>
		</nav>
	);
};

export default NavMenu;
