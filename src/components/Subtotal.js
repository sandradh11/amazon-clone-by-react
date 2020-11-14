import React from "react";
import "../css/Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../contextAPI/reducer";
import { useStateValue } from "../contextAPI/StateProvider";
function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <h2>Summary</h2>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        thousandSeperator={true}
        value={getBasketTotal(basket)}
        displayType={"text"}
        prefix={"€"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
