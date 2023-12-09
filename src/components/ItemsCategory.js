import React, { useState } from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsCategory = (items) => {
  console.log(items);
  const dispatchAction = useDispatch();

  const handleAddClick = (itemsAdded) => {
    dispatchAction(addItem(itemsAdded));
    console.log(itemsAdded);
  };
  return (
    <div>
      {items.items.map((item) => {
        return (
          <div>
            <div
              style={{ display: "flex" }}
              key={item.card.info.id}
              className="accordian-items"
            >
              <div style={{ padding: "2px" }}>
                <span>{item.card.info.name}</span>
                <span> - ₹ {item.card.info.price / 100}</span>
              </div>
              <p style={{ fontSize: "12px" }}>{item.card.info.description}</p>
            </div>
            <div
              style={{ position: "relative", display: "flex", padding: "2px" }}
            >
              <img
                style={{ width: "100px" }}
                src={CDN_URL + item.card.info.imageId}
              />
              <button
                style={{ padding: "2px", position: "absolute" }}
                onClick={() => handleAddClick(item.card.info)}
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemsCategory;
