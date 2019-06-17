import React from "react";
import { Document, Page } from "react-pdf";
import pdfFile from "../../Resume.pdf";
import { Element } from "react-scroll";

// These imports help remove the console errors
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class Resume extends React.Component {
  state = { pageNumber: 1 };

  render() {
    const { pageNumber } = this.state;
    return (
      <div>
        <Element name="resume">
          <h1 className="header">Resume</h1>
        </Element>
        <div className="centerAbout">
          <div className="certificationSection">
            <div>
              <Document className="resume" file={pdfFile}>
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
