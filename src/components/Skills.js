import React from "react";
import { Element } from "react-scroll";

// These imports help remove the console errors
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

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
                    <img
                      className="icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/300px-ISO_C%2B%2B_Logo.svg.png"
                    />
                    <div className="text">C++</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/120px-C_Sharp_wordmark.svg.png"
                    />
                    <div className="text">C#</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/300px-CSS3_logo_and_wordmark.svg.png"
                    />
                    <div className="text">CSS</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://labviewwiki.org/w/images/3/3d/Logo.git.png"
                    />
                    <div className="text">Git</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
                    />
                    <div className="text">HTML</div>
                  </td>
                </tr>
                <tr>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://cdn.auth0.com/blog/react-js/react.png"
                    />
                    <div className="text">React</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://www.w3schools.com/whatis/img_js.png"
                    />
                    <div className="text">JavaScript</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/283px-Java_programming_language_logo.svg.png"
                    />
                    <div className="text">Java</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/440px-Postgresql_elephant.svg.png"
                    />
                    <div className="text">PostgreSQL</div>
                  </td>
                  <td className="cell">
                    <img
                      className="icon"
                      src="https://miro.medium.com/max/1187/0*6xyhbXKN3Zu0htJc.png"
                    />
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
