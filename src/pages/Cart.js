import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../Containers/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartList = useSelector((state) => state.cart);

  const cartItems = cartList.map((tuote) => {
    return (
      <div className="cart" key={tuote.id}>
        <CartCard
          id={tuote.id}
          key={tuote.id}
          kuva={tuote.kuva}
          nimi={tuote.nimi}
          hinta={tuote.hinta}
          removeBtn={"Poista"}
        />
      </div>
    );
  });

  return (
    <main id="cart">
      <h1>Ostoskori</h1>
      <div className="cartItems">{cartItems}</div>
      <h2>Yhteensä €</h2>
      {/* <Link to="/kassalle"> Maksamaan mars! </Link> */}
      <a href="https://artisaanz.herokuapp.com/checkout">
        {" "}
        Herokuun maksamaan tästä!{" "}
      </a>
    </main>
  );
};

export default Cart;
