import React, { Component } from "react";
import HeaderAnimation from "./HeaderAnimation";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <HeaderAnimation />
        </div>
      </div>
    );
  }
}

export default App;
