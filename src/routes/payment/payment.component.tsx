import { InputText } from "primereact/inputtext";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { PaymentForm } from "../../components/payment-form/payment-form.component";
import { selectCartTotal } from "../../store/cart/cart.selector";

import "./payment.styles.scss";
export const Payment = () => {
	const cartTotal = useSelector(selectCartTotal);
	const [tax, setTax] = useState(0.0);
	const shipping = 7.33;
	useEffect(() => {
		setTax(parseFloat((cartTotal * 0.07).toFixed(2)));
	}, [cartTotal]);
	return (
		<div>
			<div className="stripe-warning">
				This was hooked up to stripe payments, but people kept putting
				in real credit cards.
			</div>
			<div className="payment-container">
				<div className="shipping-container">
					<h4>Account Information</h4>
					<div>
						<span className="p-float-label">
							<InputText
								type="email"
								required
								// onChange={handleChange}
								name="email"
								id="email"
								// value={email}
							/>
							<label htmlFor="email">Email</label>
						</span>
					</div>
					<div>
						<span className="p-float-label">
							<InputText
								type="phone"
								required
								// onChange={handleChange}
								name="phone"
								id="phone"
								// value={email}
							/>
							<label htmlFor="phone">Phone Number</label>
						</span>
					</div>
					<h4>Shipping Address</h4>
					<div>
						<span className="p-float-label">
							<InputText
								type="address"
								required
								// onChange={handleChange}
								name="address"
								id="address"
								// value={email}
							/>
							<label htmlFor="address">Address</label>
						</span>
					</div>
					<div>
						<span className="p-float-label">
							<InputText
								type="city"
								required
								// onChange={handleChange}
								name="city"
								id="city"
								// value={email}
							/>
							<label htmlFor="city">City</label>
						</span>
					</div>
					<div className="state-container">
						<div>
							<span className="p-float-label">
								<InputText
									type="state"
									required
									// onChange={handleChange}
									name="state"
									id="state"
									// value={email}
								/>
								<label htmlFor="state">State/Province</label>
							</span>
						</div>
						<div>
							<span className="p-float-label">
								<InputText
									type="zip"
									required
									// onChange={handleChange}
									name="zip"
									id="zip"
									// value={email}
								/>
								<label htmlFor="zip">Zip/Postal Code</label>
							</span>
						</div>
					</div>
					<div>
						<span className="p-float-label">
							<InputText
								type="Country"
								required
								// onChange={handleChange}
								name="Country"
								id="Country"
								// value={email}
							/>
							<label htmlFor="Country">Country</label>
						</span>
					</div>
				</div>
				<div className="payment-method-container">
					<h4>Payment Method</h4>
					<div>
						<span className="p-float-label">
							<InputText
								type="CardholderName"
								required
								// onChange={handleChange}
								name="CardholderName"
								id="CardholderName"
								// value={email}
							/>
							<label htmlFor="CardholderName">
								Cardholder Name
							</label>
						</span>
					</div>
					<div>
						<span className="p-float-label">
							<InputText
								type="CardNumber"
								required
								// onChange={handleChange}
								name="CardNumber"
								id="CardNumber"
								// value={email}
							/>
							<label htmlFor="CardNumber">Card Number</label>
						</span>
					</div>
					<h4>Expiration</h4>
					<div className="card-expiry-container">
						<div>
							<span className="p-float-label">
								<InputText
									type="Month"
									required
									// onChange={handleChange}
									name="Month"
									id="Month"
									// value={email}
								/>
								<label htmlFor="Month">Month</label>
							</span>
						</div>
						<div>
							<span className="p-float-label">
								<InputText
									type="Year"
									required
									// onChange={handleChange}
									name="Year"
									id="Year"
									// value={email}
								/>
								<label htmlFor="Year">Year</label>
							</span>
						</div>
						<div>
							<span className="p-float-label">
								<InputText
									type="CVV"
									required
									// onChange={handleChange}
									name="CVV"
									id="CVV"
									// value={email}
								/>
								<label htmlFor="CVV">CVV</label>
							</span>
						</div>
					</div>
					<h4>Order Summary</h4>
					<div className="summary-item-container">
						<div>Subtotal</div>
						<div>${cartTotal}</div>
					</div>
					<div className="summary-item-container">
						<div>Shipping</div>
						<div>${shipping}</div>
					</div>
					<div className="summary-item-container">
						<div>Tax</div>
						<div>${tax}</div>
					</div>
					<hr />
					<div className="summary-item-container">
						<div>Total</div>
						<div>${cartTotal + shipping + tax}</div>
					</div>
					{/*				<PaymentForm />
					 */}
					<div className="place-order-button">
						<button
							// onClick={handleCheckoutClick}
							className="checkout-button"
						>
							Place Order
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};
