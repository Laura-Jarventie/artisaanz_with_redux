import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const CartCard = ({ nimi, kuva, hinta, removeBtn }) => {
  return (
    <div className="cartCard">
      <img src={kuva[0].kuva} alt="tuotteen kuva" height="250" width="250" />
      <p>{nimi}</p>
      <p>{hinta} €</p>
      <button onClick={() => console.log("poista korista")}>{removeBtn}</button>
    </div>
  );
};

export default CartCard;
