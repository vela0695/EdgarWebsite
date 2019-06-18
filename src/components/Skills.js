import React from "react";
import { Element } from "react-scroll";
import cplus from "./skills/c++.png";
import csharp from "./skills/csh.png";
import css from "./skills/css.png";
import git from "./skills/git.png";
import html from "./skills/html.png";
import java from "./skills/java.png";
import js from "./skills/javascript.png";
import nodejs from "./skills/nodejs.png";
import postgresql from "./skills/postgresql.svg";
import react from "./skills/react.png";
import ts from "./skills/typescript.jpg";

// These imports help remove the console errors
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class Skills extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <Element name="skills">
          <h1 className="header">Skills</h1>
        </Element>
        <div className="centerAbout">
          <div style={{ textAlign: "-webkit-center" }}>
            <table>
              <tbody>
                <tr>
                  <td>
                    <img className="icon" src={cplus} />
                  </td>
                  <td>
                    <img className="icon" src={csharp} />
                  </td>
                  <td>
                    <img className="icon" src={css} />
                  </td>
                  <td>
                    <img className="icon" src={git} />
                  </td>
                  <td>
                    <img className="icon" src={html} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <img className="icon" src={react} />
                  </td>
                  <td>
                    <img className="icon" src={js} />
                  </td>
                  <td>
                    <img className="icon" src={java} />
                  </td>
                  <td>
                    <img className="icon" src={postgresql} />
                  </td>
                  <td>
                    <img className="icon" src={ts} />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
