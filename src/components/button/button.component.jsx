import {
	BaseButton,
	GoogleSignIn,
	InvertedButton,
	ButtonSpinner,
} from "./button.styles.jsx";
export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google-signin",
	inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]);

export const Button = ({ children, buttonType, isLoading, ...otherProps }) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};
