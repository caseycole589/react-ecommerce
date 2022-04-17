import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils"
export const SignIn = () => {
  const logGoogleUser = async () => {
    const resp = await signInWithGooglePopup()
    console.log(resp)
  }
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
    </div>
  )
}
