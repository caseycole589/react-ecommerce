import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
//@ts-ignore
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { selectCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
export const Navigation = () => {
	//use context is a hook that causes component to rerender any time there is a change
	const currentUser = useSelector(selectCurrentUser);
	const cartOpen = useSelector(selectCartOpen);

	return (
		<Fragment>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link className="nav-link" to="/shop">
						Shop
					</Link>
					<Link className="nav-link" to="/wishlist">
						Wish List
					</Link>
					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							Sign Out
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							Sign In
						</Link>
					)}
					<CartIcon />
				</div>
				{cartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};
