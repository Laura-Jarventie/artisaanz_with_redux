import React from "react";
import "./CartCard.css";

const CartCard = ({ nimi, kuva, hinta, removeBtn }) => {
  return (
    <div className="cartCard">
      <div className="product-image">
        <img src={kuva} alt="tuotteen kuva" height="350px" />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{nimi}</h1>
          <p>{hinta} €</p>
          {removeBtn}
        </div>
      </div>
    </div>
  );
};

export default CartCard;
