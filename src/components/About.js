import React from "react";
import Edgar from "./fenway.jpg";
class About extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null
  };

  render() {
    return (
      <div>
        <h1 className="header">About</h1>
        <div className="centerAbout">
          <img className="fenwayPicture" src={Edgar} alt="Logo" />
          <div className="aboutFont">
            <h1 style={{ padding: "10px", display: "flex" }}>Hi! I'm Edgar</h1>
            <h2 style={{ padding: "10px", display: "flex" }}>
              I'm an assiciate consulatant @ Fenway Group
            </h2>
            <h3 style={{ padding: "10px", display: "grid" }}>
              I am a senior at the University of Idaho. I am studying B.S. in
              Computer Science with a minor in Math. Please feel free to scroll
              through my page to view my resume or get in contact with me. My
              projects section includes a list of my most resent projects and
              technologies used. I’ve also included a section to view my resume
              and certifications.{" "}
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
