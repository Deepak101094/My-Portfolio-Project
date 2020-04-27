import React from "react";
import Home from "./components/Home";
import "./App.css";
//import from hoc
import Layout from "./HOC/Layout/index";
//import from material-ui
import CssBaseline from '@material-ui/core/CssBaseline';
// import from react-particles
import Particles from "./Animation/Particles";


function App() {
  return (
    <>
    <CssBaseline />
    <Particles />
      <Home />
     </>
  );
}

export default Layout(App);
