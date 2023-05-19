import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
            <div className="name">SHOPPING CART</div>
      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/contact"> Contact </Link>
        <Link to="/cart">
          <div className="notif-wrapper">
          <ShoppingCart size={32} />
          <div className="notif">10</div> 
          </div>
        </Link>
      </div>
    </div>
  );
};

