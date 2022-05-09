import { BackgroundImage } from "./directory-item.styles.jsx";

export const DirectoryItem = ({ category: { imageUrl, title } }) => {
  return (
    <div className="directory-item-container">
      <BackgroundImage imageUrl={imageUrl} />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
