import { Key } from "react";
import { DirectoryItem } from "../directory-item/directory-item.component";
import "./directory.styles.scss";

export interface DirectoryCategory {
  id: Key;
  title: string;
  imageUrl: string;
  route: string;
}

const categories: DirectoryCategory[] = [
  {
    id: 5,
    title: "Mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    route: "shop/mens",
  },
  {
    id: 4,
    title: "Womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    route: "shop/womens",
  },
  {
    id: 1,
    title: "Hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    route: "shop/hats",
  },
  {
    id: 2,
    title: "Jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    route: "shop/jackets",
  },
  {
    id: 3,
    title: "Sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    route: "shop/sneakers",
  },
];
export const DirectoryComponent = () => {
  return (
    <div className="directory-container">
      <div className="directory-item">
        <DirectoryItem key={categories[0].title} category={categories[0]} />
      </div>
      <div className="directory-item-row">
        <div className="directory-item">
          <DirectoryItem key={categories[1].title} category={categories[1]} />
        </div>
        <div className="directory-item">
          <DirectoryItem key={categories[2].title} category={categories[2]} />
        </div>
      </div>
      <div className="directory-item-row">
        <div className="directory-item">
          <DirectoryItem key={categories[3].title} category={categories[3]} />
        </div>

        <div className="directory-item">
          <DirectoryItem key={categories[4].title} category={categories[4]} />
        </div>
      </div>
    </div>
  );
};
