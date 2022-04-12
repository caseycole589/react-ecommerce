import { useState } from "react"
import { CategoryItem } from "../components/category-item/category-item.component"
import "./directory.styles.scss"
export const DirectoryComponent = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map(category => (
        <CategoryItem key={category.title} category={category} />
      ))}
    </div>
  )
}
