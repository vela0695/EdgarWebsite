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
              I recently graduated from the University of Idaho with a Bachelors
              of Science in Computer Science and a minor in Mathematics. I
              started working as an Associate Consultant for Fenway Group in the
              Spring semester of 2018, and this is where I discovered my passion
              for web developing. Since then, I have been part of two client
              projects, two Internal applications, built my personal website,
              and a car shopping application for my brother. I feel confident in
              my skills as a web developer and I am also ready to learn new
              technologies.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
