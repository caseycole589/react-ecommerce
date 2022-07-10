import { FC } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./side-nav.styles.scss";

interface SideNavProps {
	isOpen: boolean;
}
export const SideNav: FC<SideNavProps> = (props) => {
	const { isOpen } = props;
	const navigate = useNavigate();
	const currentUser = useSelector(selectCurrentUser);
	return (
		<div className={`sidenav ${isOpen ? "open" : ""}`}>
			<h5>Account</h5>
			{currentUser ? (
				<span className="shop-dropdown-link-side" onClick={signOutUser}>
					<span>Sign Out</span>
				</span>
			) : (
				<Link className="shop-dropdown-link-side" to="/auth">
					<span>Sign In</span>
				</Link>
			)}
			<hr />
			<h5>Shop</h5>
			<div
				onClick={() => navigate("/shop/hats")}
				className="shop-dropdown-link-side"
			>
				Hats
			</div>
			<div
				onClick={() => navigate("/shop/jackets")}
				className="shop-dropdown-link-side"
			>
				Jackets
			</div>
			<div
				onClick={() => navigate("/shop/mens")}
				className="shop-dropdown-link-side"
			>
				Mens
			</div>
			<div
				onClick={() => navigate("/shop/womens")}
				className="shop-dropdown-link-side"
			>
				Womens
			</div>
			<div
				className="shop-dropdown-link-side"
				onClick={() => navigate("/shop/sneakers")}
			>
				Sneaker
			</div>
		</div>
	);
};
