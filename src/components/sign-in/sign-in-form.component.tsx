import { AuthError } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { Button } from "primereact/button";
import { FormInput } from "../form-input/from-input.component";
import "./sign-in-form.styles.scss";
import { InputText } from "primereact/inputtext";
const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, email } = formFields;

  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (err) {
      //TODO error handler turn red
      switch ((err as AuthError).code) {
        case "auth/wrong-password":
          alert("Wrong Password");
          break;
        case "auth/user-not-found":
          alert("No User Registered With That Email");
          break;
        default:
          break;
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
      <h2>Aready Have An Account Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div className="sign-up-form-container">
          <div>
            <span className="p-float-label">
              <InputText
                type="email"
                required
                onChange={handleChange}
                name="email"
                id="SignInEmail"
                value={email}
              />
              <label htmlFor="SignInEmail">Email</label>
            </span>
          </div>
          <div>
            <span className="p-float-label">
              <InputText
                id="SignInPassword"
                type="password"
                required
                onChange={handleChange}
                name="password"
                value={password}
              />
              <label htmlFor="SignInPassword">Password</label>
            </span>
          </div>
        </div>
        <div className="buttons-container">
          <Button label="Sign In" className="p-button-raised" type="submit" />
        </div>
      </form>
    </div>
  );
};
