import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProductCardForUser = ({
  id,
  nimi,
  kuva,
  artesaani,
  hinta,
  kategoria,
}) => {
  return (
    <div className="productCard">
      <p>Tuote: {nimi}</p>

      <Link to={`/munTuotteet/${id}`}>
        <img src={kuva[0].kuva} alt="tuotteen kuva" />
      </Link>
      <p>Artesaani: {artesaani} </p>
      <p>Hinta: {hinta} €</p>
      <p>Kategoria: {kategoria}</p>
      <button className="addbtn">
        <Link to={`/munTuotteet/${id}`}>Muokkaa</Link>
      </button>
    </div>
  );
};

export default ProductCardForUser;
