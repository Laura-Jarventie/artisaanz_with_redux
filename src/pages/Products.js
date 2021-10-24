import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import ProductCard from "../Containers/ProductCard";
import ProductSingle from "./ProductSingle";
import "../Containers/Products.css";
import SearchBox from "../Containers/SearchBox";
import SearchBoxDropdown from "../Containers/SearchboxDropdown";
import { searchProduct } from "../store/actions/actions";
import { useHistory } from "react-router-dom";

const Products = () => {
  const [tuote, setTuote] = useState([]);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const nimi = useSelector((state) => state.nimi);
  const [searchInput, setSearchInput] = useState("");
  const [seller, setSeller] = useState();

  const history = useHistory();
  let dropdownShow = "";

  /* useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
    }
  }); */

  const productFilter = tuote.reverse().filter((tuote) => {
    if (seller) {
      return (
        tuote.artesaani.toLowerCase().includes(seller.toLowerCase()) &&
        tuote.nimi.toLowerCase().includes(searchInput.toLowerCase())
      );
    } else {
      return (
        tuote.nimi.toLowerCase().includes(searchInput.toLowerCase()) ||
        tuote.artesaani.toLowerCase().includes(searchInput.toLowerCase()) ||
        tuote.kategoria.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  });

  const searchValueHandler = (e) => {
    if (e.target.value === "Valitse kategoria") {
      setSearchInput("");
    } else {
      setSearchInput(e.target.value);
    }
    console.log(searchInput);
  };

  const removeSeller = () => {
    history.location.state = "";
    setSeller(false);
  };

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
  if (!seller) {
    dropdownShow = <SearchBoxDropdown search={searchValueHandler} />;
  }

  return (
    <main id="products">
      <>{dropdownShow}</>
      <Switch>
        <Route path="/tuotteet/:id">
          <ProductSingle />
        </Route>
        <Route path="/tuotteet" exact>
          <SearchBox search={searchValueHandler} />
          <div className="filteredProducts">{filteredProducts}</div>
          {seller && (
            <div>
              <button id="artisanbtn" onClick={() => history.goBack()}>
                Takaisin
              </button>
              <button id="artisanbtn" onClick={() => removeSeller()}>
                Kaikkien artesaanien tuotteet
              </button>
            </div>
          )}
        </Route>
      </Switch>
    </main>
  );
};

export default Products;

/* import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route } from "react-router-dom";
import ProductCard from "../Containers/ProductCard";
import "../Containers/Products.css";
import SearchBox from "../Containers/SearchBox";
import { searchProduct } from "../store/actions/actions";

const Products = () => {
  const dispatch = useDispatch();
  const [tuote, setTuote] = useState([]);
  const productList = useSelector((state) => state.products);
  const [loading, setLoading] = useState(false);
  const keyword = useSelector((state) => state.keyword);

  const handleChange = (e) => {
    let nimi = e.target.value;
    dispatch(searchProduct(nimi));
  };

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
  ); 
   return <main className="filteredProducts">{filteredProducts}</main>; 
  
export default Products;
 */
