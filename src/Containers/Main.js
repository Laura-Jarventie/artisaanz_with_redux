import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Makers from "../pages/Makers";
import Cart from "../pages/Cart";
import Login from "../pages/LoginForm";
import AddSeller from "../pages/AddSeller";
import About from "../pages/About";
import User from "../pages/User";
import SuccesfulPayment from "../pages/SuccesfulPayment";
import FailedPayment from "../pages/FailedPayment";
import EditProduct from "../pages/EditProduct";
import AddProductForUser from "../pages/AddProductForUser";
import UserProducts from "./UserProducts";

const Main = () => {
  return (
    <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/kotisivu" component={Landing} />
        <Route path="/tuotteet" component={Products} />
        <Route path="/artesaanit" component={Makers} />
        <Route path="/meistä" component={About} />
        <Route path="/ostoskori" component={Cart} />
        <Route path="/kirjaudu" component={Login} />
        <Route path="/register" component={AddSeller} />
        <Route path="/myyjälle" component={User} />
        <Route path="/munTuotteet" component={UserProducts} />
        <Route path="/muokkaa/:id" component={EditProduct} />
        <Route path="/lisäätuote" component={AddProductForUser} />
        <Route path="/onnistui" component={SuccesfulPayment} />
        <Route path="/epäonnistui" component={FailedPayment} />
      </Switch>
    </main>
  );
};

export default Main;
