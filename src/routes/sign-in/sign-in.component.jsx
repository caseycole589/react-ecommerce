import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";
import { SignUpForm } from "../../components/sign-up/sign-up-form.component";
export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>Sign In WIth Google Redirect</button> */}
    </div>
  );
};
