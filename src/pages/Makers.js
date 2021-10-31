import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { initializeMakers, makerName } from "../store/actions/actions";

const Makers = () => {
  const dispatch = useDispatch();
  const makerList = useSelector((state) => state.makers);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(initializeMakers());
  }, [dispatch]);

  const makers = makerList.map((maker) => {
    if (maker.id === 3) {
      return (
        <Card className="makersCard" key={maker.id}>
          {loading === true && (
            <Spinner
              className="productSpinner"
              animation="border"
              variant="secondary"
            />
          )}
          <Card.Body>
            <Card.Title>{maker.nimi}</Card.Title>
            <Card.Text>{maker.esittely}</Card.Text>
            <Link
              to={{
                pathname: "/tuotteet",
                state: { seller: maker.nimi },
              }}
            >
              Artesaanin tuotteet
            </Link>
            <Card.Link href="https://pussukat.wordpress.com/" target="_blank">
              Pussukat kotisivu
            </Card.Link>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card className="makersCard" key={maker.id}>
          {loading === true && (
            <Spinner
              className="productSpinner"
              animation="border"
              variant="secondary"
            />
          )}
          <Card.Body>
            <Card.Title>{maker.nimi}</Card.Title>
            <Card.Text>{maker.esittely}</Card.Text>
            <Link
              to={{
                pathname: "/tuotteet",
                state: { seller: maker.nimi },
              }}
            >
              Artesaanin tuotteet
            </Link>
          </Card.Body>
        </Card>
      );
    }
  });

  return <main className="makers">{makers}</main>;
};

export default Makers;
