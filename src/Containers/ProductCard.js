import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { singleProduct } from "../store/actions/actions";

const ProductCard = ({ id, nimi, kuva, artesaani, hinta, kategoria }) => {
  const dispatch = useDispatch();
  return (
    <div className="productCard">
      <Link to={`/tuotteet/${id}`} onClick={() => dispatch(singleProduct(id))}>
        <p>{nimi}</p>
      </Link>
      <Link to={`/tuotteet/${id}`}>
        <img src={kuva[0].kuva} alt="tuotteen kuva" />
      </Link>
      <p>Artesaani: {artesaani} </p>
      <p>Hinta: {hinta} €</p>
      <p>Kategoria: {kategoria}</p>
    </div>
  );
};

export default ProductCard;