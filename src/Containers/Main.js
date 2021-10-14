import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Makers from "../pages/Makers";
import Login from "../pages/LoginForm";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/kotisivu" component={Landing} />
        <Route path="/tuotteet" component={Products} />
        <Route path="/artesaanit" component={Makers} />
        <Route path="/kirjaudu" component={Login} />
      </Switch>
    </main>
  );
};

export default Main;
