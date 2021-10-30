import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import MakersProducts from "../Containers/MakersProducts";

const Maker = () => {
  const history = useHistory();
  const [maker, setMaker] = useState();

  useEffect(() => {
    if (history.location.state) {
      setMaker(history.location.state.maker);
    }
  });

  console.log(maker);

  return (
    <>
      <h1>Tervetuloa käyttäjä {maker}</h1>

      <h2>
        Lisää tuotteita:
        <Link
          to={{
            pathname: "/lisäätuote",

            state: { maker: maker },
          }}
        >
          täältä{" "}
        </Link>
      </h2>
      <MakersProducts />
    </>
  );
};

export default Maker;
