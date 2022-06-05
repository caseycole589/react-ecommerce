import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
export const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const paymentHandler = async (e) => {
		e.preventDefault();
	};
	return (
		<PaymentFormContainer>
			<FormContainer>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<Button>Pay Now</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};
