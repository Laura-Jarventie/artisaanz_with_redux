import React from "react";
import { Link } from "react-router-dom";

const FailedPayment = () => {
  window.setTimeout(() => {
    window.location.assign("/ostoskori");
  }, 4000);
  return (
    <div className="afterPayment">
      <h1>Jotain meni pieleen 🤔</h1>
      <h2>Korttiasi ei veloitettu. Palataan automaattisesti osatoskoriin.</h2>
      <h3>
        Voit palata ostoskoriin myös <Link to="/ostoskori">tästä</Link>
      </h3>
    </div>
  );
};

export default FailedPayment;
