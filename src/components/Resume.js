import React from "react";
import { Document, Page } from "react-pdf";
//import pdfFile from "PSD.pdf";

class Resume extends React.Component {
  state = { numPages: 1, pageNumber: 1 };

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div>
        <h1 className="header">Resume</h1>
        <div className="centerAbout">
          <div className="certificationSection">
            <div>
              <Document
                className="resume"
                file="Resume.pdf"
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

export default Resume;
