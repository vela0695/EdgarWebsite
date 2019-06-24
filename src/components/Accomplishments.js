import React from "react";
import { Document, Page } from "react-pdf";
import { Element } from "react-scroll";

class Accomplishments extends React.Component {
  state = {
    pageNumber: 1
  };

  render() {
    const { pageNumber } = this.state;

    return (
      <div>
        <Element name="certifications">
          <h1 className="header">Certifications</h1>
        </Element>
        <div className="centerPDF">
          <div className="certificationSection">
            <div>
              <Document className="cert" file="PSD.pdf">
                <Page pageNumber={pageNumber} />
              </Document>
            </div>

            <div>
              <Document className="cert" file="BlockChain.pdf">
                <Page pageNumber={pageNumber} />
              </Document>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Accomplishments;
