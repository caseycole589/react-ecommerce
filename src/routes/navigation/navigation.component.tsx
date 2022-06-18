import { Fragment } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
//@ts-ignore
import { ReactComponent as Logo } from "../../assets/logo.svg";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { selectCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import {
	LogoContainer,
	NavigationContainer,
	NavLink,
	NavLinks,
} from "./navigation.styles";
export const Navigation = () => {
	//use context is a hook that causes component to rerender any time there is a change
	const currentUser = useSelector(selectCurrentUser);
	const cartOpen = useSelector(selectCartOpen);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<Logo className="logo" />
				</LogoContainer>
				<NavLinks>
					<NavLink to="/shop">Shop</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							Sign Out
						</NavLink>
					) : (
						<NavLink to="/auth">Sign In</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{cartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</Fragment>
	);
};