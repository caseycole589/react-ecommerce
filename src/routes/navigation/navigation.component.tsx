import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {} from "react-router-dom";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.component";
import { CartIcon } from "../../components/cart-icon/cart-icon.component";
import { SideNav } from "../../components/side-nav/side-nav.component";
import { selectCartOpen } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "./navigation.styles.scss";
export const Navigation = () => {
	//use context is a hook that causes component to rerender any time there is a change
	const currentUser = useSelector(selectCurrentUser);
	const cartOpen = useSelector(selectCartOpen);
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setTimeout(() => {
				document.addEventListener(
					"click",
					(e) => {
						setIsOpen(false);
					},
					{ once: true }
				);
			}, 300);
		}
	}, [isOpen]);
	return (
		<Fragment>
			<div className="navigation">
				<div className="nav-links-container nav-links-container-normal">
					<div id="shopLink" className="nav-link">
						<span>Shop</span>
						<div className="shop-dropdown">
							<div
								onClick={() => navigate("/shop/hats")}
								className="shop-dropdown-link"
							>
								Hats
							</div>
							<div
								onClick={() => navigate("/shop/jackets")}
								className="shop-dropdown-link"
							>
								Jackets
							</div>
							<div
								onClick={() => navigate("/shop/mens")}
								className="shop-dropdown-link"
							>
								Mens
							</div>
							<div
								onClick={() => navigate("/shop/womens")}
								className="shop-dropdown-link"
							>
								Womens
							</div>
							<div
								className="shop-dropdown-link"
								onClick={() => navigate("/shop/sneakers")}
							>
								Sneaker
							</div>
						</div>
					</div>

					{currentUser ? (
						<span className="nav-link" onClick={signOutUser}>
							<span>Sign Out</span>
						</span>
					) : (
						<Link className="nav-link" to="/auth">
							<span>Sign In</span>
						</Link>
					)}
				</div>
				<div className="nav-links-container-small">
					<div onClick={() => setIsOpen(!isOpen)}>☰</div>
					<SideNav isOpen={isOpen} />
				</div>
				<Link to="/">
					<div className="brand-header">Urban Clothing</div>
				</Link>
				<div className="nav-links-container">
					<CartIcon />
				</div>
				{cartOpen && <CartDropdown />}
			</div>
			<Outlet />
		</Fragment>
	);
};
