import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../Containers/CartCard";
import { remove } from "../store/actions/actions";

const Cart = () => {
  const dispatch = useDispatch();
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
          removeBtn={<button className="removeBtn" onClick={() => dispatch(remove(tuote.id))}>Poista</button>}
        />
      </div>
    );
  });

  return (
    <main id="cart">
      <h1>Ostoskori</h1>
      <div className="cartItems">{cartItems}</div>
      <h2>Yhteensä €</h2>
      <button>Kassalle</button>
    </main>
  );
};

export default Cart;
