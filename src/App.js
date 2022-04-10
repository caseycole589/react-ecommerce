import { useState } from "react"
import "./categories.styles.scss"
const App = () => {
  const [categorys] = useState([
    { title: "Hats" },
    { title: "Sneakers" },
    { title: "Jackets" },
    { title: "Mens" },
    { title: "Womens" }
  ])
  return (
    <div className="categories-container">
      {categorys.map(({ title }) => (
        <div key={title} className="category-container">
          <div className="background-image"></div>
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default App
