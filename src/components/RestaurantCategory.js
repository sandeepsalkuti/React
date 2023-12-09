import React, { useState } from "react";
import ItemsCategory from "./ItemsCategory";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const onCategoryClick = () => {
    setShowIndex(!showItems);
  };
  return (
    <div>
      <div className="category">
        <div className="category-items" onClick={onCategoryClick}>
          <span style={{ fontSize: "20px" }}>
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemsCategory items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
