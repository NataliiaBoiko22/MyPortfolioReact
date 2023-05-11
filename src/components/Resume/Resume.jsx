import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Resume.module.scss";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/CVNataliiaBoiko.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Resume = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <div className={css.upperElements}>
        <span
          className="primaryText"
          variants={fadeIn("right", "tween", 0.2, 1)}>
          <a href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
            <AiOutlineDownload />
            &nbsp;Download CV
          </a>
        </span>
      </div>

      <div className={css.resume}>
        <Document
          file="/src/assets/CVNataliiaBoiko.pdf"
          className={`innerWidth flexCentr paddings ${css.resumeDoc}`}>
          <Page
            pageNumber={1}
            renderAnnotationLayer={false}
            renderTextLayer={false}
          />
        </Document>
      </div>
    </section>
  );
};

export default Resume;
