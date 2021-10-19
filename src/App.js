import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";
import PrivateRoute from "./Private/PrivateRoute";
import Service from "./components/Service/Service";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <PrivateRoute path="/programs">
          <Programs />
        </PrivateRoute>
        <PrivateRoute path="/service/:id">
          <Service />
        </PrivateRoute>
        <PrivateRoute path="/shop">
          <Cart />
        </PrivateRoute>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
