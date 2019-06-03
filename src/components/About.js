import React from "react";
import Edgar from "./fenway.jpg";
class About extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  render() {
    return (
      <div className="centerAbout">
        <img className="fenwayPicture" src={Edgar} alt="Logo" />
        <div className="aboutFont">
          <h1 style={{ padding: "10px", display: "flex" }}>Hi! I'm Edgar</h1>
          <h2 style={{ padding: "10px", display: "flex" }}>
            I'm an assiciate consulatant at FenwayGroup
          </h2>
          <h3 style={{ padding: "10px", display: "grid" }}>
            I am currently a senior at the University of Idaho. I am studying
            B.S. in Computer Science with a minor in Math. Please feel free to
            click through the headings to view my resume or get in contact with
            me. The projects tab will also take you to a page where I have
            listed some of my most recent projects.{" "}
          </h3>
        </div>
      </div>
    );
  }
}

export default About;
