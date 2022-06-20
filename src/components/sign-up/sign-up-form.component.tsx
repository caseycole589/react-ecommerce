import { AuthError } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
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

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }
    try {
      const { user } = (await createAuthUserWithEmailAndPassword(
        email,
        password
      )) as any;
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (err) {
      if ((err as AuthError).code === "auth/email-already-in-use") {
        //TODO red error message
        alert("email already in use");
      }
      console.log(err);
    }
  };

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = evt.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-up-container">
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-form-container">
          <div>
            <span className="p-float-label">
              <InputText
                type="text"
                required
                onChange={handleChange}
                name="displayName"
                value={displayName}
                id="SignUpDisplayName"
              />
              <label htmlFor="SignUpDisplayName">Display Name</label>
            </span>
          </div>
          <div>
            <span className="p-float-label">
              <InputText
                type="email"
                required
                onChange={handleChange}
                name="email"
                id="SignUpEmail"
                value={email}
              />
              <label htmlFor="SignUpEmail">Email</label>
            </span>
          </div>
          <div>
            <span className="p-float-label">
              <InputText
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
                id="SignUpPassword"
              />
              <label htmlFor="SignUpPassword">Password</label>
            </span>
          </div>

          <div>
            <span className="p-float-label">
              <InputText
                type="password"
                required
                onChange={handleChange}
                name="confirmPassword"
                value={confirmPassword}
                id="SignUpConfirmPassword"
              />
              <label htmlFor="SignUpConfirmPassword">Confirm Password</label>
            </span>
          </div>
        </div>
        <Button label="Sign Up" className="p-button-raised" type="submit" />
      </form>
    </div>
  );
};
