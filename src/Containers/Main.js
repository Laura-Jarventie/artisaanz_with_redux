import React from 'react';
import { Switch, Route } from "react-router-dom";
import Landing from "../pages/Landing";
import Products from '../pages/Products';

const Main = () => {
    return (
            <main>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/kotisivu" component={Landing} />
        <Route path="/tuotteet" component={Products} />
      </Switch>
    </main>
    );
};

export default Main;