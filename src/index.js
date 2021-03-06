import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
//? own component
import Resume from "./container/Resume";
import About from "./container/About";
import Project from "./container/Project";
import Contact from "./container/Contact";
import { toast } from "react-toastify";

toast.configure({
  position: toast.POSITION.BOTTOM_RIGHT,
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/contacts">
        <Contact />
      </Route>
      <Route exact path="/project">
        <Project />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/resume">
        <Resume />
      </Route>
      <Route exact path="/">
        <App />
      </Route>
    </Switch>
  </Router>,

  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
