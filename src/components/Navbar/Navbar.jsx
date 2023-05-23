import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const {cartTotalQuantity} = useSelector((state)=> state.cart)

  return (
    <div className="navbar">
            <div className="name">Official Konter</div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <div className="notif-wrapper">
          <ShoppingCart size={32} />
          <div className="notif">{cartTotalQuantity}</div> 
          </div>
        </Link>
      </div>
    </div>
  );
};

