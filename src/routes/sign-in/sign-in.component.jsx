import { useEffect } from "react"
import { getRedirectResult } from "firebase/auth"
import {
  auth,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils"
export const SignIn = () => {
  useEffect(() => {
    async function checkAuth(params) {
      const resp = await getRedirectResult(auth)
      if (resp) {
        const userDocRef = await createUserDocumentFromAuth(resp.user)
        console.log(userDocRef)
      }
    }
    checkAuth()
  }, [])

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup()
    const userDocRef = await createUserDocumentFromAuth(user)
    console.log(userDocRef)
  }
  // const logGoogleRedirectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect()
  //   const userDocRef = await createUserDocumentFromAuth(user)
  //   console.log(user)
  // }
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>Sign In WIth Google</button>
      <button onClick={signInWithGoogleRedirect}>Sign In WIth Google Redirect</button>
    </div>
  )
}
