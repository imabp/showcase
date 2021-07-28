import * as React from "react";
import { PDFObject } from "react-pdfobject";
const Resume = () => {
  return (
    <div style={{ height: "100%" }}>
      <h4>
        Fetched from{" "}
        <u>
          <a
            style={{ color: "purple", textDecoration: "none" }}
            href="https://imabp.github.io/resume"
            rel="noopenner noreferrer"
            target="_blank"
          >
            imabp.github.io/resume
          </a>
        </u>
      </h4>
      <PDFObject
        url="https://imabp.github.io/resume/resume.pdf"
        height="99vh"
        fallbackLink="Your browser donot support PDF Embeds"
      />
    </div>
  );
};
export default Resume;
