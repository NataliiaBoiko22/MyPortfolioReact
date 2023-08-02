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
const Courses = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={` ${css.wrapper}`}>
      <a className="anchor" id="work"></a>

      <div className={` yPaddings innerWidth flexCenter ${css.container}`}>
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
                  <span className={`secondaryText ${css.school}`}>
                    {exp.place}
                  </span>
                  <span className={css.certificate}>
                    <span className={css.certificateData}>{exp.duration} </span>
                    <a href={exp.detail} className={css.certificateLink}>
                      Certificate
                    </a>
                  </span>
                </div>
                <div className={css.role}>
                  <span className={`secondaryText ${css.roleName}`}>
                    {exp.role}
                  </span>
                  <span className={css.roleDescr}>{exp.descr}</span>
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
            <div>
              <div
                className={css.circle}
                style={{ background: "#7cb63f" }}></div>
            </div>

          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Courses;
