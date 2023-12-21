import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { PRODUCTS } from "../../products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";

import "./cart.css";
export const Cart = () => {
 

  return (
    <div className="cart">
        <h1> Your Shopping Cart is Empty</h1>
    </div>
  );
};
