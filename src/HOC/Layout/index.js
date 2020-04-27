import React, { Component } from "react";
import Header from "./Header";
//import Particles from "react-particles-js";

const Layout = (InputComponent) => {
  return class extends Component {
    render() {
      return (
        <React.Fragment>
          <Header />
          <InputComponent />
        </React.Fragment>
      );
    }
  };
};
export default Layout;
