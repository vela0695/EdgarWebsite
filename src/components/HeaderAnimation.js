import React, { Component } from "react";
import threeEntryPoint from "./threejs/threeEntryPoint";

// Continue learning how this animation works
export default class Header extends Component {
  componentDidMount() {
    threeEntryPoint(this.threeRootElement);
  }

  render() {
    return (
      <div
        className="cool3D"
        ref={element => (this.threeRootElement = element)}
      />
    );
  }
}
