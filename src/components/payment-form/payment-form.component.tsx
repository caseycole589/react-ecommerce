// TODO: implement a full form with address and phone, email
import { FormEvent, useState } from "react";
import { useSelector } from "react-redux";
import { selectCartTotal } from "../../store/cart/cart.selector";
import { selectCurrentUser } from "../../store/user/user.selector";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { Button } from "primereact/button";
import { FormContainer, PaymentFormContainer } from "./payment-form.styles";
export const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const amount = useSelector(selectCartTotal);
	const currentUser = useSelector(selectCurrentUser);
	const [isProcessingPayment, setIsProcessingPayment] = useState(false);
	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		//start loading spinner
		setIsProcessingPayment(true);

		const response = await fetch(
			"/.netlify/functions/create-payment-intent",
			{
				method: "post",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ amount: amount * 100 }),
			}
		).then((resp) => resp.json());

		const clientSecret = response.paymentIntent.client_secret;
		const cardDetails = elements.getElement(CardElement);
		if (cardDetails === null) {
			console.log("card detail is null");
			return;
		}
		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				card: cardDetails,
				billing_details: {
					name: currentUser ? currentUser.displayName : "guest",
				},
			},
		});
		setIsProcessingPayment(false);
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
