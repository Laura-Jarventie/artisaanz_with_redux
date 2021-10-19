import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const CartCard = ({ nimi, kuva, hinta, lkm, removeBtn, addBtn }) => {
  return (
    <div className="cartCard">
      <img src={kuva[0].kuva} alt="tuotteen kuva" height="250" width="250" />
      <p>{nimi}</p>
      <ListGroup horizontal>
        <ListGroup.Item>
          <button>{removeBtn}</button>
        </ListGroup.Item>
        <ListGroup.Item>{lkm}</ListGroup.Item>
        <ListGroup.Item>
          <button>{addBtn}</button>
        </ListGroup.Item>
      </ListGroup>
      <p>{hinta} €</p>
    </div>
  );
};

export default CartCard;
