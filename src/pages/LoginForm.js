import React, { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import bcrypt from "bcryptjs";
import { Link, useHistory } from "react-router-dom";
import { Redirect } from "react-router";

import "../Containers/LoginForm.css";

const LoginForm = () => {
  const history = useHistory();
  const [maker, setMaker] = useState();
  const [logged, setLogged] = useState();
  const makersList = useSelector((state) => state.makers);
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    console.log("Email: " + email + " and password: " + password);

    makersList.forEach((maker) => {
      if (maker.email === email) {
        console.log(`Found you, ${maker.nimi}!`);
        bcrypt.compare(password, maker.password).then((result) => {
          console.log("It's the same password: " + result);
        });

        setMaker(maker);
        setLogged(true);
        console.log(logged);

        <Redirect to="/myyjälle" />;
      } else {
        console.log(
          "That's not me, my email (if any) is " + maker.email + " 🤔"
        );
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
