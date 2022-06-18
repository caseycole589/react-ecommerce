import {
  BackgroundImage,
  DirectoryItemContainer,
  Body,
} from "./directory-item.styles";
import { useNavigate } from "react-router-dom";
import { DirectoryCategory } from "../directory/directory.component";
import { FC } from "react";

interface DirectoryItemProps {
  category: DirectoryCategory;
}

export const DirectoryItem: FC<DirectoryItemProps> = ({
  category: { imageUrl, title, route },
}) => {
  const navigate = useNavigate();
  const onNavigateHandler = () => navigate(route);
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};
