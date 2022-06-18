import { FC, ButtonHTMLAttributes } from "react";
import {
	BaseButton,
	GoogleSignIn,
	InvertedButton,
	ButtonSpinner,
} from "./button.styles";
export const BUTTON_TYPE_CLASSES = {
	base: "base",
	google: "google-signin",
	inverted: "inverted",
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base): typeof BaseButton =>
	({
		[BUTTON_TYPE_CLASSES.base]: BaseButton,
		[BUTTON_TYPE_CLASSES.google]: GoogleSignIn,
		[BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
	}[buttonType]);

export type ButtonProps = {
	buttonType?: string;
	isLoading: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<ButtonProps> = ({
	children,
	buttonType,
	isLoading,
	...otherProps
}) => {
	const CustomButton = getButton(buttonType);
	return (
		<CustomButton disabled={isLoading} {...otherProps}>
			{isLoading ? <ButtonSpinner /> : children}
		</CustomButton>
	);
};
