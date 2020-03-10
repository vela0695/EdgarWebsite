import React from "react";
import { Document, Page } from "react-pdf";
import { Element } from "react-scroll";
import Button from "@material-ui/core/Button";

// These imports help remove the console errors
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Resume extends React.Component {
  state = { pageNumber: 1 };

  render() {
    const { pageNumber } = this.state;
    return (
      <div>
        <Element name="resume">
          <h1 className="header">Resume</h1>
        </Element>
        <div className="centerPDF">
          <div className="certificationSection">
            <div>
              <Document className="resume" file="Resume.pdf">
                <Page pageNumber={pageNumber} />
                <a
                  href="Resume.pdf"
                  download="EdgarVColin"
                  className="downloadLink"
                >
                  <Button
                    style={{ margin: "0 auto", top: "10px", display: "block" }}
                    variant="contained"
                    color="primary"
                  >
                    Download
                  </Button>
                </a>
              </Document>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
