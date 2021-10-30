import React, { useState, useEffect } from "react";
import ProductCardForUser from "./ProductCardForUser";

import ProductSingleForMaker from "../pages/ProductSingleForMaker";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import "../Containers/Products.css";
import Spinner from "react-bootstrap/Spinner";
import { useHistory } from "react-router-dom";

const UserProducts = () => {
  const [tuote, setTuote] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [maker, setMaker] = useState();

  const history = useHistory();

  useEffect(() => {
    if (history.location.state) {
      setMaker(history.location.state.maker);
    }
  });

  const productFilter = tuote.filter((tuote) => {
    if (maker) {
      return (
        tuote.artesaani.toLowerCase().includes(maker.toLowerCase()) &&
        tuote.nimi.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
  });

  useEffect(() => {
    axios
      .get("https://artisaanz.herokuapp.com/product/all")
      .then(setLoading(true))
      .then((resp) => setTuote(resp.data));
    setLoading(true);
  }, []);

  const searchValueHandler = (e) => {
    setSearchInput(e.target.value);
    console.log(searchInput);
  };

  const filteredProducts = productFilter.reverse().map((tuote) => {
    return (
      <div key={tuote.id}>
        <ProductCardForUser
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
    <>
      <h2>Tuotteesi:</h2>
      <div id="products">
        <Switch>
          <Route path="/munTuotteet/:id">
            <ProductSingleForMaker />
          </Route>
          <Route path="/:munTuotteet" exact>
            <div className="filteredProducts">{filteredProducts}</div>
            {loading === false && (
              <Spinner
                className="productSpinner"
                animation="border"
                variant="secondary"
              />
            )}
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default UserProducts;
