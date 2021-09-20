import { Switch, Route } from 'react-router-dom';
import LandingPage from './Pages/landing-page/LandingPage';
import Layout from './components/layout/Layout';
import MembershipPage from './Pages/membership-page/MembershipPage';
import SalesPage from './Pages/sales/SalesPage';
import './styles/main.scss';
import SchedulePage from './Pages/schedule/SchedulePage';
import Products from './Pages/products/ProductsPage';

function App() {
	return (
		<div className='App'>
			<Layout>
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
					<Route path='/sales' exact>
						<SalesPage />
					</Route>
				</Switch>
			</Layout>
		</div>
	);
}

export default App;
