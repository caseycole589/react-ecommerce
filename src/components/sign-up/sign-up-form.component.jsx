import "./sign-up-form.styles.scss";
import { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { FormInput } from "../form-input/from-input.component";
import { Button } from "../button/button.component";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, password, confirmPassword, email } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/email-already-in-use") {
        alert("email already in use");
      }
      console.log(err);
    }
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Create Account</h2>
      <span>Sign Up With Email & Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
          label="Display Name"
        />
        <FormInput
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
          label="Email"
        />
        <FormInput
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
          label="Password"
        />
        <FormInput
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
        />
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};
