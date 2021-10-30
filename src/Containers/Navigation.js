import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";

const Navigation = () => {
  const cart = useSelector((state) => state.cart);
  let count = cart.length;

  return (
    <nav>
      <ul>
        <li>
          <Link to="/kotisivu"> Kotisivu </Link>
        </li>
        <li>
          <Link to="/tuotteet"> Tuotteet </Link>
        </li>
        <li>
          <Link to="/artesaanit"> Artesaanit </Link>
        </li>
        <li>
          <Link to="/meistä"> Meistä</Link>
        </li>
        <li>
          {count > 0 ? (
            <Link to="/ostoskori" className="fat-icon">
              <FaShoppingCart />({count})
            </Link>
          ) : (
            <Link to="/ostoskori" className="icon">
              <FaShoppingCart />
            </Link>
          )}
        </li>
        <li>
          <Link to="/kirjaudu"> Kirjaudu</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
