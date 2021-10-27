import React from "react";
import { useSelector } from "react-redux";
import bcrypt from "bcryptjs";
import { Link } from "react-router-dom";
import { Redirect } from "react-router";

import "../Containers/LoginForm.css";

const LoginForm = () => {
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
        //<Redirect push to="/myyjälle" />;
        <Link to="/myyjälle"></Link>;
      } else {
        console.log(
          "That's not me, my email (if any) is " + maker.email + " 🤔"
        );
      }
    });

    // password = "virheellinenSalasana";

    // To compare input against hashed password in db after getting it with axios call by username:
    // bcrypt.compare(password, hashedPassword).then((result) => {
    //   console.log("It's the same password: " + result);
    // });

    /***** TO CHECK CREDENTIALS: *****/

    // axios
    //   .post("https://127.0.0.1:8000/login", {
    //     email: email,
    //     password: password,
    //   })
    //   .then((response) => {
    //     console.log(response.data);
    //   })
    //   .catch((error) => {
    //     console.log(error.response.data);
    //     alert("Invalid credentials!");
    //   });
  };

  return (
    <form onSubmit={handleSubmit} className="loginForm">
      <div className="login-element">
        <label for="exampleEmail">Sähköposti </label>
        <input
          type="email"
          placeholder="nimi@esimerkki.com"
          name="email"
        ></input>
      </div>
      <div className="login-element">
        <label for="examplePw">Salasana </label>
        <input type="password" placeholder="salasana" name="password"></input>
      </div>
      <button className="loginBtn" type="submit">
        KIRJAUDU
      </button>
      <p>
        Etkö ole vielä jäsen? Rekisteröidy
        <Link to="/register"> TÄÄLLÄ </Link>
      </p>
    </form>
  );
};

export default LoginForm;
