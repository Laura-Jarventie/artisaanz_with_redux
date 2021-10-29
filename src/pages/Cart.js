import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../Containers/CartCard";
import { remove, restoreProduct } from "../store/actions/actions";
import { initializeCart } from "../store/actions/actions";

import "../Containers/Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  let totalPrice = 0;

  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  const cartList = useSelector((state) => state.cart);

  const cartItems = cartList.map((tuote) => {
    totalPrice += tuote.hinta;
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
              onClick={() => dispatch(remove(tuote))}
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
      <h2 className="heading">Yhteensä {totalPrice} €</h2>
      <button className="cartBtn">Kassalle</button>
    </main>
  );
};

export default Cart;
