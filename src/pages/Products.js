import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "../Containers/ProductCard";
import "../Containers/Products.css";
import SearchBox from "../Containers/SearchBox";
import { searchProduct } from "../store/actions/actions";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const keyword = useSelector((state) => state.keyword);

  /* const handleChange = (e) => {
    let keyword = e.target.value;
    dispatch(searchProduct(keyword));
  }; */

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

  /*  return (
    <div>
      <input type="text" placeholder="Search" onChange={handleChange} />
      <SearchBox />
       <div className="filteredProducts">{filteredProducts}</div> 
      <ul>
        {filteredProducts
          .filter((tuote) =>
            tuote.nimi.toLowerCase().includes(keyword.toLowerCase())
          )
          .map((tuote) => (
            <li key={tuote.id}>
              <div>
                <p>
                  <strong>{tuote.title}</strong>
                  {tuote.desc}
                </p>
                {tuote.price}€
              </div>
              <div>
                  <button onClick={() => dispatch(addProduct(product))}>
                  Add to Cart 
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  ); */
  return <main className="filteredProducts">{filteredProducts}</main>;
};

export default Products;
