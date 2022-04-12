import { Home } from "./routes/home/home.component.jsx"
import { Routes, Route, Outlet } from "react-router-dom"
const Navigation = () => {
  return (
    <div>
      <h1>I am the navic</h1>
      <Outlet />
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* when you match / add index as base component */}
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
