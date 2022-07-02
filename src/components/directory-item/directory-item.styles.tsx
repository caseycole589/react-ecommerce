import styled from "styled-components";

interface BackgroundImageProps {
  imageUrl: string;
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  cursor: pointer;
  width: 100%;
  height: 320px;
  background-size: cover;
  background-position: center;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;
