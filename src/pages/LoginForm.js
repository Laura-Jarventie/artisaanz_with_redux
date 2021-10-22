import React from "react";
import axios from "axios";
import bcrypt from "bcryptjs";

const LoginForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    console.log("Email: " + email + " and password: " + password);

    let hashedPassword = await bcrypt.hash(password, 12);
    console.log("Hashed pw: " + hashedPassword);
    // password = "virheellinenSalasana";

    // To compare input against hashed password in db after getting it with axios call by username:
    bcrypt.compare(password, hashedPassword).then((result) => {
      console.log("It's the same password: " + result);
    });

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
      <div>
        <label for="exampleEmail">Email address </label>
        <input
          type="email"
          id="exampleEmail"
          placeholder="email"
          name="email"
        ></input>
      </div>
      <div>
        <label for="examplePw">Password </label>
        <input
          type="password"
          id="examplePw"
          placeholder="password"
          name="password"
        ></input>
      </div>
      <button type="submit">Login!</button>
    </form>
  );
};

export default LoginForm;
