import { AuthError } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { Button } from "../button/button.component";
import { FormInput } from "../form-input/from-input.component";
import "./sign-in-form.styles.scss";

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
      <h2>Already Have An Account?</h2>
      <span>Sign In With Email & Password</span>
      <form onSubmit={handleSubmit}>
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
        <div className="buttons-container">
          <Button isLoading={false} type="submit">
            Sign In
          </Button>
          {/*TODO get rid of google signin*/}
        </div>
      </form>
    </div>
  );
};
