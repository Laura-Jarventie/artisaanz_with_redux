import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Switch, Route, useHistory } from "react-router-dom";
import ProductCard from "../Containers/ProductCard";
import ProductSingle from "./ProductSingle";
import "../Containers/Products.css";
import SearchBox from "../Containers/SearchBox";
import SearchBoxDropdown from "../Containers/SearchboxDropdown";
import { addToCart, initializeProducts } from "../store/actions/actions";

const Products = () => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.products);
  const [searchInput, setSearchInput] = useState("");
  const [seller, setSeller] = useState();

  const history = useHistory();
  let dropdownShow = "";

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  useEffect(() => {
    if (history.location.state) {
      setSeller(history.location.state.seller);
    }
  }, [history.location.state]);

  const productFilter = productList.reverse().filter((tuote) => {
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
  };

  const removeSeller = () => {
    history.location.state = "";
    setSeller(false);
  };

  const filteredProducts = productFilter.map((tuote) => {
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
          buyBtn={
            <button id="buyBtn" onClick={() => dispatch(addToCart(tuote))}>
              Osta
            </button>
          }
        />
      </div>
    );
  });

  dropdownShow = <SearchBoxDropdown search={searchValueHandler} />;

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
              <button className="artisanbtn" onClick={() => history.goBack()}>
                Takaisin
              </button>
              <button className="artisanbtn" onClick={() => removeSeller()}>
                Kaikki tuotteet
              </button>
            </div>
          )}
        </Route>
      </Switch>
    </main>
  );
};

export default Products;
