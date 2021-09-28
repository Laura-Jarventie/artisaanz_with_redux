import React from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Containers/ProductCard";
import "../Containers/Products.css"

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);

  const filteredProducts = productList.map((tuote) => {
    return (
      <div key={tuote.id}>
        <ProductCard
          id={tuote.id}
          key={tuote.id}
          kuva={tuote.kuva}
          nimi={tuote.nimi}
          artesaani={tuote.artesaani}
          hinta={tuote.hinta}
          kategoria={tuote.kategoria}
        />
      </div>
         );
        });

  return (
    <div>
      <div className="filteredProducts">{filteredProducts}</div>
    </div>
  );
};

export default Products;
