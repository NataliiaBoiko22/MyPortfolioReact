import React from "react";
import { courses } from "../../utils/data";
import css from "./Courses.module.scss";
import { motion } from "framer-motion";
import {
  fadeIn,
  staggerChildren,
  textVariant2,
  zoomIn,
} from "../../utils/motion";
const Work = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}>
      <a className="anchor" id="work"></a>

      <div
        className={`paddings yPaddings innerWidth flexCenter ${css.container}`}>
        {/* heading */}
        <span className="primaryText">My Education</span>

        <div className={`flexCenter ${css.experiences}`}>
          {courses.map((exp, i) => {
            return (
              <motion.div
                variants={textVariant2}
                key={i}
                className={`flexCenter ${css.exp}`}>
                <div className={css.post}>
                  <h1>{exp.place}</h1>
                  <p className={css.certificate}>
                    {exp.duration}{" "}
                    <a href={exp.detail} className={css.certificateLink}>
                      Certificate
                    </a>
                  </p>
                </div>
                <div className={css.role}>
                  <h1>{exp.role}</h1>
                  <h4>{exp.descr}</h4>
                </div>
              </motion.div>
            );
          })}

          <motion.div variants={zoomIn(1, 1)} className={css.progressbar}>
            <motion.div
              variants={fadeIn("down", "tween", 2, 1.5)}
              className={css.line}></motion.div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#7cb63f" }}></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "orange" }}></div>
            </div>
            <div>
              <div
                className={css.circle}
                style={{ background: "#007bb5" }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
