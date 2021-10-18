import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Components/ProductSingle.css";

const ProductSingle = () => {

const dispatch = useDispatch();
const tuotteet = useSelector((state) => state.single);
let tuoteData = undefined;
const history = useHistory();
console.log(tuotteet.id);

tuoteData = (
    <div className="singleProduct">
      <div className="mainImage">
        {tuotteet.kuva
          .filter((item) => item.id === 1)
          .map((item) => {
            return (
              <button
                // onClick={() => {
                //   setPopupImg(item.kuva);
                //   popupHandler();
                // }}
              >
                <img src={item.kuva} alt="tuotteen kuva" key={item.id} />
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
                // onClick={() => {
                //   setPopupImg(item.kuva);
                //   popupHandler();
                // }}
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
      <button id="backbtn" onClick={() => history.goBack()}>
        Takaisin
      </button>
    </div>
  );


  return(
  <main>
      {/* {showPopup && <Popup />} */}
      {tuoteData}
    </main>
  );
};

export default ProductSingle;
