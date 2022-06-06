import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "../button/button.component";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
export const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const paymentHandler = async (e) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const response = await fetch(
			"/.netlify/functions/create-payment-intent",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ amount: 10000 }),
			}
		).then((resp) => resp.json());

		const clientSecret = response.paymentIntent.client_secret;

		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: elements.getElement(CardElement),
				billing_details: {
					name: "Yihua Zhang",
				},
			},
		});

		if (paymentResult.error) {
			console.log(paymentResult);
			alert(paymentResult.error.message);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				alert("Payment Successful!");
			}
		}
	};
	return (
		<PaymentFormContainer>
			<FormContainer onSubmit={paymentHandler}>
				<h2>Credit Card Payment:</h2>
				<CardElement />
				<Button>Pay Now</Button>
			</FormContainer>
		</PaymentFormContainer>
	);
};
