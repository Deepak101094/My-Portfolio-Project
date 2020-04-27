import React from "react";
import Home from "./components/Home";
import "./App.css";
//import from hoc
import Layout from "./HOC/Layout/index";
//@materail import
import CssBaseline from '@material-ui/core/CssBaseline';
//react-particles
import Particles from "./Animation/Particles";


function App() {
  return (
    <>
  //  <CssBaseline />
   // <Particles />
      <Home />
     </>
  );
}

export default Layout(App);
