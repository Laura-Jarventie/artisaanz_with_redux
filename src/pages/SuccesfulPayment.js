import React from "react";
import { Link } from "react-router-dom";

const SuccesfulPayment = () => {
  window.setTimeout(() => {
    window.location.assign("/");
  }, 4000);

  return (
    <div className="afterPayment">
      <h1>Kiitos ostoksestasi! 🤗😘</h1>
      <h2>Maksu käsitelty onnistuneesti ja lähetimme kuitin sähköpostiisi.</h2>
      <h3>
        Palataan etusivulle. Voit siirtyä sinne myös{" "}
        <Link to="/" exact>
          tästä
        </Link>
      </h3>
    </div>
  );
};

export default SuccesfulPayment;
