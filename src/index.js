import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/Navbar'
import Service from './components/Service'
import About from './components/About'
import Footer from "./components/Footer"


ReactDOM.render(
  <Router>
    <Header />
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/service" component={Service} />
      <Route path="/about" component={About} />
    </Switch>
    <Footer/>
  </Router>,
  document.getElementById("app")
);
