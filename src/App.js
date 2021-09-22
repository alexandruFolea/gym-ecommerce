import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/landing-page/LandingPage';
import Layout from './components/layout/Layout';
import MembershipPage from './Pages/membership-page/MembershipPage';
import CartPage from './Pages/cart/CartPage';
import './styles/main.scss';
import SchedulePage from './Pages/schedule/SchedulePage';
import Products from './Pages/products/ProductsPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
	return (
		<div className='App'>
			<Layout>
				<ScrollToTop>
					<Switch>
						<Route path='/' exact>
							<LandingPage />
						</Route>
						<Route path='/membership' exact>
							<MembershipPage />
						</Route>
						<Route path='/schedule' exact>
							<SchedulePage />
						</Route>
						<Route path='/products' exact>
							<Products />
						</Route>
						<Route path='/cart' exact>
							<CartPage />
						</Route>
					</Switch>
				</ScrollToTop>
			</Layout>
		</div>
	);
}

export default App;
