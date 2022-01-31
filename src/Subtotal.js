import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import {getCartTotal} from './reducer.js';

function Subtotal(basket) {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat 
        renderText={(value) => (
          <>
            <h3 className="subtotal_text">
              Subtotal ({cart?.length} items): 
              <strong> {`${value}`}</strong>
            </h3>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
          />
          
     <button className="subtotal_button">Proceed to checkout</button>     
    </div>
  );
}

export default Subtotal;
