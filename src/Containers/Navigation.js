import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../App.css";
import { FaShoppingCart } from "react-icons/fa";
import { initializeLogin } from ".././store/actions/actions";

const Navigation = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let count = cart.length;
  const logged = useSelector((state) => state.logged);

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
          <Link to="/kirjaudu" onClick={() => dispatch(initializeLogin())}>
            {" "}
            {logged}
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
