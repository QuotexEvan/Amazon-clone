import React from "react";
import "./Product.css";
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {
  const [{cart}, dispatch]= useStateValue()
  const AddtoBasket = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating:rating,
      },
      })
  }
  
  return (
    <div className="product">
      <div className="product_info">
        <p className="product_description">{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
          <p>⭐️</p>
          ))}
        </div>
      </div>
      <img
        className="product_image"
        src={image}
        alt="product"
      ></img>
      <button onClick={AddtoBasket} className="button_cart">Add To Cart</button>
    </div>
  );
}

export default Product;
