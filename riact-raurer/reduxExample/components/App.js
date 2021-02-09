import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import ProductsPage from "./products/ProductsPage";


function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/products" component={ProductsPage} />

      </Switch>
    </div>
  );
}

export default App;
