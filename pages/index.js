import React, { Component } from "react";
import Router from "next/router";
import Home from './home';

export default class Index extends Component {
  // componentDidMount = () => {
  //   Router.push("/home");
  // };

  render() {
    return <Home />;
  }
}
