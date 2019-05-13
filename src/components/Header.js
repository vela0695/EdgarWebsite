import React, { Component } from "react";

import threeEntryPoint from "./threejs/threeEntryPoint";
//import "./header.css"

export default class Header extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render() {
    return <div ref={element => (this.threeRootElement = element)} />;
  }
}
