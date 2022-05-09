import { DirectoryItem } from "../directory-item/directory-item.component";
import "./directory.styles.scss";
export const DirectoryComponent = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.title} category={category} />
      ))}
    </div>
  );
};
