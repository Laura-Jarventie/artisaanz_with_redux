import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../Containers/CartCard";
import { Link } from "react-router-dom";

const Cart = () => {
  const maksa = () => {
    fetch("http://localhost:3001/create-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          { id: 1, quantity: 1 },
          { id: 2, quantity: 1 },
          { id: 3, quantity: 1 },
          { id: 4, quantity: 1 },
          { id: 5, quantity: 1 },
          { id: 6, quantity: 1 },
          { id: 7, quantity: 1 },
          { id: 8, quantity: 1 },
        ],
      }),
    })
      .then((res) => {
        if (res.ok) return res.json();
        return res.json().then((json) => Promise.reject(json));
      })
      .then(({ url }) => {
        window.location = url;
      })
      .catch((e) => [console.log(e.error)]);
  };

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
      <button onClick={() => maksa()}>Maksa nodella</button>
    </main>
  );
};

export default Cart;
