// import { useEffect } from "react"
// import { getRedirectResult } from "firebase/auth"
import {
  // auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth
  // signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils"
import { SignUpForm } from "../../components/sign-up/sign-up-form.component"
export const SignIn = () => {
  // useEffect(() => {
  //   async function checkAuth(params) {
  //     const resp = await getRedirectResult(auth)
  //     if (resp) {
  //       const userDocRef = await createUserDocumentFromAuth(resp.user)
  //       console.log(userDocRef)
  //     }
  //   }
  //   checkAuth()
  // }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
      <SignUpForm />
      {/* <button onClick={signInWithGoogleRedirect}>Sign In WIth Google Redirect</button> */}
    </div>
  )
}
