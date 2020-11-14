import React from "react";
import { useStateValue } from "../contextAPI/StateProvider";
import "../css/CheckoutProduct.css";

function CheckoutProduct({ id, title, price, rating, image }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeItem = () => {
    dispatch({
      type: "REMOVE_ITEM_FROM_BASKET",
      payload: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeItem}>Remove Item</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
