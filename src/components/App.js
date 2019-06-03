import React, { Component } from "react";
import HeaderAnimation from "./HeaderAnimation";
import Header from "./Header";
import About from "./About";
//import "../main.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <HeaderAnimation />
        <div>
          <About />
        </div>
      </div>
    );
  }
}

export default App;
