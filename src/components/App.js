import React, { Component } from "react";
import HeaderAnimation from "./HeaderAnimation";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Accomplishments from "./Accomplishments";
import Resume from "./Resume";
//import "../main.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <HeaderAnimation />
        <div className="aboutSection">
          <About />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Accomplishments />
        </div>
        <div>
          <Resume />
        </div>
      </div>
    );
  }
}

export default App;
