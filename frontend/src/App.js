
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
function App() {

	//Adding of badge
	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;
	const userSignin = useSelector((state) => state.userSignin);
	const { userInfo } = userSignin;
	const dispatch = useDispatch();
	const signoutHandler = () => {
		dispatch(signout());
	};
	return (
		<BrowserRouter>
			<div className="freeShip">
			Enjoy 10% off your first order. Exclusions Apply. Free Shipping & 100 Day Returns.
			</div>
				<header className="row">
					<div>
						<Link className="brand" to="/">
							HER<span>Jewelries </span>
						</Link>
					</div>
					<div>
						<Link className="spare" to="/">
							HOME
						</Link>
						<Link className="spare" to="/">
							About Us
						</Link>
						<Link className="spare" to="/">
							Categories
						</Link>
						<Link className="spare" to="/">
							Engagement
						</Link>
					</div>
					
					<div>
						<Link to="/cart">
							<i className="fa fa-shopping-cart"> </i> Cart&nbsp;&nbsp;
							{cartItems.length > 0 && (
								<span className="badge">{cartItems.length}</span>
							)}
						</Link>

						{userInfo ? (
							<div className="dropdown">
								<Link to="#">
									{userInfo.name} <i className="fa fa-caret-down"></i>{' '}
								</Link>
								<ul className="dropdown-content">
									<li>
										<Link to="#signout" onClick={signoutHandler}>
											Sign Out
										</Link>
									</li>
								</ul>
							</div>
						) : (
							<Link to="/signin">Sign In</Link>
						)}
					</div>
				
				</header>
		

			<div className="grid-container">
				<main>
					<Route path="/cart/:id?" component={CartScreen}></Route>
					<Route path="/product/:id" component={ProductScreen}></Route>
					<Route path="/signin" component={SigninScreen}></Route>
					<Route path="/" component={HomeScreen} exact ></Route>

				</main>
				<footer className="row center"> All rights reserved.

				</footer>

			</div>
		</BrowserRouter>

	);
}

export default App;

