import React from "react";
import { Link} from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/Home">Home</Link>
        <Link to="/">Products</Link>
        <Link to="/Products">Category</Link>
        <Link to="/contact"> Beauty tips </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
        <Link to="/Login"> Login </Link>
        <Link to="/Signup"> Signup </Link>

      </div> 
    </div>
  );
};
