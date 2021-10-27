import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import UserProducts from "../Containers/UserProducts";

const User = () => {
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
      <UserProducts />
      <h2>
        Lisää tuotteita:
        <Link to="/lisäätuote"> täältä </Link>
      </h2>
    </>
  );
};

export default User;
