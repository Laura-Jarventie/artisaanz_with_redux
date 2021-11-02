import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import MakersProducts from "../Containers/MakersProducts";
import { initializeProducts } from "../store/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const Maker = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [maker, setMaker] = useState();
  const [productByCurrentUser, setProductByCurrentUser] = useState(false);

  useEffect(() => {
    if (history.location.state) {
      setMaker(history.location.state.maker);
    }
  }, [history.location.state]);

  useEffect(() => {
    dispatch(initializeProducts());
  }, [dispatch]);

  const allProducts = useSelector((state) => state.products);

  useEffect(() => {
    allProducts.forEach((product) => {
      if (product.artesaani === maker) {
        setProductByCurrentUser(true);
      }
    });
  });

  return (
    <>
      {maker ? (
        <>
          <h1 className="makerside">Tervetuloa käyttäjä {maker}!</h1>
          {productByCurrentUser ? (
            <>
              <h2 className="makerside">
                Lisää tuotteita{" "}
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
          ) : (
            <>
              <h2 className="makerside">
                Lisää ensimmäinen tuotteesi{" "}
                <Link
                  to={{
                    pathname: "/lisäätuote",
                    state: { maker: maker },
                  }}
                >
                  täältä{" "}
                </Link>
              </h2>
            </>
          )}
        </>
      ) : (
        <h2 className="makerside">
          Et ole kirjautunut sisään. Kirjaudu{" "}
          <Link
            to={{
              pathname: "/kirjaudu",
              state: { maker: maker },
            }}
          >
            täältä{" "}
          </Link>
        </h2>
      )}
    </>
  );
};

export default Maker;
