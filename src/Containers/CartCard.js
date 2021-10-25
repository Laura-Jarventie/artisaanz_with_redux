import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import "./CartCard.css";

const CartCard = ({ nimi, kuva, hinta, removeBtn }) => {
  return (
    <div className="cartCard">
      <div className="product-image">
        <img
          src={kuva}
          alt="tuotteen kuva"
          height="350px"
          width="250px"
        />
      </div>
      <div className="product-info">
        <div className="product-text">
          <h1>{nimi}</h1>
          <p>{hinta} €</p>
          <button className="removeBtn" onClick={() => console.log("poista korista")}>
            {removeBtn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
