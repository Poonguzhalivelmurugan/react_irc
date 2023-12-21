import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="product">
      <img src={productImage} />
      <div className="description">
        
        <p> Rs.{price}</p>
      </div>
      <button onClick="">Add to Card</button>
    </div>
  );
};
