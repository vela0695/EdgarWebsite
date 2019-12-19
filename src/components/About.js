import React from "react";
import { Element, animateScroll as scroll } from "react-scroll";
import Edgar from "./images/Edgar.jpeg";

class About extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Element name="about">
          <h1 className="header">About</h1>
        </Element>
        <div className="centerAbout">
          <img className="fenwayPicture" src={Edgar} alt="Fenway Pictire" />
          <div className="aboutFont">
            <h1 style={{ padding: "10px", display: "flex" }}>Hi! I'm Edgar</h1>
            <h2 style={{ padding: "10px", display: "flex" }}>
              I'm an associate consulatant @ Fenway Group
            </h2>
            <h3 style={{ padding: "10px", display: "grid" }}>
              I recently graduated from the University of Idaho with my Bachelors in Computer Science
              and a minor in Math. Please feel free to scroll
              through my page to view my resume or get in contact with me. My
              projects section includes a list of my most recent work and
              technologies used. I’ve also included a section to view my resume
              and certifications.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
