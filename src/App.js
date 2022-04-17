import { Route, Routes } from "react-router-dom"
import { Home } from "./routes/home/home.component.jsx"
import { Navigation } from "./routes/navigation/navigation.component.jsx"
import { SignIn } from "./routes/sign-in/sign-in.component.jsx"
const Shop = () => <h2>Shop</h2>
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* when you match / add index as base component */}
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  )
}

export default App
