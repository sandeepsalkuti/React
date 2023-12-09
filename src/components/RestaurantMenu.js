import React from "react";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showItems, setShowItems] = useState(false);
  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);
  console.log(resMenu);
  if (resMenu === null) return <Shimmer />;
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[0]?.card?.card?.info;
  console.log(resMenu?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  console.log(categories);

  //   const items = itemCards.map((res, index) => {
  //     <li key={index}>{res?.card?.info?.name}</li>;
  //   });
  //   console.log(items);
  return (
    <div>
      <h1 className="menuHeader">{name}</h1>
      <p className="menuSubHeader">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {categories.map((category, index) => {
        return (
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex ? true : false}
            setShowIndex={() => setShowIndex(index)}
          />
        );
      })}
      {/* <ul>
        {itemCards.map((item) => {
          return <li key={item?.card?.info?.id}>{item?.card?.info?.name}</li>;
        })}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;
