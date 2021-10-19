import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Shop from "./components/Shop/Shop";
import Login from "./components/Login/Login";
import Services from "./components/Services/Services";
import NotFound from "./components/NotFound/NotFound";
import Header from "./components/Header/Header";
import Programs from "./components/Programs/Programs";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/programs">
          <Programs />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/shop">
          <Shop />
        </Route>
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
