import React from "react";
import { Document, Page } from "react-pdf";
import { Element } from "react-scroll";
//import pdfFile from "PSD.pdf";

class Accomplishments extends React.Component {
  state = {
    numPages: 1,
    pageNumber: 1
  };

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div>
        <Element name="certifications">
          <h1 className="header">Certifications</h1>
        </Element>
        <div className="centerAbout">
          <div className="certificationSection">
            <div>
              <Document
                className="cert"
                file="PSD.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
            </div>

            <div>
              <Document
                className="cert"
                file="BlockChain.pdf"
                onLoadSuccess={this.onDocumentLoadSuccess}
              >
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
