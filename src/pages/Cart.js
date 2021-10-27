import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../Containers/CartCard";
import { remove } from "../store/actions/actions";
import { initializeCart } from "../store/actions/actions";

import "../Containers/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  const cartList = useSelector((state) => state.cart);

  const cartItems = cartList.map((tuote) => {
    return (
      <div className="cart" key={tuote.id}>
        <CartCard
          id={tuote.id}
          key={tuote.id}
          kuva={tuote.kuva[0].kuva}
          nimi={tuote.nimi}
          hinta={tuote.hinta}
          removeBtn={
            <button
              className="removeBtn"
              onClick={() => dispatch(remove(tuote.id))}
            >
              Poista
            </button>
          }
        />
      </div>
    );
  });

  return (
    <main id="cart">
      <h1 className="heading">Ostoskori</h1>
      <div className="cartItems">{cartItems}</div>
      <h2 className="heading">Yhteensä €</h2>
      <button className="cartBtn">Kassalle</button>
    </main>
  );
};

export default Cart;
