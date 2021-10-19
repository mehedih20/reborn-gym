import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import Service from "./components/Services/Service";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";
import PrivateRoute from "./Private/PrivateRoute";

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
          <Shop />
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
