import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Resume.module.scss";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import pdf from "../../assets/CV Nataliia Boiko.pdf";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/nataliiaboiko22/portfolio/master/src/assets/CVNataliiaBoiko.pdf";
const Resume = () => {
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}>
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}>
            <a href={pdf} target="_blank" style={{ maxWidth: "250px" }}>
              <AiOutlineDownload />
              &nbsp;Download CV
            </a>
          </motion.span>
        </div>

        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.resume}>
          <Document
            file={resumeLink}
            className={`innerWidth flexCentr paddings ${css.resumeDoc}`}>
            <Page pageNumber={1} />
          </Document>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Resume;
