import { InputText } from "primereact/inputtext";
import { PaymentForm } from "../../components/payment-form/payment-form.component";
import "./payment.styles.scss";
export const Payment = () => {
	return (
		<div className="payment-container">
			<div className="shipping-container">
				<h3>Account Information</h3>
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
				<h3>Shipping Address</h3>
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
				<h3>Payment Method</h3>
				{/*<PaymentForm />*/}
			</div>
		</div>
	);
};
