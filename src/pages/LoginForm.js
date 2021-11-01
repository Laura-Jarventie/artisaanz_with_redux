import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import bcrypt from "bcryptjs";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import "../Containers/LoginForm.css";
import { changeLogin } from "../store/actions/actions";

const LoginForm = () => {
  const dispatch = useDispatch();
  const [maker, setMaker] = useState();
  const [logged, setLogged] = useState(false);
  const makersList = useSelector((state) => state.makers);

  const comparePW = async (password, user) => {
    if (await bcrypt.compare(password, user.password)) {
      setMaker(user);
      setLogged(true);

      dispatch(changeLogin());
      <Redirect to="/myyjälle" />;
    } else {
      alert(
        "Salasanasi tai käyttäjätunnuksesi on virheellinen. Tarkista tiedot."
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;

    makersList.forEach((el) => {
      if (el.email === email) {
        comparePW(password, el);
      }
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="loginForm">
        <div className="login-element">
          <label htmlFor="exampleEmail">Sähköposti </label>
          <input
            type="email"
            placeholder="nimi@esimerkki.com"
            name="email"
          ></input>
        </div>
        <div className="login-element">
          <label htmlFor="examplePw">Salasana </label>
          <input type="password" placeholder="salasana" name="password"></input>
        </div>
        <button className="loginBtn" type="submit">
          KIRJAUDU
        </button>
        <p>
          Etkö ole vielä Artesaani? Rekisteröidy
          <Link to="/register"> TÄÄLLÄ </Link>
        </p>
      </form>
      {logged && (
        <Redirect
          to={{
            pathname: "/myyjälle",

            state: { maker: maker.nimi },
          }}
        />
      )}
    </>
  );
};

export default LoginForm;
