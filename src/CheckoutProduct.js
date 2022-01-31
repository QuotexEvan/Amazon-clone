import React, { useState ,useEffect, useCallback} from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating}) {
  const [{ cart }, dispatch] = useStateValue();
  
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });

  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>

        <button onClick={removeFromCart}>Remove from cart</button>
      </div>

      <div className="checkoutProduct__price">
        <small>$</small>
        <strong>{price}</strong>
      </div>
    </div>
  );
}

export default CheckoutProduct;
