import React, { Fragment } from 'react';
import { GiShoppingCart } from 'react-icons/gi';
import { NavLink } from 'react-router-dom';

const NavMenuMobile = ({ isOpen, closeMobile }) => {
	const styles = isOpen ? 'mobile mobile--open' : 'mobile mobile--close';
	return (
		<Fragment>
			{isOpen ? (
				<div className='mobile__backdrop' onClick={closeMobile}></div>
			) : (
				<Fragment></Fragment>
			)}
			<nav className={`${styles}`}>
				<ul className='mobile__list'>
					<li className='mobile__list__item' onClick={closeMobile}>
						<NavLink className='mobile__link' exact to='/'>
							HOME
						</NavLink>
					</li>
					<li className='mobile__list__item' onClick={closeMobile}>
						<NavLink className='mobile__link' exact to='/membership'>
							MEMBERSHIP
						</NavLink>
					</li>
					<li className='mobile__list__item' onClick={closeMobile}>
						<NavLink className='mobile__link' exact to='/schedule'>
							SCHEDULE
						</NavLink>
					</li>
					<li className='mobile__list__item' onClick={closeMobile}>
						<NavLink className='mobile__link' exact to='/products'>
							PRODUCTS
						</NavLink>
					</li>
					<li className='mobile__list__item' onClick={closeMobile}>
						<NavLink className='mobile__link' exact to='/cart'>
							<div className='mobile__cart__container'>
								<p>VIEW CART</p>
								<GiShoppingCart />
							</div>
						</NavLink>
					</li>
				</ul>
			</nav>
		</Fragment>
	);
};

export default NavMenuMobile;
