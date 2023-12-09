import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemsCategory from "./ItemsCategory";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  const dispatchClearAction = useDispatch();
  const handleClearCart = () => {
    dispatchClearAction(clearCart());
  };
  return (
    <div>
      <h3>Cart Summary</h3>
      <button onClick={handleClearCart}>ClearAll</button>
      {cartItems.map((item) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        );
      })}

      {/* {cartItems.map((item) => {
        return item.items.map((item) => {
          return (
            <div>
              <h1>{item.card.info.name}</h1>
              <p>{item.card.info.description}</p>
            </div>
          );
        });
      })} */}
      {/* <ItemsCategory items={cartItems} /> */}
    </div>
  );
};

export default Cart;
