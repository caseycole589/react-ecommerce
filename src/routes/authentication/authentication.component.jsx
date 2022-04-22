import { SignUpForm } from "../../components/sign-up/sign-up-form.component";
import { SignInForm } from "../../components/sign-in/sign-in-form.component";
import "./authentication.styles.scss";
export const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignUpForm />
      <SignInForm />
      {/* <button onClick={signInWithGoogleRedirect}>Sign In WIth Google Redirect</button> */}
    </div>
  );
};
