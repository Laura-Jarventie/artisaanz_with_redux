import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ id, nimi, kuva, artesaani, hinta, kategoria }) => {
  return (
    <div className="productCard">
      <Link to={`/tuotteet/${id}`}>
        <img src={kuva[0].kuva} alt="tuotteen kuva" />
      </Link>
      <div className="product-details">
        <span className="product-category"> {kategoria}</span>
        <Link to={`/tuotteet/${id}`}>
          <h4>{nimi}</h4>
        </Link>
        <p>{artesaani} </p>
        <div className="product-bottom-details">
          <div className="product-price">{hinta} €</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
