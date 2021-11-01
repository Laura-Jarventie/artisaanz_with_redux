import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, Link, useParams } from "react-router-dom";
import "../Components/ProductSingle.css";
import { getSingleProduct } from "../services/services";
import { addToCart, initializeProducts } from "../store/actions/actions";

const ProductSingle = () => {
  const dispatch = useDispatch();
  const [tuotteet, setTuotteet] = useState();
  const [showPopup, setShowPopup] = useState(false);
  const [popupImg, setPopupImg] = useState();
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSingleProduct(id);
      setTuotteet(data);
    };
    fetchData();
  }, [id]);

  let tuoteData = undefined;

  const Popup = () => {
    return (
      <div className="popup">
        <button className="popupBtn" onClick={close}>
          Sulje
        </button>
        <img src={popupImg} onClick={close} alt="iso tuotekuva" />
      </div>
    );
  };

  const popupHandler = () => {
    setShowPopup(true);
  };

  const close = () => {
    setShowPopup(false);
  };

  if (tuotteet) {
    tuoteData = (
      <div className="singleProduct">
        <div className="mainImage">
          {tuotteet.kuva
            .filter((item) => item.id === 1)
            .map((item) => {
              return (
                <button
                  onClick={() => {
                    setPopupImg(item.kuva);
                    popupHandler();
                  }}
                >
                  <img src={item.kuva} alt="tuotteen kuva" key={item.id} />
                  <p>Klikkaa kuva suuremmaksi</p>
                </button>
              );
            })}
        </div>
        {tuotteet.kuva
          .filter((item) => item.id > 1)
          .map((item) => {
            return (
              <ul key={item.id}>
                <button
                  onClick={() => {
                    setPopupImg(item.kuva);
                    popupHandler();
                  }}
                >
                  <img src={item.kuva} alt="tuotteen kuva" key={item.id} />
                </button>
              </ul>
            );
          })}
        <h1>{tuotteet.nimi}</h1>
        <p>{tuotteet.kuvaus}</p>
        <p>
          <Link to={`/artesaanit/${tuotteet.artesaani}`}>
            Artesaani: {tuotteet.artesaani}
          </Link>
        </p>
        <p>Hinta: {tuotteet.hinta} €</p>
        <p>Kategoria: {tuotteet.kategoria}</p>
        <div className="buttons">
          <button
            id="buyBtn"
            onClick={() => {
              dispatch(addToCart(tuotteet));
              setTuotteet("");
            }}
          >
            Osta
          </button>
          <button id="backBtn" onClick={() => history.goBack()}>
            Takaisin
          </button>
        </div>
      </div>
    );
  }

  return (
    <main>
      {showPopup && <Popup />}
      {tuoteData}
    </main>
  );
};

export default ProductSingle;
