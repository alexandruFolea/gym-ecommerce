import React, { useState, Fragment } from 'react';
import NavMenu from './NavMenu';
import NavMenuMobile from './NavMenuMobile';

const Navigation = () => {
	const [showMobile, setShowmobile] = useState(false);

	const closeMobile = () => {
		setShowmobile(false);
	};

	const toggleMobile = () => {
		setShowmobile(!showMobile);
	};

	return (
		<Fragment>
			<NavMenu toggleMobile={toggleMobile} />
			<NavMenuMobile isOpen={showMobile} closeMobile={closeMobile} />
		</Fragment>
	);
};

export default Navigation;
