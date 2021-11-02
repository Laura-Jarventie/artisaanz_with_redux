import React, { useState, useEffect } from "react";

const ProductDisplay = () => (
  <section>
    <div className="product">
      <img src="https://public.bc.fi/s2100140/kuvat/vehna3.jpg" alt="Leipä" />
      <div className="description">
        <h3>leipä</h3>
        <h5>€5.00</h5>
      </div>
    </div>
    <form action="/create-checkout-session.php" method="POST">
      <button type="submit">Checkout</button>
    </form>
  </section>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? <Message message={message} /> : <ProductDisplay />;
}
