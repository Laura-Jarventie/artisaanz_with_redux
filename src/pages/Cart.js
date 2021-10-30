import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CartCard from "../Containers/CartCard";
import StripeCheckout from "react-stripe-checkout";
import "../Containers/CartCard.css";
import { initializeCart, remove } from "../store/actions/actions";

const Cart = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(initializeCart());
  }, [dispatch]);

  const tavara = { name: "jotain", price: 2 };

  let totalPrice = 0;
  let itemNames = "";

  const cartListItems = useSelector((state) => state.cart);

  cartListItems.forEach((element) => {
    totalPrice = totalPrice + element.hinta;
    itemNames = itemNames + element.nimi + ", ";
  });

  tavara.price = totalPrice;
  tavara.name = itemNames;

  let cartItems = [];

  const makePayment = (token) => {
    const body = {
      token,
      tavara,
    };
    console.log(body.tavara);
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`https://stripe-payment-artisaanz.herokuapp.com/maksu`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log("RESPONSE ", response);
        const { status } = response;
        console.log("STATUS ", status);
        emptyCart();
        window.location.assign("/onnistui");
      })
      .catch((error) => {
        console.log(error);
        window.location.assign("/epäonnistui");
      });
  };

  const emptyCart = () => {
    console.log("Tyhjätääs ostoskori");
    cartList.forEach((el) => {
      console.log("Removing " + el.nimi);
      dispatch(remove(el));
    });
  };

  const cartList = useSelector((state) => state.cart);

  cartItems = cartList.map((tuote) => {
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
      <h2>Yhteensä {totalPrice}€</h2>
      {/* <Link to="/kassalle"> Maksamaan mars! </Link> */}
      <a href="https://artisaanz.herokuapp.com/checkout">
        {" "}
        Herokuun maksamaan tästä!{" "}
      </a>
      <button onClick={() => maksa()}>Maksa nodella</button>

      <StripeCheckout
        stripeKey={process.env.REACT_APP_KEY}
        token={makePayment}
        name={itemNames}
        amount={totalPrice * 100}
        shippingAddress
        billingAddress
        currency={"eur"}
      >
        <button className="removeBtn">Maksamaan</button>
      </StripeCheckout>
    </main>
  );
};

export default Cart;
