import { BackgroundImage } from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../directory/directory.component";
import { FC } from "react";
import "./directory-item.styles.scss";

interface DirectoryItemProps {
  category: DirectoryCategory;
}

export const DirectoryItem: FC<DirectoryItemProps> = ({
  category: { imageUrl, title, route },
}) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <div className="directory-item-container" onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <h2>{title}</h2>
      <button className="shop-now-button">Shop Now</button>
    </div>
  );
};
