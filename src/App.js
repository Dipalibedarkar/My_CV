import React, { useState } from 'react'
import { Document, Page, pdfjs } from "react-pdf";
import myPdf from './CV.pdf';
import './index.css';

  const App = () => {
    // PDFjs worker from an external cdn
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };
  return (
    <>
      <div id="ResumeContainer">
        <Document className={"PDFDocument"} width='200' file={myPdf} onLoadSuccess={onDocumentLoadSuccess}>
          {Array.from(new Array(numPages), (el, index) => (
            <Page className={"PDFPage PDFPageOne"} key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </>
  );
};

export default App;
