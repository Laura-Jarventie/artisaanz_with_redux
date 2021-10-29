import React from "react";
import { Link } from "react-router-dom";

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
      <Link to={`/munTuotteet/${id}`}>
        <p>{nimi}</p>
      </Link>
      <Link to={`/munTuotteet/${id}`}>
        <img src={kuva[0].kuva} alt="tuotteen kuva" />
      </Link>
      <p>Artesaani: {artesaani} </p>
      <p>Hinta: {hinta} €</p>
      <p>Kategoria: {kategoria}</p>
      <button>Muokkaa</button>
    </div>
  );
};

export default ProductCardForUser;
