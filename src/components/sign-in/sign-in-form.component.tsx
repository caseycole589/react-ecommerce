import { AuthError } from "firebase/auth";
import { ChangeEvent, FormEvent, useState } from "react";
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import "./sign-in-form.styles.scss";
import { InputText } from "primereact/inputtext";
import { useNavigate } from "react-router-dom";

const defaultFormFields = {
  email: "",
  password: "",
};

export const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { password, email } = formFields;
  const navigate = useNavigate();
  const resetFormFields = () => setFormFields(defaultFormFields);

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
      navigate("/");
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
    <div className="sign-up-container sign-in">
      <h2>Sign In</h2>
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
          <button className="sign-in-button" type="submit">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};
