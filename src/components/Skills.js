import React from "react";
import { Element } from "react-scroll";
import cplus from "./skills/c++.png";
import csharp from "./skills/csh.png";
import css from "./skills/css.png";
import git from "./skills/git.png";
import html from "./skills/html.png";
import java from "./skills/java.png";
import js from "./skills/javascript.png";
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
                  <td className="cell">
                    <img className="icon" src={cplus} />
                    <div className="text">C++</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={csharp} />
                    <div className="text">C#</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={css} />
                    <div className="text">CSS</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={git} />
                    <div className="text">Git</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={html} />
                    <div className="text">HTML</div>
                  </td>
                </tr>
                <tr>
                  <td className="cell">
                    <img className="icon" src={react} />
                    <div className="text">React</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={js} />
                    <div className="text">JavaScript</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={java} />
                    <div className="text">Java</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={postgresql} />
                    <div className="text">PostgreSQL</div>
                  </td>
                  <td className="cell">
                    <img className="icon" src={ts} />
                    <div className="text">TypeScript</div>
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
