import React from "react";
import { useStateValue } from "../contextAPI/StateProvider";
import "../css/Checkout.css";
import CheckoutProduct from "./CheckoutProduct.js";
import Subtotal from "./Subtotal.js";

function Checkout() {
  const [{ basket }] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__imageAdd"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />

        {basket?.length === 0 ? (
          <div>
            <h2>Shopping Cart is empty</h2>
            <h2>Grab some Awesome Deals</h2>
            <h3>Click "Add to Basket" next to the item</h3>
          </div>
        ) : (
          <div className="checkout__title">
            <h2>Your Shopping Cart</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
