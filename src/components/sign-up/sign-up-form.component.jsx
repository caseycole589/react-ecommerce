import { useState } from "react"

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  comfirmPassword: ""
}

export const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)

  const handleChange = evt => {
    const { name, value } = evt.target
    setFormFields({ ...formFields, [name]: value })
  }
  return (
    <div>
      <h1>Sign Up With Email & Password</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} name="displayName" value={formFields.displayName} />
        <label>Email</label>
        <input type="email" required onChange={handleChange} name="email" value={formFields.email} />
        <label>Password</label>
        <input type="password" required onChange={handleChange} name="password" value={formFields.password} />
        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={formFields.comfirmPassword}
        />
        <button type="submit"></button>
      </form>
    </div>
  )
}
